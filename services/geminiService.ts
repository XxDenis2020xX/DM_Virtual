
import { NPC, Quest, City, Creature, LootItem, DungeonMetadata, MerchantService } from "../types";
import * as local from "./localData";
import { GoogleGenAI, Type } from "@google/genai";
import type { NarrativeEncounter} from "../types";

// Initialize Gemini API client as per guidelines
const getAiClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

const rollDie = (sides: number) => Math.floor(Math.random() * sides) + 1;

// Resuelve expresiones de dados basadas en CR devolviendo la cadena (ej. "2d6") en lugar de tirar el dado
const resolveDiceFormula = (expr: string, cr: number = 1): string => {
  // Maneja casos complejos como (CR - 1) d6 o CR * 1.5 d6
  return expr.replace(/(\((CR\s*[\-\+\*\/]\s*[\d\.]+)\)|CR(\s*[\*\/\+\-]\s*[\d\.]+)?)\s*d(\d+)/g, (match) => {
    let numDice = cr;
    
    // Extraer operación si existe
    const opMatch = match.match(/([\-\+\*\/])\s*([\d\.]+)/);
    if (opMatch) {
      const op = opMatch[1];
      const val = parseFloat(opMatch[2]);
      if (op === '-') numDice = cr - val;
      else if (op === '+') numDice = cr + val;
      else if (op === '*') numDice = cr * val;
      else if (op === '/') numDice = cr / val;
    }

    numDice = Math.max(1, Math.round(numDice));
    const sidesMatch = match.match(/d(\d+)/);
    const sides = sidesMatch ? sidesMatch[1] : '6';
    
    return `${numDice}d${sides}`;
  });
};

// Parser para expresiones tipo "1d4 x 10" o "(CR - 1) d6" - Este sigue rodando para pasillos/habitaciones
const parseDiceExpr = (expr: string, cr: number = 1): string => {
  return expr.replace(/(\d*)d(\d+)(\s*[x\*\/\-\+]\s*\d+)?|\((CR\s*[\-\+\*\/]\s*\d+)\)\s*d(\d+)|CR\s*d(\d+)/g, (match) => {
    try {
      if (match.includes('CR')) {
        const sidesMatch = match.match(/d(\d+)/);
        const sides = sidesMatch ? parseInt(sidesMatch[1]) : 6;
        let numDice = cr;
        
        const opMatch = match.match(/\((CR\s*([\-\+\*\/])\s*(\d+))\)/);
        if (opMatch) {
          const op = opMatch[2];
          const val = parseInt(opMatch[3]);
          if (op === '-') numDice = cr - val;
          else if (op === '+') numDice = cr + val;
          else if (op === '*') numDice = cr * val;
          else if (op === '/') numDice = Math.floor(cr / val);
        } else if (match.includes('*')) {
           const multMatch = match.match(/CR\s*\*\s*([\d\.]+)/);
           if (multMatch) numDice = Math.round(cr * parseFloat(multMatch[1]));
        }

        numDice = Math.max(1, numDice);
        let total = 0;
        for (let i = 0; i < numDice; i++) total += rollDie(sides);
        return total.toString();
      } else {
        const parts = match.match(/(\d*)d(\d+)(\s*([x\*\/\-\+])\s*(\d+))?/);
        if (!parts) return match;
        const num = parts[1] ? parseInt(parts[1]) : 1;
        const sides = parseInt(parts[2]);
        let total = 0;
        for (let i = 0; i < num; i++) total += rollDie(sides);
        
        if (parts[3]) {
          const op = parts[4];
          const val = parseInt(parts[5]);
          if (op === 'x' || op === '*') total *= val;
          else if (op === '/') total /= val;
          else if (op === '+') total += val;
          else if (op === '-') total -= val;
        }
        return Math.floor(total).toString();
      }
    } catch {
      return match;
    }
  });
};

const getRandom = <T>(arr: T[]): T | null => {
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
};

const rollD100 = () => rollDie(100);
const rollD20 = () => rollDie(20);
const rollD10 = () => rollDie(10);
const rollD6 = () => rollDie(6);

const findInTable = (table: { range: number[], text: string }[], roll: number): any => {
  return table.find(i => roll >= i.range[0] && roll <= i.range[1]);
};

const generateMixedCityName = (): string => {
  const name1 = getRandom(local.cityNames) || "Roca";
  const name2 = getRandom(local.cityNames) || "Sombra";
  const prefixes = ["Roca", "Valle", "Puerto", "Bastión", "Claro", "Paso", "Villa", "Torre", "Bosque", "Aguas", "Cresta", "Río", "Colina", "Mar", "Fuerte", "Senda", "Arenas", "Cima", "Pueblo", "Bahía", "Castillo", "Refugio", "Ciudad", "Brazo", "Puente", "Fuente", "Luz", "Cala", "Páramo", "Faro", "Camino", "Boca", "Nido", "Costa", "Puerta"];
  const prefixMatch1 = prefixes.find(p => name1.startsWith(p));
  const base = prefixMatch1 || name1;
  if (Math.random() > 0.6 && name1 !== name2) {
    const prefixMatch2 = prefixes.find(p => name2.startsWith(p));
    const suffix = name2.replace(prefixMatch2 || "", "").toLowerCase();
    return base + (suffix.length > 2 ? suffix : name2.toLowerCase());
  }
  return name1;
};

// Generación de NPC usando datos locales exclusivamente

export const generateNPC = async (): Promise<NPC> => {
  const rollStatMin8 = () : number => {
    let value;
    do {
      value = rollDie(6) + rollDie(6)  + rollDie(6) + rollDie(6);
    } while (value < 8);
    return value;
  };

  const rollDieHp = ()  => {
    let value;
    do {
      value = rollDie(20);
    } while (value < 8);
    value = value + rollD6();
    return value;
  }
  
  return {
    name: `${getRandom(local.npcNames)} ${getRandom(local.npcSurnames)}`,
    race: getRandom(local.npcRaces) || "Humano",
    classOrOccupation: getRandom(local.npcClasses) || "Común",
    trait: getRandom(local.npcTraits) || "Normal",
    motivation: getRandom(local.npcMotivations) || "Sobrevivir",
    hook: getRandom(local.npcHooks) || "Ninguno visible",
    stats: {
      str: rollStatMin8(),
      dex: rollStatMin8(),
      con: rollStatMin8(),
      int: rollStatMin8(),
      wis: rollStatMin8(),
      cha: rollStatMin8(),
      hp: rollDieHp(), 
      ac: 8 + rollDie(8),
    } 
  };
};

export const generateCity = async (): Promise<City> => {
  const name = generateMixedCityName();
  const place = getRandom(local.notablePlaces) || "Una plaza común";
  const atmosphere = getRandom(local.cityAtmospheres) || "Ambiente tranquilo.";
  const densities = [{ label: 'Baja', day: 2, night: 1 }, { label: 'Media', day: 4, night: 2 }, { label: 'Alta', day: 6, night: 3 }];
  const selectedDensity = densities[Math.floor(Math.random() * densities.length)];
  const isDay = Math.random() > 0.5;
  const timeOfDay = isDay ? "Día" : "Noche";
  const numDice = isDay ? selectedDensity.day : selectedDensity.night;
  let totalPop = 0;
  for (let i = 0; i < numDice; i++) totalPop += rollD100();
  return { name, type: selectedDensity.label === 'Alta' ? 'Ciudad' : 'Pueblo', atmosphere, notablePlace: place, rumor: "Hay noticias frescas en la plaza.", population: totalPop, density: selectedDensity.label, timeOfDay: timeOfDay };
};

export const generateCityServices = async (city: City): Promise<MerchantService[]> => {
  // 1. Determinar tamaño de asentamiento basado en Población
  // Usamos rangos estándar D&D/Pathfinder pero ajustados ligeramente para que coincidan
  // con los números que suele generar este sistema (que son un poco bajos).
  let settlementType = "Aldea";
  if (city.population >= 12000) settlementType = "Metrópolis";
  else if (city.population >= 2000) settlementType = "Ciudad";
  else if (city.population >= 900) settlementType = "Villa";
  else if (city.population >= 200) settlementType = "Poblado";
  else settlementType = "Aldea";

  const results: MerchantService[] = [];

  // 2. Iterar sobre la tabla de presencia
  for (const merchant of local.merchantPresenceTable) {
    const cd = (merchant.cd as any)[settlementType];
    
    // Si CD es 99 o inaccesible con d20, no existe.
    if (cd > 20) {
       // Opcional: Podría existir con un Nat 20, pero el prompt dice "automáticas".
       // Asumiremos que >20 es imposible sin modificadores específicos que la ciudad no tiene.
       continue; 
    }

    const roll = rollD20();
    
    if (roll >= cd) {
       // El mercader existe. Ahora determinamos calidad.
       const qualityRoll = rollD20();
       const rangeList = (local.merchantQualityRanges as any)[settlementType];
       let quality = "Media";
       
       for (const range of rangeList) {
          if (qualityRoll <= range.max) {
             quality = range.q;
             break;
          }
       }

       // Determinamos CDs de objetos según calidad
       const itemCDsRaw = (local.itemFindingDC as any)[quality];
       
       results.push({
         name: merchant.name,
         exists: true,
         quality,
         itemCDs: itemCDsRaw
       });
    }
  }

  return results;
};

const resolveNarrative = (e: NarrativeEncounter): string =>
  typeof e === "function" ? e() : e;

// Nuevas funciones para generar texto de Naturaleza y Urbanos
export const generateNature = async (): Promise<string> => {
  const list = local.natureEncounters;
  const item = getRandom(list);
  if (item) return resolveNarrative(item);
  
  // Fallback a pistas si la lista está vacía
  const clue = findInTable(local.dungeonClueTable, rollD100());
  return `Silencio en el bosque... pero notas: ${clue.text}`;
};

export const generateUrban = async (): Promise<string> => {
  const list = local.urbanEncounters;
  const item = getRandom(list);
  if (item) return resolveNarrative(item);
  
  // Fallback básico
  return "Las calles están extrañamente tranquilas, solo se escucha el viento.";
};

export const generateEncounter = async (cr: number, partySize: number, category: string, specificCR?: string): Promise<Creature> => {
  // Lógica para Monstruos desde modal con CR
  if (specificCR && category === 'Monstruos') {
      const list = local.monstersByCR[specificCR] || [];
      const creature = getRandom(list); 
      
      if (creature) {
         return creature;
      }
      return { 
          name: `Monstruo CR ${specificCR}`, 
          type: "Monstruo", 
          description: `No hay monstruos definidos en la lista para CR ${specificCR}.`, 
          stats: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10, hp: 10, ac: 10 }, 
          actions: [{ name: "Ataque Genérico", desc: "Golpea." }] 
      };
  }

  // Lógica para Jefes desde modal con CR
  if (specificCR && category === 'Jefes') {
      const list = local.bossesByCR[specificCR] || [];
      const boss = getRandom(list); 
      
      if (boss) {
         return boss;
      }
      return { 
          name: `Jefe CR ${specificCR}`, 
          type: "Jefe", 
          description: `No hay jefes definidos en la lista para CR ${specificCR}.`, 
          stats: { str: 16, dex: 14, con: 16, int: 14, wis: 14, cha: 16, hp: 80, ac: 16 }, 
          actions: [{ name: "Ataque Genérico", desc: "Golpea." }] 
      };
  }

  if (category === 'Monstruos') {
    // Fallback legacy por si acaso
    const fromList = getRandom(local.monsterEncounters);
    if (fromList) return fromList;
    return { name: "Monstruo Genérico", type: "Monstruo", description: "Una criatura acecha en las sombras (Lista vacía).", stats: { str: 14, dex: 12, con: 14, int: 6, wis: 10, cha: 6, hp: 25, ac: 13 }, actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo +4" }] };
  }

  if (category === 'Jefes') {
    const fromList = getRandom(local.bossEncounters);
    if (fromList) return fromList;
    return { name: "Jefe Genérico", type: "Jefe", description: "Un enemigo formidable bloquea el camino (Lista vacía).", stats: { str: 18, dex: 14, con: 18, int: 14, wis: 14, cha: 16, hp: 80, ac: 16 }, actions: [{ name: "Multiataque", desc: "Realiza dos ataques con su arma." }] };
  }

  let list: Creature[] = [];
  if (category === 'Mazmorras') list = local.dungeonEncounters;
  else list = local.localEncounters[category] || [];
  
  const creature = getRandom(list);
  if (creature) return creature;
  
  return { name: `Amenaza: ${category}`, type: category, description: "Un peligro acecha (Lista vacía).", stats: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10, hp: 15, ac: 12 }, actions: [{ name: "Ataque", desc: "Golpea con ferocidad." }] };
};

export const generateLoot = async (crOrRange: number | string): Promise<LootItem[]> => {
  // 0. Prioridad Especial: Lista por Rango de CR (si se pasa una cadena)
  if (typeof crOrRange === 'string') {
      const rangeList = local.lootTablesByRange[crOrRange] || [];
      if (rangeList.length > 0) {
        return [getRandom(rangeList)!];
      }
      // Si la lista específica está vacía, continúa con la lógica estándar pero no falles
      // Usaremos un CR 1 por defecto para los fallbacks
  }

  const cr = typeof crOrRange === 'number' ? crOrRange : 1;

  // 1. Prioridad: Lista plana definida por el usuario
  const fromFlatList = getRandom(local.lootList);
  if (fromFlatList) return [fromFlatList];

  // 2. Prioridad: Lista por CR específico (si existe y se pasó un número)
  const list = local.localLoot[cr] || [];
  if (list.length > 0) return list;
  
  // 3. Fallback: Generación aleatoria básica
  return [{ 
    name: getRandom(local.lootNames) || "Objeto desconocido", 
    type: getRandom(local.lootTypes) || "Baratija", 
    rarity: getRandom(local.lootRarities) || "Común", 
    value: `${rollDie(100) * 5} po`, 
    description: getRandom(local.lootDescriptions) || "Un objeto simple." 
  }];
};

export const generateDungeonMetadata = async (): Promise<DungeonMetadata> => {
  const type = local.dungeonTypeTable[rollD10() - 1];
  const activityInfo = findInTable(local.dungeonActivityTable, rollD6());
  const sizeRoll = rollD20();
  let sizeLabel = "", rooms = "";
  let rawRoomCount = 0;
  if (sizeRoll <= 3) { sizeLabel = "Pequeño"; rawRoomCount = rollDie(4) + 2; }
  else if (sizeRoll <= 8) { sizeLabel = "Pequeño"; rawRoomCount = rollDie(6) + 4; }
  else if (sizeRoll <= 16) { sizeLabel = "Mediano"; rawRoomCount = rollDie(4) + rollDie(4) + rollDie(4) + rollDie(4) + 6; }
  else if (sizeRoll <= 18) { sizeLabel = "Grande"; rawRoomCount = 12; for (let i = 0; i < 5; i++) rawRoomCount += rollDie(6); }
  else if (sizeRoll === 19) { sizeLabel = "Enorme"; rawRoomCount = 24; for (let i = 0; i < 10; i++) rawRoomCount += rollDie(6); }
  else { sizeLabel = "Sin límites"; rawRoomCount = 50; }
  
  rooms = sizeRoll === 20 ? "Megamazmorra" : `${rawRoomCount} habitaciones`;

  // Probabilidad ponderada para el nivel de mazmorra
  const rollLevel = rollD100();
  let level = 1;

  if (rollLevel <= 60) {
    // 60% probabilidad: Nivel bajo (1-3)
    level = rollDie(3);
  } else if (rollLevel <= 85) {
    // 25% probabilidad: Nivel medio (4-7)
    level = 3 + rollDie(4);
  } else if (rollLevel <= 95) {
    // 10% probabilidad: Nivel alto (8-10)
    level = 7 + rollDie(3);
  } else if (rollLevel <= 99) {
    // 4% probabilidad: Nivel muy alto (11-14)
    level = 10 + rollDie(4);
  } else {
    // 1% probabilidad: Nivel extremo (15-20)
    level = 14 + rollDie(6);
  }

  return { type, size: sizeLabel, roomCount: rooms, activity: activityInfo?.text || "Silencioso", rollsPerHour: activityInfo?.rolls || 1, level };
};

export const generateDungeonPart = async (partType: string, cr: number = 1): Promise<any> => {
  if (partType === 'Pasillo') {
    const struct = findInTable(local.dungeonPassageTable, rollD20());
    const content = findInTable(local.dungeonPassageContentTable, rollD100());
    let finalContent = content.text;
    if (finalContent === '¡Trampa!') {
      const trap = await generateDungeonPart('Trampa', cr);
      finalContent = `Trampa: ${trap.text} (Tirar ${trap.dmg})`;
    }
    return { type: 'Pasillo', structure: parseDiceExpr(struct.text), content: finalContent };
  }
  
  if (partType === 'Puerta') {
    const struct = findInTable(local.dungeonDoorTable, rollD100());
    return { type: 'Puerta', structure: struct.text };
  }
  
  if (partType === 'Habitación' || partType === 'Sala Grande') {
    const struct = findInTable(local.dungeonRoomTable, rollD20());
    const content = findInTable(local.dungeonRoomContentTable, rollD100());
    let finalContent = content.text;
    if (finalContent.includes('Pista')) {
      const clue = findInTable(local.dungeonClueTable, rollD100());
      finalContent += ` | Pista: ${clue.text}`;
    }
    return { type: 'Habitación', structure: parseDiceExpr(struct.text), content: finalContent };
  }

  if (partType === 'Trampa') {
    const trap = findInTable(local.dungeonTrapTable, rollD100());
    return { 
      type: 'Trampa', 
      text: trap.text, 
      detect: trap.detect, 
      save: trap.save, 
      dmg: resolveDiceFormula(trap.dmg, cr) 
    };
  }

  if (partType === 'Pistas/Rastros') {
    const clue = findInTable(local.dungeonClueTable, rollD100());
    return { type: 'Pista', text: parseDiceExpr(clue.text) };
  }

  if (partType === 'Puerta Secreta') {
    const sec = findInTable(local.dungeonSecretDoorTable, rollDie(6));
    return { type: 'Puerta Secreta', structure: sec.text };
  }

  return { type: 'General', text: `Un elemento de ${partType} común.` };
};

// Genera todo el contenido de una vez basándose en probabilidades equilibradas
export const generateBalancedDungeonContent = async (roomCountText: string, cr: number): Promise<any[]> => {
  let targetCount = parseInt(roomCountText.match(/\d+/)?.[0] || "10");
  if (roomCountText === "Megamazmorra") targetCount = 30;
  
  const elements: any[] = [];
  let currentRoomCount = 0;
  
  while (currentRoomCount < targetCount) {
    const roll = rollD100();
    let type = "";
    let countsAsRoom = true;

    if (roll <= 25) type = 'Puerta';
    else if (roll <= 55) type = 'Habitación';
    else if (roll <= 80) type = 'Pasillo';
    else if (roll <= 90) type = 'Sala Grande';
    else if (roll <= 95) type = 'Trampa';
    else {
      type = 'Pistas/Rastros';
      countsAsRoom = false; // Las pistas NO cuentan como habitación
    }

    const part = await generateDungeonPart(type, cr);
    elements.push(part);
    
    if (countsAsRoom) {
      currentRoomCount++;
    }
  }

  return elements;
};

// Generación de Misión usando exclusivamente las tablas d100 locales
export const generateQuest = async (): Promise<Quest> => {
  const problem = findInTable(local.questProblemTable, rollDie(300));
  const source = findInTable(local.questSourceTable, rollD100());
  const twist = getRandom(local.questTwists) || "Nada es lo que parece.";
  
  return { 
    title: `Misión: ${problem.text.split('(')[0].trim()}`, 
    objective: problem.text, 
    source: source.text, 
    reward: `${rollDie(20)+ 5} po`, 
    twist 
  };
};

export const queryOracle = async (question: string, probability: string): Promise<string> => {
  const ai = getAiClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Oracle Question: "${question}". Probability: ${probability}. Answer the question as a mysterious oracle in a tabletop RPG. Be brief but thematic.`,
    });
    return response.text || "El oráculo permanece en silencio...";
  } catch (e) {
    console.error("Gemini failed, using local oracle data", e);
    return getRandom(local.localOracleAnswers) || "El oráculo permanece en silencio...";
  }
};
