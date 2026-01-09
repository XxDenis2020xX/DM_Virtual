
import { NPC, Creature, LootItem } from "../types";
import type { NarrativeEncounter} from "../types";

// ==========================================
//  LISTAS PARA GENERACIÓN DE NPC (Rellenar aquí)
// ==========================================

export const npcNames = [
 "Borg", "Kael", "Elara", "Tharok", "Lysandra", "Dorn", "Sylas", "Mara", "Vex", "Zane",
"Ragnar", "Nyx", "Aldric", "Seraphine", "Korr", "Ilyra", "Brakk", "Zephyr", "Vara", "Malrik",
"Eira", "Torin", "Calista", "Draven", "Lyra", "Fenrik", "Isolde", "Kain", "Astra", "Morvek",
"Sable", "Orin", "Riven", "Talia", "Grimm", "Vaelis", "Keth", "Selene", "Bram", "Nox",
"Aeron", "Kara", "Ulric", "Nyssa", "Rokhan", "Elion", "Thorne", "Vesper", "Liora", "Skarn",
"Mirela", "Drogan", "Zyra", "Korvin", "Althea", "Bex", "Rurik", "Naeris", "Valko", "Ember",
"Tyr", "Sorrel", "Kaida", "Hroth", "Yara", "Cade", "Xara", "Borin", "Ilwen", "Zarek",
"Maelis", "Thrain", "Avelyn", "Krag", "Elyon", "Rysa", "Dax", "Ophira", "Fenra",

"Ashar", "Belrik", "Cindra", "Daeron", "Eryx", "Faela", "Gorim", "Helya", "Ikar", "Jora",
"Karn", "Luneth", "Mordai", "Nyrel", "Orrik", "Pyra", "Quorin", "Rhazel", "Syren", "Talrik",
"Uvara", "Vorn", "Weylin", "Xyra", "Yorik", "Zaleth", "Arkos", "Briala", "Corth", "Delyra",
"Eldran", "Fira", "Grond", "Hira", "Iskar", "Jex", "Klyra", "Lorcan", "Mavrek", "Nerith",
"Osyra", "Prynn", "Qira", "Rothar", "Saelis", "Tovak", "Umber", "Vaela", "Wrynn", "Xarek",
"Ylva", "Zorin", "Akrin", "Belys", "Caelen", "Drox", "Evara", "Fenn", "Grynn", "Havok",
"Ilyon", "Korin", "Lethis", "Myra", "Noxis", "Orvak", "Phael", "Quill", "Ryn", "Sarka",
"Thalos", "Uldra", "Virex", "Wulfric", "Xorin", "Ysera", "Zyrek", "Arven", "Brax", "Keldor"
];

export const npcSurnames = [
  "Ironfist", "Stonehelm", "Darkwood", "Blackthorn", "Stormborn", "Frostveil",
  "Grimward", "Firebrand", "Nightfall", "Oakenshield", "Ravencrest", "Bloodstone",
  "Shadowmere", "Wolfscar", "Ashenford", "Goldriver", "Duskwhisper", "Ironvale",
  "Coldwater", "Thornfield", "Graveward", "Steelhand", "Moonfall", "Brightforge",
  "Emberstone", "Hawkspire", "Deepmoor", "Wintermere", "Redcliff", "Stormwatch",
  "Grimholt", "Blackwater", "Sunreach", "Ironoak", "Frosthammer", "Duskridge",
  "Silvermark", "Stonefall", "Nightbloom", "Ashford", "Wolfbane", "Darkspire",
  "Highrock", "Firewatch", "Shadowfen", "Ironclad", "Thornhelm", "Stormridge",
  "Gravehill", "Moonshadow", "Steelborn", "Coldspire", "Blackridge", "Ravenshade",
  "Brightmoor", "Emberfall", "Ironpeak", "Dreadmoor", "Goldentide", "Frostmark",
  "Nightforge", "Stoneward", "Redmoor", "Hollowmere", "Stormcliff", "Darkvale",
  "Ironreach", "Wolfmark", "Ashenhall", "Silverthorn", "Grimspire", "Firemoor",
  "Shadowcliff", "Highmere", "Stonewatch", "Winterhall", "Bloodmark", "Oakfall",
  "Coldreach", "Stormvale", "Duskfall", "Ironmere", "Moonspire", "Blackhall",
  "Ravenmark", "Brightshield", "Emberwatch", "Gravecliff", "Frostvale",
  "Nightward", "Stonecrest", "Redspire", "Darkwatch", "Ironbark", "Wolfhall",
  "Ashencliff", "Goldmark", "Stormhall", "Grimhaven", "Blackspire", "Sunfall",
  "Coldmark", "Firecrest", "Shadowhall", "Highspire", "Stonehaven", "Wintermark",
  "Bloodhelm", "Oakspire", "Stormforge", "Dreadwatch", "Ironhaven", "Mooncrest",
  "Ravenforge", "Brightward", "Emberhelm", "Gravewatch", "Frosthall",
  "Nightcrest", "Stoneforge", "Redwatch", "Darkhall", "Ironward", "Wolfspire",
  "Ashenwatch", "Silverhall", "Stormcrest", "Grimforge", "Firehall",
  "Shadowward", "Highforge", "Stonehelm", "Winterforge", "Bloodward", "Oakhelm",
  "Coldforge", "Stormward", "Duskward", "Ironforge", "Moonhall", "Blackforge",
  "Ravenhall", "Brightforge", "Emberforge", "Graveforge", "Frostforge",
  "Nightforge", "Stoneward", "Redforge", "Darkforge", "Ironhall", "Wolfward",
  "Ashenforge", "Silverforge", "Stormforge", "Grimward", "Fireward",
  "Shadowforge", "Highward", "Stoneforge", "Winterward", "Bloodforge",
  "Oakward", "Coldward", "Stormward", "Duskward", "Ironward",
  "Moonward", "Blackward", "Ravenward", "Brightward", "Emberward"
];


export const npcRaces = [
  "Humano", "Humano", "Humano", "Humano", "Humano", "Humano","Humano",
  "Elfo", "Elfo", "Elfo", "Elfo", "Elfo", "Elfo",
  "Enano", "Enano", "Enano", "Enano","Enano",
  "Halfling", "Halfling",
  "Gnomo", "Gnomo","Gnomo","Gnomo",
  "Orco","Orco","Orco",
  "Tiefling","Tiefling",
  "Dracónido"
];

export const npcClasses = [
"Granjero","Granjero","Granjero","Granjero","Empleado","Empleado","Empleado",
"Mensajero","Mensajero","Panadero","Panadero","Pescadero","Pescadero","Carnicero","Carnicero","Frutero",
"Frutero","Leñador","Leñador","Molinero","Molinero","Tabernero","Tabernero","Herrero","Herrero","Carpintero",
"Carpintero","Cocinero","Cocinero","Sastre","Sastre","Tonelero","Quesero","Vinatero","Barquero","Soldado",
"Soldado","Sanador","Escriba","Herbalista","Boticario","Ingeniero","Armero","Cerrajero","Joyero","Platero fino",
"Constructor de barcos","Capitán de barco","Entrenador de caballos","Profesor","Banquero","Mayordomo",
"Cobrador de impuestos","Restaurador","Verdugo","Sepulturero","Funeralero","Adivino","Sacerdote","Cultista",
"Dama de compañía","Prostituta","Estafador","Ladrón menor","Palero","Artista","Entretenedor","Bárbaro","Bardo",
"Clérigo","Druida","Guerrero","Monje","Paladín","Explorador","Pícaro","Hechicero","Brujo","Mago"];


export const npcTraits = [
  "Cicatriz en el ojo","Tartamudea nerviosamente","Voz muy grave","Juega con una moneda","Huele a lavanda","Siempre está comiendo","Tiene un tatuaje tribal","Muy desconfiado","Extremadamente amable","Cojea levemente",
  "Evita el contacto visual","Ríe en momentos inapropiados","Habla demasiado rápido","Susurra al hablar","Se toca la barba al pensar","Tiene las manos siempre sucias","Mira constantemente a su alrededor","Cruje los nudillos","Suspira con frecuencia","Habla en tercera persona",
  "Tiene una risa contagiosa","Frunce el ceño sin darse cuenta","Le cuesta recordar nombres","Es supersticioso","Hace chistes malos","Es exageradamente educado","Interrumpe a los demás","Siempre llega tarde","Siempre llega temprano","Tiene una mirada intimidante",
  "Habla con acento extraño","Se ofende con facilidad","Es muy orgulloso","Evita responder preguntas directas","Tiene mal sentido de la orientación","Siempre está cansado","Se entusiasma con facilidad","Es pesimista","Es optimista extremo","Habla solo",
  "Se disculpa constantemente","No sabe guardar secretos","Es muy reservado","Tiene una voz chillona","Camina encorvado","Camina con porte militar","Habla lentamente","Se ríe solo","Mastica ruidosamente","Se pone nervioso en silencio",
  "Siempre está limpiando algo","Tiene las uñas mordidas","Tiene una sonrisa inquietante","Hace contacto físico excesivo","Evita tocar a otros","Se sonroja fácilmente","Tiene un tic en el ojo","Parpadea muy poco","Parpadea demasiado","Habla con tono autoritario",
  "Siempre da consejos","Nunca da su opinión","Le gusta presumir","Minimiza sus logros","Cuenta historias largas","Cuenta historias incompletas","Tiene memoria prodigiosa","Olvida cosas importantes","Colecciona objetos inútiles","Tiene miedo a la oscuridad",
  "Tiene miedo al fuego","Tiene miedo al agua","Desconfía de la magia","Admira a los aventureros","Odia a los aventureros","Habla mal de la nobleza","Defiende a la nobleza","Siempre está negociando","Regala cosas sin motivo","Nunca paga lo justo",
  "Se pone a la defensiva rápidamente","Evita conflictos","Busca pelea","Es extremadamente curioso","No muestra curiosidad alguna","Se aburre fácilmente","Es muy paciente","Pierde la paciencia rápido","Habla con sarcasmo","Habla con total seriedad",
  "Tiene una fe inquebrantable","Cuestiona toda autoridad","Habla con refranes","Habla con metáforas","Habla de forma muy literal","Se toma todo como broma","No entiende el humor","Tiene risa nerviosa","Llora con facilidad","Nunca muestra emociones",
  "Tiene manos temblorosas","Tiene postura rígida","Se mueve con gracia","Se mueve torpemente","Siempre parece sospechoso","Siempre parece confiable","Tiene mirada cansada","Tiene mirada brillante","Se distrae con ruidos","Ignora lo que pasa alrededor",
  "Tiene una cicatriz reciente","Tiene múltiples cicatrices antiguas","Viste de forma descuidada","Viste de forma impecable","Siempre está sudando","Siempre está frío","Habla de su pasado constantemente","Evita hablar de su pasado","Cambia de tema abruptamente","Repite frases",
  "Es muy territorial","Comparte todo","Es extremadamente leal","Traiciona con facilidad","Tiene principios firmes","Cambia de opinión fácilmente","Es muy competitivo","Evita competir","Siempre apuesta","Nunca apuesta",
  "Tiene una risa silenciosa","Habla demasiado fuerte","Habla demasiado bajo","Siempre huele a alcohol","Nunca bebe alcohol","Es nocturno","Se duerme en cualquier lugar","Tiene ojeras marcadas","Siempre está alerta","Siempre parece distraído",
  "Se fija en los detalles","Ignora los detalles","Tiene un sentido del humor negro","Se ofende con humor negro","Es muy pragmático","Es muy idealista","Le cuesta mentir","Miente con facilidad","Es muy directo","Da muchas vueltas al hablar"
];


export const npcMotivations = [
  "Pagar una deuda antigua","Proteger a su familia","Hacerse rico rápidamente","Encontrar una cura para una enfermedad","Vengar a su hermano","Escapar de su pasado","Ganar fama y gloria","Recuperar un objeto perdido","Demostrar su valía","Redimirse por un error cometido",
  "Salvar su reputación","Cumplir una promesa","Proteger su hogar","Ascender socialmente","Servir a su dios","Obedecer a su maestro","Evitar un desastre inminente","Huir de la ley","Impresionar a alguien importante","Mantener un secreto",
  "Encontrar el amor verdadero","Recuperar tierras robadas","Proteger un legado familiar","Romper una maldición","Obtener conocimiento prohibido","Probar su inocencia","Derrocar a un tirano","Defender a los oprimidos","Buscar justicia","Conseguir reconocimiento",
  "Mantener el poder","Aumentar su influencia","Controlar un territorio","Expandir su negocio","Evitar la ruina económica","Asegurar el futuro de sus hijos","Pagar favores pendientes","Saldar una traición","Cumplir una profecía","Evitar que se cumpla una profecía",
  "Recuperar su honor","Restaurar un templo","Reconstruir su comunidad","Salvar a un ser querido","Proteger un secreto peligroso","Huir de una amenaza","Derrotar a un rival","Superar a un enemigo","Impedir una guerra","Provocar una guerra",
  "Recuperar un título perdido","Proteger a un pupilo","Guiar a un elegido","Encontrar respuestas","Descubrir la verdad","Ocultar la verdad","Cambiar su destino","Aceptar su destino","Romper con su linaje","Honrar a sus ancestros",
  "Obtener venganza personal","Proteger una reliquia","Destruir una reliquia","Recuperar un artefacto","Evitar que caiga en malas manos","Completar una colección","Probar una teoría","Experimentar sin límites","Controlar la magia","Erradicar la magia",
  "Huir de la pobreza","Mantener su riqueza","Multiplicar su fortuna","Asegurar un matrimonio","Romper un compromiso","Impresionar a la nobleza","Desprestigiar a un rival","Ganar una apuesta","Cobrar una recompensa","Evitar ser capturado",
  "Encontrar un mentor","Superar a su mentor","Romper una tradición","Preservar una tradición","Fundar algo nuevo","Destruir una institución","Proteger el equilibrio","Romper el equilibrio","Evitar el caos","Provocar el caos",
  "Buscar iluminación espiritual","Imponer su fe","Proteger a los débiles","Explotar a los débiles","Obtener inmortalidad","Temer a la muerte","Aceptar la muerte","Evitar la muerte","Corregir un error pasado","Reescribir la historia",
  "Liberar prisioneros","Capturar a un fugitivo","Proteger una ruta comercial","Sabotear una ruta comercial","Expandir una religión","Erradicar una religión","Vivir una vida tranquila","Escapar del aburrimiento","Buscar emociones fuertes","Evitar riesgos",
  "Proteger un pacto","Romper un pacto","Obedecer órdenes","Desobedecer órdenes","Encontrar un heredero","Eliminar a un heredero","Asegurar una sucesión","Usurpar un trono","Proteger a un gobernante","Asesinar a un gobernante",
  "Probar su teoría al mundo","Convencer a otros","Manipular a otros","Decir siempre la verdad","Vivir de mentiras","Recuperar un recuerdo perdido","Olvidar un recuerdo doloroso","Encontrar su origen","Ocultar su origen","Crear algo duradero",
  "Destruir lo que creó","Evitar repetir errores","Repetir viejos errores","Proteger a un aliado","Traicionar a un aliado","Ganar independencia","Imponer dependencia","Buscar libertad","Impedir la libertad","Dejar huella en el mundo"
];


export const npcHooks = [
  "Vio algo extraño en el bosque anoche","Está buscando ingredientes raros para una poción","Cree que su casa está embrujada","Busca guardaespaldas para un viaje corto","Tiene un mapa del tesoro que no sabe leer",
  "Alguien lo está siguiendo","Ha perdido un objeto muy valioso","Escuchó voces saliendo del pozo","Encontró una criatura herida","Recibió una carta anónima amenazante",
  "Sospecha que su vecino es un impostor","Descubrió una entrada secreta","Fue testigo de un crimen","Tiene sueños proféticos","Alguien robó de su negocio",
  "Está maldito sin saberlo","Conoce un atajo peligroso","Ha sido acusado injustamente","Encontró un cadáver","Escapó de una secta",
  "Necesita escolta para una caravana","Vio luces en el cielo","Tiene información comprometida","Alguien intenta sobornarlo","Escuchó rumores de guerra",
  "Perdió a un familiar","Busca ayuda para una venganza","Debe entregar un paquete misterioso","Está siendo chantajeado","Encontró un artefacto antiguo",
  "Sospecha que será asesinado","Tiene una deuda peligrosa","Escuchó ruidos bajo la ciudad","Alguien suplantó su identidad","Fue mordido por algo desconocido",
  "Sabe dónde hay una criatura peligrosa","Encontró símbolos extraños","Tiene un secreto oscuro","Busca a un niño desaparecido","Vio a alguien que debería estar muerto",
  "Descubrió una conspiración","Tiene una recompensa sobre su cabeza","Fue envenenado lentamente","Alguien quiere comprar su silencio","Posee un libro prohibido",
  "Escuchó un nombre olvidado","Ha perdido la memoria reciente","Es perseguido por la ley","Necesita probar su inocencia","Tiene una marca mágica",
  "Recibió una profecía","Fue expulsado de su gremio","Busca recuperar su honor","Tiene una llave sin cerradura","Sabe cómo abrir un lugar sellado",
  "Ha sido maldecido por una bruja","Encontró un túnel oculto","Descubrió un culto secreto","Tiene información sobre un noble corrupto","Ha sido traicionado",
  "Busca romper una maldición familiar","Sabe de una tumba olvidada","Encontró restos de una criatura","Tiene visiones del futuro","Perdió algo en una ruina",
  "Escuchó cantos en la noche","Encontró huellas imposibles","Sabe de un trato ilegal","Tiene un enemigo poderoso","Necesita ayuda urgente",
  "Alguien robó un objeto sagrado","Descubrió un experimento fallido","Sospecha que lo espían","Encontró una carta cifrada","Tiene una recompensa secreta",
  "Ha sido poseído brevemente","Busca destruir un objeto","Necesita esconder algo","Tiene miedo de dormir","Escucha pasos cuando está solo",
  "Encontró una criatura encadenada","Sabe de un portal oculto","Vio una sombra consciente","Recibió una oferta peligrosa","Tiene un pacto que quiere romper",
  "Busca testigos de un evento","Tiene pruebas de traición","Fue atacado sin razón","Alguien usó su nombre","Perdió un objeto maldito",
  "Sabe dónde hay oro enterrado","Encontró un símbolo prohibido","Tiene una deuda con un demonio","Fue engañado por un espíritu","Busca ayuda para escapar",
  "Conoce un secreto del pasado","Encontró una reliquia rota","Ha sido marcado por una criatura","Escuchó su nombre en susurros","Tiene visiones violentas",
  "Sabe quién controla el crimen","Busca un artefacto robado","Tiene una misión inconclusa","Ha sido expulsado de su hogar","Es el último de su linaje",
  "Encontró un refugio oculto","Tiene un mensaje urgente","Fue testigo de magia prohibida","Sabe cómo entrar a una fortaleza","Tiene una deuda de sangre",
  "Encontró restos de una batalla","Escuchó una profecía falsa","Tiene información peligrosa","Fue confundido con otra persona","Descubrió una traición familiar",
  "Busca romper un juramento","Tiene un contrato extraño","Fue maldecido por error","Conoce una debilidad secreta","Ha sido acusado de herejía",
  "Encontró un animal parlante","Sabe de una trampa mortal","Tiene un reloj que no funciona","Escuchó una risa en la niebla",
  "Tiene un aliado desaparecido","Encontró un mensaje grabado","Fue testigo de un ritual","Tiene un enemigo oculto","Sabe de una rebelión secreta",
  "Encontró una espada sin dueño","Escuchó una voz en sueños","Tiene una marca de nacimiento extraña","Sabe de un lugar prohibido","Busca romper una ilusión",
  "Fue salvado por algo desconocido","Encontró un cuerpo sin heridas","Tiene un amuleto peligroso","Escuchó un nombre verdadero","Busca destruir una prueba",
  "Tiene una llave antigua","Encontró un espejo extraño","Fue maldecido al nacer","Sabe de un trato secreto","Busca a alguien que no existe",
  "Tiene recuerdos que no son suyos","Encontró una puerta invisible","Escuchó un juramento antiguo","Fue testigo de un asesinato mágico"
];


export const localNPCs: NPC[] = [];

// ==========================================
//  LISTAS PARA GENERACIÓN DE BOTÍN (Rellenar aquí)
// ==========================================

// Lista plana para que el usuario pegue sus objetos fácilmente
export const lootList: LootItem[] = [];

export const lootNames = [
  "Espada antigua", "Gema brillante", "Pergamino sellado", "Anillo de oro", 
  "Estatua pequeña", "Daga ceremonial", "Cáliz de plata", "Mapa del tesoro",
  "Poción desconocida", "Amuleto de hueso"
];

export const lootTypes = [
  "Arma", "Joya", "Arte", "Consumible", "Armadura", "Objeto Mágico", "Baratija", "Documento"
];

export const lootRarities = [
  "Común", "Poco Común", "Raro", "Muy Raro", "Legendario"
];

export const lootDescriptions = [
  "Cubierto de polvo y telarañas.", "Tiene una inscripción en un idioma olvidado.", 
  "Brilla tenuemente en la oscuridad.", "Parece vibrar cuando lo tocas.", 
  "Está manchado de sangre seca.", "Huele ligeramente a azufre.", 
  "Hecho con una artesanía exquisita.", "Parece valer más de lo que aparenta."
];

// Aquí puedes definir botín específico por Nivel de Desafío (CR) si prefieres no usar el aleatorio
export const localLoot: Record<number, LootItem[]> = {
  // 1: [{ name: "Espada +1", type: "Arma", rarity: "Poco Común", value: "500po", description: "Brilla." }],
};

// ==========================================
//  TABLAS DE MISIÓN (Ya existentes)
// ==========================================

// TABLA DE GENERACIÓN DE MISIONES d100 (Problema/Misión)
export const questProblemTable = [
  { range: [1, 4], text: "Asesinato injusto (Venganza)" },
  { range: [5, 8], text: "Crimen cometido, criminal desaparecido (Capturar / Caza de recompensas)" },
  { range: [9, 12], text: "Objeto perdido (Recuperación)" },
  { range: [13, 16], text: "Tirano(s) amenazan a la ciudad o negocio (Repeler / Sabotear / Engañar)" },
  { range: [17, 20], text: "Perturbación ambiental o plaga (Investigar / Resolver)" },
  { range: [21, 24], text: "Caos mágico o maldición activa (Investigar / Disipar)" },
  { range: [25, 28], text: "Secuestro o rehenes (Rescatar)" },
  { range: [29, 32], text: "Aventurero perdido en misión (Rescatar)" },
  { range: [33, 36], text: "Artefacto o lugar legendario no confirmado (Explorar)" },
  { range: [37, 40], text: "Riquezas custodiadas (Infiltrar / Saquear)" },
  { range: [41, 44], text: "Invasión inminente (Repeler / Desviar)" },
  { range: [45, 48], text: "Persona sospechosa de conspiración (Espiar)" },
  { range: [49, 52], text: "Carga valiosa requiere escolta (Transportar)" },
  { range: [53, 56], text: "Objeto peligroso en tránsito (Interceptar)" },
  { range: [57, 60], text: "Objeto maldito accesible (Destruir / Sellar)" },
  { range: [61, 64], text: "Noble corrupto (Exponer)" },
  { range: [65, 68], text: "Escasez crítica de recursos (Suministrar)" },
  { range: [69, 72], text: "Misterio antiguo sin resolver (Investigar)" },
  { range: [73, 76], text: "Supervivencia extrema (Escapar)" },
  { range: [77, 80], text: "Criatura inocente amenazada (Proteger)" },
  { range: [81, 84], text: "Ejecución injusta planeada (Prevenir)" },
  { range: [85, 88], text: "Asedio prolongado (Romper)" },
  { range: [89, 92], text: "Conflicto bélico mayor (Mediar / Combatir)" },
  { range: [93, 96], text: "Lugar sagrado olvidado (Explorar)" },
  { range: [97, 100], text: "Error inocente con graves consecuencias (Reparar)" },

  { range: [101, 104], text: "Asesino real aún libre (Cazar)" },
  { range: [105, 108], text: "Red criminal oculta (Desmantelar)" },
  { range: [109, 112], text: "Reliquia robada por culto (Recuperar)" },
  { range: [113, 116], text: "Gobernante manipulado mágicamente (Liberar)" },
  { range: [117, 120], text: "Corrupción natural de origen desconocido (Purificar)" },
  { range: [121, 124], text: "Maldición hereditaria (Romper)" },
  { range: [125, 128], text: "Prisionero importante desaparecido (Encontrar)" },
  { range: [129, 132], text: "Explorador atrapado en plano alterno (Rescatar)" },
  { range: [133, 136], text: "Ciudad perdida redescubierta (Explorar)" },
  { range: [137, 140], text: "Cámara del tesoro sellada (Abrir)" },
  { range: [141, 144], text: "Incursiones enemigas constantes (Eliminar base)" },
  { range: [145, 148], text: "Espía infiltrado en la ciudad (Identificar)" },
  { range: [149, 152], text: "Mensaje crítico debe llegar intacto (Escoltar)" },
  { range: [153, 156], text: "Artefacto prohibido en el mercado negro (Interceptar)" },
  { range: [157, 160], text: "Objeto que corrompe lentamente (Contener)" },
  { range: [161, 164], text: "Casa noble traicionera (Investigar)" },
  { range: [165, 168], text: "Hambruna provocada (Resolver)" },
  { range: [169, 172], text: "Desapariciones inexplicables (Rastrear)" },
  { range: [173, 176], text: "Zona letal imposible de cruzar (Superar)" },
  { range: [177, 180], text: "Bestia protectora fuera de control (Calmar)" },
  { range: [181, 184], text: "Juicio amañado (Intervenir)" },
  { range: [185, 188], text: "Fortaleza inexpugnable (Infiltrar)" },
  { range: [189, 192], text: "Guerra civil latente (Evitar)" },
  { range: [193, 196], text: "Santuario con poder curativo (Reclamar)" },
  { range: [197, 200], text: "Accidente mágico encubierto (Revelar)" },

  { range: [201, 204], text: "Crimen ritual encubierto (Investigar)" },
  { range: [205, 208], text: "Cazador convertido en presa (Rescatar)" },
  { range: [209, 212], text: "Objeto legendario falsificado (Desenmascarar)" },
  { range: [213, 216], text: "Gobierno controlado por secta (Derrocar)" },
  { range: [217, 220], text: "Desequilibrio elemental (Restaurar)" },
  { range: [221, 224], text: "Espíritu vengativo sin descanso (Apaciguar)" },
  { range: [225, 228], text: "Niño con poder peligroso (Proteger)" },
  { range: [229, 232], text: "Aventurero convertido en enemigo (Redimir)" },
  { range: [233, 236], text: "Ruinas que reaparecen (Explorar)" },
  { range: [237, 240], text: "Tesoro maldito custodiado (Purificar)" },
  { range: [241, 244], text: "Invasión desde otro plano (Contener)" },
  { range: [245, 248], text: "Conspiración religiosa (Exponer)" },
  { range: [249, 252], text: "Objeto consciente busca portador (Decidir)" },
  { range: [253, 256], text: "Carga viva extremadamente peligrosa (Transportar)" },
  { range: [257, 260], text: "Fuente de corrupción accesible (Sellar)" },
  { range: [261, 264], text: "Noble desaparecido misteriosamente (Encontrar)" },
  { range: [265, 268], text: "Colapso económico planeado (Impedir)" },
  { range: [269, 272], text: "Verdad histórica manipulada (Revelar)" },
  { range: [273, 276], text: "Prueba mortal impuesta por tradición (Superar)" },
  { range: [277, 280], text: "Criatura sagrada herida (Salvar)" },
  { range: [281, 284], text: "Ejecución ritual programada (Interrumpir)" },
  { range: [285, 288], text: "Asedio sobrenatural (Romper)" },
  { range: [289, 292], text: "Alianza bélica frágil (Sostener)" },
  { range: [293, 296], text: "Lugar bendito corrompido (Purificar)" },
  { range: [297, 300], text: "Error menor desencadena catástrofe (Contener)" }
];


// TABLA DE FUENTES DE MISIONES d100
export const questSourceTable = [
  { range: [1, 3], text: "Tablero de anuncios" },
  { range: [4, 6], text: "PNJ" },
  { range: [7, 9], text: "Rumor de taberna" },
  { range: [10, 13], text: "Te tropiezas con la situación" },
  { range: [14, 16], text: "Afiliado al gremio" },
  { range: [17, 19], text: "Compañero aventurero" },
  { range: [20, 22], text: "Pergamino misterioso con información sobre ello" },
  { range: [23, 25], text: "Trozo de papel oculto dentro de una recompensa básica / compra" },
  { range: [26, 28], text: "Mapa del tesoro" },
  { range: [29, 31], text: "Diario encontrado - Propietario desaparecido" },
  { range: [32, 34], text: "Mapa parcial" },
  { range: [35, 37], text: "Herencia (lugar, objeto o título)" },
  { range: [38, 40], text: "Geas o Hechizo de misión" },
  { range: [41, 43], text: "Visiones impías" },
  { range: [44, 46], text: "Mapa o carta perdida encontrada" },
  { range: [47, 49], text: "Enviado en misión por amigo o pariente" },
  { range: [50, 52], text: "Un sueño" },
  { range: [53, 55], text: "Templo local te da la misión" },
  { range: [56, 58], text: "Rumor recogido en el puesto de guardia" },
  { range: [59, 61], text: "Gremio de Mercaderes / mercaderes" },
  { range: [62, 64], text: "Familia noble te confía la misión" },
  { range: [65, 67], text: "Evento despierta un recuerdo" },
  { range: [68, 70], text: "Inspiración divina" },
  { range: [71, 73], text: "Conversación escuchada por casualidad" },
  { range: [74, 76], text: "Viajero de paso" },
  { range: [77, 79], text: "Encargado de entregar un paquete. ¡Algo te obliga a mirar dentro!" },
  { range: [80, 83], text: "Heraldo hace una proclamación en la plaza del mercado" },
  { range: [84, 87], text: "Órdenes de un mando superior, gremio o sociedad" },
  { range: [88, 90], text: "Nota en una criatura muerta" },
  { range: [91, 93], text: "¡Despiertas con un mapa tatuado en ti!" },
  { range: [94, 97], text: "Desastre natural revela algo" },
  { range: [98, 100], text: "Un amigo ha muerto por esta situación, ¡venganza!" }
];

// TABLAS DE MAZMORRA
export const dungeonActivityTable = [
  { range: [1, 1], text: "Mortalmente silencioso", rolls: 1 },
  { range: [2, 2], text: "Silencioso", rolls: 2 },
  { range: [3, 3], text: "Bastante silencioso", rolls: 3 },
  { range: [4, 4], text: "Activo", rolls: 4 },
  { range: [5, 5], text: "Ocupado", rolls: 5 },
  { range: [6, 6], text: "Insano", rolls: 6 }
];

export const dungeonTypeTable = [
  "Guarida", "Tumba / Cripta", "Fortaleza abandonada", "Templo o santuario",
  "Cuevas naturales", "Laberinto", "Mina", "Puerta planar",
  "Sede de gremio / culto", "Trampa mortal"
];

// TABLA DE PASAJES d20
export const dungeonPassageTable = [
  { range: [1, 1], text: "El pasaje continúa 1d4 x 10 pies." },
  { range: [2, 2], text: "El pasaje avanza 15 pies y termina en una puerta." },
  { range: [3, 3], text: "El pasaje avanza 30 pies y termina en escaleras." },
  { range: [4, 4], text: "El pasaje gira 90 grados a la izquierda." },
  { range: [5, 5], text: "El pasaje gira 90 grados a la derecha." },
  { range: [6, 6], text: "Callejón sin salida. 40% Puerta secreta (CD 1d10+7)." },
  { range: [7, 7], text: "El pasaje continúa 1d4 x 10 pies y llega a una intersección de cuatro vías." },
  { range: [8, 8], text: "El pasaje continúa 1d4 x 10 pies y llega a una intersección en T." },
  { range: [9, 9], text: "El pasaje continúa 1d6 x 10 pies; pasaje lateral a la izquierda." },
  { range: [10, 10], text: "El pasaje continúa 1d6 x 10 pies; pasaje lateral a la derecha." },
  { range: [11, 11], text: "El pasaje termina en una entrada abierta a una habitación." },
  { range: [12, 12], text: "Puerta en la pared derecha." },
  { range: [13, 13], text: "Puerta en la pared izquierda." },
  { range: [14, 14], text: "Puerta secreta en la pared del pasaje (CD 15)." },
  { range: [15, 15], text: "El pasaje se estrecha (1d6 ÷ 2) x 10 pies." },
  { range: [16, 16], text: "El pasaje se ensancha (1d6 ÷ 2) x 10 pies." },
  { range: [17, 17], text: "Apertura a la izquierda, escaleras." },
  { range: [18, 18], text: "Apertura a la derecha, escaleras." },
  { range: [19, 19], text: "Apertura en el suelo, caída de 1d10 x 10 pies a un (1-2: Pasaje, 3-4: Habitación)." },
  { range: [20, 20], text: "Tira en la tabla de Arquitectura Aleatoria." }
];

// TABLA DE CONTENIDOS DE PASAJES d100
export const dungeonPassageContentTable = [
  { range: [1, 69], text: "Vacío" },
  { range: [70, 80], text: "Vacío con escombros (Pista 10%, CD 10)" },
  { range: [81, 84], text: "Vacío con cadáver (Pista 20%)" },
  { range: [85, 88], text: "Vacío con múltiples cadáveres (Pista 40%)" },
  { range: [89, 90], text: "Enemigos (Encuentro Fácil). Botín 15%, Pista 15%" },
  { range: [91, 92], text: "Enemigos (Encuentro Medio). Botín 25%, Pista 25%" },
  { range: [93, 94], text: "Enemigos (Encuentro Difícil). Botín 50%, Pista 50%" },
  { range: [95, 98], text: "¡Trampa!" },
  { range: [99, 100], text: "Botín (60%). Tabla Desafío 0-4 (+30)." }
];

// TABLA DE PUERTAS d100
export const dungeonDoorTable = [
  { range: [1, 20], text: "Puerta de madera estándar, reforzada con metal, sin cerrar. Lleva a (1: Pasaje, 2: Escaleras, 3-4: Habitación)." },
  { range: [21, 25], text: "Reja de hierro con palanca. 1-2 Cerrada (CD 14), 3-4 Abierta. CD 19 Fuerza para forzar." },
  { range: [26, 30], text: "Marco de puerta vacío. Posible trampa de glifo. Lleva a (1: Pasaje, 2: Escaleras, 3-4: Habitación)." },
  { range: [31, 35], text: "Puerta de madera, cerrada (CD 15 Herramientas / CA 12, 20 pg). Lleva a Habitación." },
  { range: [36, 40], text: "Puerta de hierro, cerrada (CD 14 Herramientas / Golpe). Lleva a (1: Pasaje, 2-4: Habitación)." },
  { range: [41, 45], text: "Puerta de piedra, cerrada y atrapada (Percepción CD 15). Lleva a (1: Pasaje, 2: Escaleras, 3-4: Habitación)." },
  { range: [46, 50], text: "Puerta secreta. Lleva a (1: Pasaje oculto, 2-4: Cámara oculta)." },
  { range: [51, 55], text: "Entrada abierta, 10 pies hasta pasaje adyacente. Arco vacío." },
  { range: [56, 60], text: "Puerta de piedra con rompecabezas (Int CD 14). Lleva a (1: Pasaje, 2-4: Habitación)." },
  { range: [61, 75], text: "Mixta: 1-2 Madera, 3-4 Piedra, 5-6 Hierro. 1-3 Cerrada, 4-6 Abierta. 1 Atrapada, 2-6 Libre." },
  { range: [76, 80], text: "Puerta atrapada (Percepción CD 15). Lleva a (1: Pasaje, 2-4: Habitación)." },
  { range: [81, 85], text: "Puerta cerrada; llave en manos de un monstruo cercano." },
  { range: [86, 90], text: "Puerta de energía elemental (Fuego/Rayo). 3d8 de daño al cruzar." },
  { range: [91, 95], text: "Puerta de piedra pesada (Atletismo CD 16). -1 pg por cada 2 fallos." },
  { range: [96, 100], text: "Puerta destrozada y colgando de sus goznes. Lleva a Habitación." }
];

// TABLA DE HABITACIONES d20
export const dungeonRoomTable = [
  { range: [1, 2], text: "Rectangular, (d4x10) x (d4x10) pies. 1d6 salidas." },
  { range: [3, 4], text: "Cuadrada, (d4+1)x10 pies. 1d4 salidas." },
  { range: [5, 6], text: "Cuadrada, (d6+1)x10 pies. 1d6 salidas." },
  { range: [7, 8], text: "Cuadrada, (d8+1)x10 pies. 1d8 salidas." },
  { range: [9, 10], text: "Rectangular, (d4+1)x10 x (d8+1)x10 pies. 1d6 salidas." },
  { range: [11, 12], text: "Rectangular, (d6+1)x10 x (d6+2)x10 pies. 1d6 salidas." },
  { range: [13, 14], text: "Circular, d4x10 pies de diámetro. d4 salidas." },
  { range: [15, 15], text: "Triangular, d6x10 pies por un lado. d4 salidas." },
  { range: [16, 16], text: "Pentagonal, d4x10 pies de ancho. 1-2 salidas." },
  { range: [17, 17], text: "Hexagonal, d6x10 pies de ancho. 1-3 salidas." },
  { range: [18, 18], text: "Octagonal, d6x10 pies de ancho. 1-3 salidas." },
  { range: [19, 19], text: "Trapecial, d6x10 pies aproximadamente por lado." },
  { range: [20, 20], text: "Cueva irregular, d12x10 pies de ancho aprox." }
];

// TABLA DE CONTENIDOS DE HABITACIONES d100
export const dungeonRoomContentTable = [
  { range: [1, 4], text: "Encuentro Mortal. Botín 45%, Pista 75%." },
  { range: [5, 8], text: "Restos del Jefe/BBEG. Travesuras recientes." },
  { range: [9, 12], text: "Secuaces del BBEG (Encuentro Fácil)." },
  { range: [13, 20], text: "Peligro: 1 Sumidero, 2 Hongo, 3 Trampa, 4 Colapso, 5 Monstruo Errante, 6 PJ Elige." },
  { range: [21, 32], text: "Encuentro Difícil. Pista, Botín, SD todo 30%." },
  { range: [33, 36], text: "PNJ investigando." },
  { range: [37, 40], text: "Trampa activada con Enemigo Difícil atrapado. Botín 10%." },
  { range: [41, 52], text: "Encuentro Fácil. Botín 20%, SD 10%, Pista 30%." },
  { range: [53, 56], text: "Obstáculo (Escombros, Grieta, Magia Salvaje). CD Atletismo." },
  { range: [57, 67], text: "Encuentro Medio. Botín 30%, SD 20%, Pista 30%." },
  { range: [68, 71], text: "PNJ moribundo. Enemigos al 50% pg. Botín 50%." },
  { range: [72, 74], text: "Dos facciones en batalla (1-2 Fácil, 3-4 Medio). Ventaja Sigilo." },
  { range: [75, 76], text: "Desierta salvo por runas extrañas en el suelo." },
  { range: [77, 80], text: "PNJ fuerte derrotó Encuentro Mortal. 1-2 Hostil, 3-4 Aliado temporal." },
  { range: [81, 84], text: "Vacía (Botín de misión 30%)." },
  { range: [85, 88], text: "Encuentro Fácil. Pista, PNJ, Bendición 30%." },
  { range: [89, 92], text: "Reliquia bendita/maldita (Encuentro Mortal)." },
  { range: [93, 100], text: "¡JEFE / BBEG / PNJ Significativo! Botín 90%." }
];

// TABLA DE PUERTAS SECRETAS d6
export const dungeonSecretDoorTable = [
  { range: [1, 2], text: "Se abre a una Habitación (+40 a la tirada de contenido)." },
  { range: [3, 4], text: "Se abre a un Pasaje (+40 a la tirada de contenido)." },
  { range: [5, 6], text: "Puerta secreta atrapada. Tira en Trampas, luego Pasaje (1-2) o Habitación (3-4). (+50 contenido)." }
];

// TABLA DE TRAMPAS d100
export const dungeonTrapTable = [
  { range: [1, 6], text: "Dardos envenenados", detect: 11, save: 10, dmg: "(CR - 3) d6" },
  { range: [7, 12], text: "Techo colapsante", detect: 11, save: 10, dmg: "(CR - 2) d6" },
  { range: [13, 19], text: "Foso simple", detect: 11, save: 11, dmg: "(CR - 1) d6" },
  { range: [20, 26], text: "Foso oculto", detect: 11, save: 12, dmg: "(CR - 1) d6" },
  { range: [27, 32], text: "Foso con cierre", detect: 11, save: 12, dmg: "CR d6" },
  { range: [33, 38], text: "Foso con pinchos", detect: 12, save: 13, dmg: "CR d6" },
  { range: [39, 44], text: "Esfera rodante", detect: 12, save: 14, dmg: "CR d6" },
  { range: [45, 50], text: "Hoja segadora", detect: 13, save: 14, dmg: "(CR + 1) d6" },
  { range: [51, 56], text: "Trampa de glifo (Fuego/Frío/Rayo)", detect: 14, save: 15, dmg: "(CR + 1) d6" },
  { range: [57, 63], text: "Misiles mágicos", detect: 14, save: 15, dmg: "(CR + 1) d6" },
  { range: [64, 69], text: "Gas venenoso / Ácido", detect: 15, save: 16, dmg: "(CR + 1) d6" },
  { range: [70, 76], text: "Habitación inundable", detect: 15, save: 16, dmg: "(CR + 2) d6" },
  { range: [77, 82], text: "Paredes móviles", detect: 16, save: 17, dmg: "(CR + 2) d6" },
  { range: [83, 88], text: "Lanzas del suelo", detect: 17, save: 18, dmg: "(CR + 2) d6" },
  { range: [89, 93], text: "Reja con pinchos", detect: 17, save: 19, dmg: "(CR * 1.5) d6" },
  { range: [94, 100], text: "Trampilla (Serpientes/Ácido)", detect: 18, save: 20, dmg: "(CR * 2) d6" }
];

// TABLA DE PISTAS d100
export const dungeonClueTable = [
  { range: [1, 1], text: "Una flecha rota de un tipo distintivo." },
  { range: [2, 2], text: "Arma con sangre seca de tipo desconocido." },
  { range: [3, 3], text: "El área tiene un extraño olor." },
  { range: [4, 4], text: "Extraño ruido proveniente del área." },
  { range: [5, 5], text: "Huellas que se alejan de esta zona." },
  { range: [6, 6], text: "1d10 platinos en bolsa bordada con un nombre." },
  { range: [7, 7], text: "Brújula mágica; requiere palabra de mando." },
  { range: [8, 8], text: "Sobre sellado con cera y sigilo desconocido." },
  { range: [9, 9], text: "Manchas de sangre fresca goteando de la pared." },
  { range: [10, 10], text: "Cuerpo cubierto de símbolos de mapa." },
  { range: [11, 11], text: "Cuerpo cubierto de tatuajes rúnicos." },
  { range: [12, 12], text: "Evidencia de cirugía reconstructiva e implantes." },
  { range: [13, 13], text: "Número marcado detrás del cuello del cuerpo." },
  { range: [14, 14], text: "Heridas curadas sugiriendo azotes continuos." },
  { range: [15, 15], text: "Viejo caballo de juguete que creías olvidado." },
  { range: [16, 16], text: "Cuervos graznando sin parar cerca." },
  { range: [17, 17], text: "Colgante con una pieza faltante." },
  { range: [18, 18], text: "Sacos de trigo y maíz ensangrentados." },
  { range: [19, 19], text: "Destello de luz púrpura en el rabillo del ojo." },
  { range: [20, 20], text: "Área cubierta por una fina capa de escarcha." },
  { range: [21, 21], text: "Nota con el nombre del pueblo cercano." },
  { range: [22, 22], text: "Piedras en forma de flecha: 'Ayúdame'." },
  { range: [23, 23], text: "Parte de un mapa." },
  { range: [24, 24], text: "Arma rota con runas." },
  { range: [25, 25], text: "Un símbolo sagrado." },
  { range: [26, 26], text: "Diario de aventurero con entradas cortadas." },
  { range: [27, 27], text: "Cuerda cortada toscamente colgando." },
  { range: [28, 28], text: "Grafiti: '¡Cuidado con el Gran Salón!'" },
  { range: [29, 29], text: "Agujero excavado y pala abandonada." },
  { range: [30, 30], text: "Trampa de osos en un charco de sangre." },
  { range: [31, 31], text: "Huellas hechas con harina." },
  { range: [32, 32], text: "Linterna rota." },
  { range: [33, 33], text: "Ataúd vacío, tapa rota." },
  { range: [34, 34], text: "Pieza de ajedrez de cristal." },
  { range: [35, 35], text: "Hoja rota de espada." },
  { range: [36, 36], text: "Canto distante y lúgubre." },
  { range: [37, 37], text: "Susurros incorpóreos que se detienen al entrar." },
  { range: [38, 38], text: "Montón de piedras cuidadosamente apiladas." },
  { range: [39, 39], text: "Fuerte golpeteo desde arriba o abajo." },
  { range: [40, 40], text: "Ladrillo suelto con pergamino oculto." },
  { range: [41, 41], text: "Agujero hacia cámara adyacente sin salida." },
  { range: [42, 42], text: "Mochila esparcida (sugiere PNJ vivo)." },
  { range: [43, 43], text: "Escombros barridos en montones ordenados." },
  { range: [44, 44], text: "Susurros justo detrás de ti." },
  { range: [45, 45], text: "Mano cercenada cubierta de puntos." },
  { range: [46, 46], text: "Libro de dibujos de humanoides tachados." },
  { range: [47, 47], text: "Cuerpo destrozado por animal salvaje." },
  { range: [48, 48], text: "Escudo roto en dos pedazos (gran fuerza)." },
  { range: [49, 49], text: "Pieza de platino pegada al suelo." },
  { range: [50, 50], text: "Rayo de luz a través de grieta en techo." },
  { range: [51, 51], text: "Rastro de sangre de cuerpo arrastrado." },
  { range: [52, 52], text: "Lista de nombres tachados con el tuyo al final." },
  { range: [53, 53], text: "Mapa detallado con ruinas desconocidas." },
  { range: [54, 54], text: "Viento ártico soplando brevemente." },
  { range: [55, 55], text: "Sonido de metal arrastrado sobre piedra." },
  { range: [56, 56], text: "Tus pisadas se vuelven silenciosas de repente." },
  { range: [57, 57], text: "Bolas de rodar o áspides cubriendo el suelo." },
  { range: [58, 58], text: "Formas geométricas con tiza en el suelo." },
  { range: [59, 59], text: "Alfombra con manchas de líquido oscuro." },
  { range: [60, 60], text: "Mapa de un laberinto en pergamino." },
  { range: [61, 61], text: "Carta de recomendación de noble desconocido." },
  { range: [62, 62], text: "Aventurero muerto con vial o nota." },
  { range: [63, 63], text: "Pasos apresurados adelante." },
  { range: [64, 64], text: "Pequeña bestia que habla al pasar." },
  { range: [65, 65], text: "Cubo de entrañas de criatura desconocida." },
  { range: [66, 66], text: "Muñeco de práctica de tiro." },
  { range: [67, 67], text: "Sonido de cristal rompiéndose resonando." },
  { range: [68, 68], text: "Daga fina con hoja retráctil." },
  { range: [69, 69], text: "Cáscara de huevo gigante." },
  { range: [70, 70], text: "Piedra con extraña escritura en un nicho." },
  { range: [71, 71], text: "Comida asada humeante intacta." },
  { range: [72, 72], text: "Grafiti de goblins." },
  { range: [73, 73], text: "Colección de huesos organizada." },
  { range: [74, 74], text: "Caldero en la esquina." },
  { range: [75, 75], text: "Mano cercenada hecha de piedra." },
  { range: [76, 76], text: "Frasco de piedra con dientes de todo tipo." },
  { range: [77, 77], text: "Diario con entradas que se detienen." },
  { range: [78, 78], text: "Mesa con gotas de cera y una silla." },
  { range: [79, 79], text: "Red vacía en jirones." },
  { range: [80, 80], text: "Tablillas de arcilla con runas indescifrables." },
  { range: [81, 81], text: "Laúd con mástil roto." },
  { range: [82, 82], text: "Cabeza encogida de kobold." },
  { range: [83, 83], text: "Historia de un mundo que no es este." },
  { range: [84, 84], text: "Pozo con cuerda en medio de la mazmorra." },
  { range: [85, 85], text: "Escuchas un clic al pisar una piedra." },
  { range: [86, 86], text: "Traqueteo y silbido desde abajo." },
  { range: [87, 87], text: "Frasco de ojos en vinagre." },
  { range: [88, 88], text: "Círculo de fogata preparado sin encender." },
  { range: [89, 89], text: "Pergamino enmarcado completamente en blanco." },
  { range: [90, 90], text: "Botella vacía de brandy." },
  { range: [91, 91], text: "Dado de 6 caras donde todos son 1." },
  { range: [92, 92], text: "Cráneo de halfling con agujero perfecto." },
  { range: [93, 93], text: "Ollas con líquidos nauseabundos." },
  { range: [94, 94], text: "Soporte con armas oxidadas restaurables." },
  { range: [95, 95], text: "Humedad sugiriendo cuerpo de agua encima." },
  { range: [96, 96], text: "Sonido de risas de niños resonando." },
  { range: [97, 97], text: "Bolsa de plumas de harpía (CD 12)." },
  { range: [98, 98], text: "Receta para una poción particular." },
  { range: [99, 99], text: "Bolsa de componentes para hechizos." },
  { range: [100, 100], text: "¡OBJETO MÁGICO! Relevante a misión." }
];

export const questTwists = [
  "El cliente original es en realidad el villano.",
  "El objeto está maldito y no puede soltarse.",
  "Hay un segundo grupo de aventureros compitiendo.",
  "El lugar está protegido por un guardián inocente.",
  "El tiempo se agota más rápido de lo esperado.",
  "La recompensa prometida ha sido robada.",
  "Un aliado cercano te traicionará al final.",
  "El objetivo no es lo que parece."
];

export const cityNames = [
  "Rocasombra", "Valleplateado", "Puerto Real", "Bastión de Hierro", "Claro de Luna",
  "Paso de la Montaña", "Villahierro", "Torreblanca", "Bosqueoscuro", "Aguasturbias",
  "Cresta del Sol", "Ríofrío", "Colina Roja", "Mar de Oro", "Fuerte Esperanza",
  "Senda del Viento", "Arenas Doradas", "Valle del Eco", "Cima del Trueno", "Pueblo Perdido",
  "Bahía Profunda", "Castillo Eterno", "Tierras Altas", "Refugio del Druida", "Ciudad de Cristal",
  "Brazohierro", "Valle Esmeralda", "Nido de Águilas", "Puente de Piedra", "Fuente Clara",
  "Luz del Norte", "Cala del Pirata", "Páramo Gris", "Faro del Destino", "Bosque de Niebla",
  "Camino Real", "Vilaestrella", "Puerto del Invierno", "Tierras del Poniente", "Boca del Dragón",
  "Roca de Hielo", "Valle de Sangre", "Puerto Gris", "Bastión de Almas", "Claro de Estrellas",
  "Paso del Norte", "Villa del Rey", "Torre de Hielo", "Bosque del Rey", "Aguas Profundas",
  "Cresta Blanca", "Río Rojo", "Colina de Oro", "Mar de Sombras", "Fuerte del Rey",
  "Montaña Sagrada", "Valle del Silencio", "Puerto Tranquilo", "Bastión de la Fe", "Claro del Sol",
  "Paso de las Sombras", "Villa de la Esperanza", "Torre de la Vigía", "Bosque de los Elfos", "Aguas Azules",
  "Cresta de la Ola", "Río Rojo", "Colina de los Huesos", "Mar de Jade", "Fuerte del Trueno",
  "Senda del Destino", "Arenas de Fuego", "Valle de los Gigantes", "Cima Nevada", "Pueblo de los Pescadores",
  "Bahía de las Tormentas", "Castillo de la Roca", "Tierras Olvidadas", "Refugio de la Noche", "Ciudadela de Hierro",
  "Brazo de Mar", "Valle de las Flores", "Nido de Dragones", "Puente del Arcoíris", "Fuente de la Juventud",
  "Luz del Sur", "Cala de la Sirena", "Páramo de los Muertos", "Faro de la Esperanza", "Bosque Encantado",
  "Camino de la Plata", "Vila del Viento", "Puerto de la Victoria", "Tierras de la Magia", "Boca de la Cueva"
];

export const notablePlaces = [
  "La Taberna del Orco Tuerto", "El Mercado Flotante", "Templo de la Luz Eterna", "La Torre del Mago Loco",
  "Gremio de Alquimistas", "El Pozo de los Deseos", "Arena de Gladiadores", "La Biblioteca Encantada",
  "Forja de los Enanos", "El Sauce Llorón (Posada)", "Mercado Negro bajo el puente", "El Faro de la Niebla",
  "Jardines de Cristal", "La Guarida del Contrabandista", "Prisión de Alta Seguridad", "El Altar de los Héroes",
  "Muelles de carga pesada", "El Cementerio de Estatuas", "Teatro Real", "Cuartel de la Guardia Roja",
  "El Árbol de la Sabiduría", "Pensión del Caminante Cansado", "Laboratorio de Transmutación", "El Callejón de los Gatos",
  "Catedral de Mármol", "La Casa de los Espejos", "Baños Públicos Termales", "Academia de Esgrima",
  "La Mansión Abandonada", "Orfanato de la Esperanza", "Taller de Máquinas de Vapor", "El Estanque de los Lotos",
  "La Cueva de los Ecos", "Círculo de Piedras Druídico", "La Armería Real", "Tienda de Alfombras Voladoras",
  "El Museo de Curiosidades", "La Fuente de los Suspiros", "El Palomar de Mensajería", "Fábrica de Velas Perfumadas",
  "El Puente de los Enamorados", "La Muralla de la Vigilancia", "Granja de Chocobos/Monturas", "El Nido del Cuervo",
  "La Plaza del Pescado", "Gremio de Cartógrafos", "La Madriguera del Conejo (Bar secreto)", "El Reloj de Sol Gigante",
  "Bóveda del Tesoro Municipal", "El Obelisco del Trueno", "La Tienda de Máscaras", "El Refugio del Mendigo",
  "La Herboristería Milagrosa", "Panteón de los Reyes Caídos", "El Puesto de Frutas Exóticas", "La Herrería del Volcán",
  "Observatorio de las Estrellas", "El Salón de Baile de Cristal", "La Capilla de la Piedad", "El Rincón del Juglar",
  "Tienda de Antigüedades de 'Ojo de Cuervo'", "La Bodega del Buen Vino", "Establo de Caballos de Guerra", "La Puerta del Abismo",
  "Mercado de Especias de Oriente", "La Escuela de Magia para Niños", "El Taller de Relojería", "La Guarida de los Espías",
  "El Templo del Dios del Trueno", "La Oficina de Reclamaciones Mágicas", "El Campo de Entrenamiento de Arqueros", "La Galería de Arte de Sombras",
  "El Toldo del Adivino", "La Pastelería de la Abuela Elfa", "La Tintorería de Colores Imposibles", "El Hospital del Buen Socorro",
  "La Sala de los Mapas Antiguos", "El Puente de los Enamorados", "La Gruta de los Deseos", "El Bazar de los Tapices",
  "La Casa del Alcaide", "El Torreón de la Vigilancia", "La Posada del Dragón Verde", "La Fuente de la Juventud (Rumor)",
  "El Jardín de las Delicias", "La Panadería del Trigo Dorado", "El Taller de Joyería de Oropel", "La Biblioteca de Pergaminos Prohibidos",
  "El Almacén de Granos", "La Taberna del Puerto", "El Teatro de Títeres de Sombras", "La Escuela de Bardos",
  "La Arena de Práctica de Caballeros", "El Rincón del Escultor", "La Capilla de la Luz Divina", "El Granero del Pueblo",
  "La Casa de las Palomas", "El Mercado de Animales Exóticos", "La Forja del Acero de Damasco", "El Salón de las Estatuas de Piedra"
];

export const cityAtmospheres = [
  "Ruidosa y llena de vida, con olores a especias y humo.",
  "Silenciosa y melancólica, envuelta en una niebla constante.",
  "Festiva y colorida, celebrando una victoria antigua.",
  "Tensa y vigilada, con guardias en cada esquina.",
  "Mágica y brillante, donde las luces flotan solas.",
  "Pobre y decadente, pero con un espíritu inquebrantable.",
  "Opulenta y arrogante, con calles pavimentadas en oro.",
  "Misteriosa y sombría, donde todos parecen ocultar algo."
];

export const natureEncounters: NarrativeEncounter[] = [

  "1d4 cadáveres, bestia",
  "1d4 cadáveres, humanoide",
  "Extremidad cercenada",
  "Extremidad cortada",
  "Agujeros cavados en el suelo en varios lugares",
  "Extraño olor en el aire",
  "Encuentras un monumento bizarro y escalofriante, como un tótem hecho de cuerpos muertos",
  "Un cartel rudimentario con una cabeza empalada y la advertencia: ¡Da la vuelta o muere!",
  "Huellas de la criatura que estás buscando actualmente",
  "PNJ que vio al objetivo recientemente",
  "PNJ que tuvo un altercado con el objetivo. Tira 1d4: 1–2 herido tras el combate; 3–4 destrozado y huyó por su vida",
  "Área quemada como por una explosión mágica",
  "Bestia herida",
  "Excrementos de un animal extraño",
  "Campamento abandonado",
  "Pertenencias de aventurero manchadas de sangre",
  "Lazo colgando de un árbol, sin cuerpo",
  "Trampa previamente activada",
  "Huellas de carro alejándose del camino",
  "Marcas de espada en el tronco de un árbol",
  "Marcas apresuradas en el suelo o árboles, posible advertencia",
  "Mensaje grabado en una roca indicando un rumbo",
  "Piedra con runas antiguas",
  "Pequeñas ruinas de un santuario olvidado",
  "Arma rota",
  "Moneda antigua",
  "Capa rasgada de tamaño pequeño",
  "Diario incompleto con entradas abruptamente cortadas",
  "Mapa de un laberinto",
  "Pergaminos con frascos de tinta roja agotada",
  "Peluca de cabello humano",
  "Pipa usada recientemente",
  "Ramas rotas y tierra removida",
  "Cartel arrancado de un pueblo cercano",
  "Anillo de llaves de origen goblin u orco",
  "Caja de joyería vacía",
  "Bolsa de provisiones rasgada",
  "Bota abandonada",
  "Muñeca de niño",
  "Lingote de oro grabado (100 po)",
  "Amuleto de hierro en forma de serpiente",
  "Llave de plata con cordón",
  "Frasco sellado mágicamente",
  "Árbol con la corteza desgastada",
  "Gran mechón de pelo de criatura",
  "Piel de serpiente gigante mudada",
  "Montón de excremento enorme",
  "Área cubierta de huesos de múltiples criaturas",
  "Hoguera humeante con roedor carbonizado",
  "Brújula con el cristal roto",
  "Roca usada como blanco de práctica",
  "Gran cantidad de sangre salpicada",
  "Restos de un vivac",
  "Aullido escalofriante a lo lejos",
  "Advertencia pintada en rojo: ¡Detente!",
  "Odres de vino vacíos",
  "1d10 flechas clavadas en el suelo",
  "Invitación a un evento cercano",
  "Figurilla de ónice de una bestia",
  "Arboleda de hongos pisoteados",
  "Tablas quemadas de carro o barco",
  "Medallón con retrato",
  "Piedra perfectamente esférica",
  "Libro para aprender Subcomún",
  "Ficha de madera con símbolo de facción",
  "Marcas de senderismo",
  "Frasco lleno de savia rara",
  "Virotes de ballesta con plumas negras",
  "Espada del tamaño de un niño",
  "Bolsa pequeña de semillas",
  "Hierba aplastada como si alguien durmiera aquí",
  "Tienda abandonada",
  "Runa formada con piedras",
  "Frasco de dulces medio vacío",
  "Mandíbula de criatura",
  "Hoja rota de espada",
  "Marcas recientes de espada",
  "Bolsa con monedas extranjeras",
  "Buitres volando a lo lejos",
  "Tumba recién cavada y vacía",
  "Pira funeraria reducida a cenizas",
  "Carro volcado con pertenencias",
  "Bestia doméstica sigue al grupo",
  "Arboleda de árboles frutales",
  "Sonido de algo enorme moviéndose",
  "Columna de humo a dos millas",
  "Árbol talado formando un puente improvisado",
  "Hongos puestos a secar",
  "Musgo dispuesto como cama",
  "Enorme telaraña con restos humanoides",
  "Voces incorpóreas en el viento",
  "Vibraciones bajo tierra o agua agitándose",
  "Bandada de aves huye repentinamente",
  "1d4 cadáveres sin cabeza",
  "Grandes huellas de bota en el barro",
  "Cabaña abandonada",
  "Niño humanoide traumatizado y silencioso",
  "Cueva recientemente habitada pero vacía",
  "Puente destruido deliberadamente",
  "Objeto mágico relevante a la misión. Tira 1d4: 1–2 Tabla A; 3–4 Tabla B"
];

export const urbanEncounters: NarrativeEncounter[] = [
  "Multitud de gente observando un espectáculo callejero",
  "Un carruaje negro pasa a toda velocidad",
  "Guardias interrogando a un mercader",
  "Un mendigo susurra una advertencia al pasar",
  "Niños persiguiendo una rata gigante",
  "Olor a alquimia barata y humo",
  "Un noble borracho buscando pelea",
  "Gritos de '¡Ladrón!' a lo lejos",
  "Una figura encapuchada te sigue desde los tejados",
  "Procesión de monjes en silencio",
  "Vendedor de pociones dudosas",
  "Pelea de perros en un callejón",
  "Músico tocando una melodía inquietante",
  "Cartel de 'Se Busca' con una cara familiar",
  "Edificio en llamas a unas calles",
  "Calles extrañamente desiertas",
  "Grupo de aventureros rivales celebrando",
  "Una moneda rueda hasta tus pies",
  "Susurros desde una alcantarilla",
  "Sombra moviéndose contra el viento"
];

export const monsterEncounters: Creature[] = [];

export const bossEncounters: Creature[] = [];
export const dungeonEncounters: Creature[] = [];

export const localEncounters: Record<string, Creature[]> = {
  "jefe final/boss": [],
  "monstruo/criatura mágica": [],
  "animal salvaje/bestia": []
};

// ==========================================
//  LISTAS DE MONSTRUOS POR CR (Rellenar aquí)
// ==========================================
// Aquí puedes pegar tus listas de monstruos organizadas por nivel de desafío.
// Formato de objeto Creature:
// { name: "Nombre", type: "Tipo", stats: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10, hp: 10, ac: 10 }, actions: [{name: "Acción", desc: "Descripción"}], description: "Descripción corta" }

export const monstersByCR: Record<string, Creature[]> = {
  "0": [  {
    name: "Águila",
    type: "Bestia",
    stats: { str: 6, dex: 15, con: 10, int: 2, wis: 14, cha: 7, hp: 3, ac: 13 },
    actions: [{ name: "Garras", desc: "Ataque cuerpo a cuerpo: +4 al ataque, 1d4 daño cortante." }],
    description: "Ave rapaz con vista excepcional, caza desde el aire."
  },
  {
    name: "Araña",
    type: "Bestia",
    stats: { str: 2, dex: 14, con: 8, int: 1, wis: 10, cha: 2, hp: 1, ac: 12 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1 daño perforante." }],
    description: "Pequeño arácnido común, generalmente inofensivo."
  },
  {
    name: "Arbusto consciente",
    type: "Planta",
    stats: { str: 3, dex: 8, con: 11, int: 1, wis: 10, cha: 3, hp: 10, ac: 9 },
    actions: [{ name: "Zarzas", desc: "Ataque cuerpo a cuerpo: 1d4 daño contundente." }],
    description: "Planta animada de forma rudimentaria."
  },
  {
    name: "Babuino",
    type: "Bestia",
    stats: { str: 8, dex: 14, con: 11, int: 4, wis: 12, cha: 6, hp: 3, ac: 12 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d4 daño perforante." }],
    description: "Primate agresivo que vive en grupos."
  },
  {
    name: "Búho",
    type: "Bestia",
    stats: { str: 3, dex: 13, con: 8, int: 2, wis: 12, cha: 7, hp: 1, ac: 11 },
    actions: [{ name: "Garras", desc: "Ataque cuerpo a cuerpo: 1 daño cortante." }],
    description: "Ave nocturna silenciosa con gran percepción."
  },
  {
    name: "Buitre",
    type: "Bestia",
    stats: { str: 7, dex: 10, con: 13, int: 2, wis: 12, cha: 4, hp: 5, ac: 10 },
    actions: [{ name: "Pico", desc: "Ataque cuerpo a cuerpo: 1d4 daño perforante." }],
    description: "Carroñero que se alimenta de restos."
  },
  {
    name: "Caballito de mar",
    type: "Bestia",
    stats: { str: 1, dex: 12, con: 8, int: 1, wis: 10, cha: 2, hp: 1, ac: 11 },
    actions: [],
    description: "Pequeño pez marino inofensivo."
  },
  {
    name: "Cabra",
    type: "Bestia",
    stats: { str: 12, dex: 10, con: 11, int: 2, wis: 10, cha: 5, hp: 4, ac: 10 },
    actions: [{ name: "Cornada", desc: "Ataque cuerpo a cuerpo: 1d4 daño contundente." }],
    description: "Animal doméstico ágil en terrenos montañosos."
  },
  {
    name: "Cangrejo",
    type: "Bestia",
    stats: { str: 2, dex: 11, con: 10, int: 1, wis: 8, cha: 2, hp: 2, ac: 11 },
    actions: [{ name: "Pinzas", desc: "Ataque cuerpo a cuerpo: 1 daño contundente." }],
    description: "Crustáceo pequeño con pinzas defensivas."
  },
  {
    name: "Chacal",
    type: "Bestia",
    stats: { str: 8, dex: 15, con: 11, int: 3, wis: 12, cha: 6, hp: 3, ac: 12 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d4 daño perforante." }],
    description: "Canino carroñero que caza en grupo."
  },
  {
    name: "Ciervo",
    type: "Bestia",
    stats: { str: 11, dex: 16, con: 11, int: 2, wis: 14, cha: 5, hp: 4, ac: 13 },
    actions: [{ name: "Pezuñas", desc: "Ataque cuerpo a cuerpo: 1d4 daño contundente." }],
    description: "Animal veloz y alerta de los bosques."
  },
  {
    name: "Comadreja",
    type: "Bestia",
    stats: { str: 3, dex: 16, con: 8, int: 2, wis: 12, cha: 5, hp: 1, ac: 13 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1 daño perforante." }],
    description: "Pequeño depredador rápido y escurridizo."
  },
  {
    name: "Cuervo",
    type: "Bestia",
    stats: { str: 2, dex: 14, con: 8, int: 2, wis: 12, cha: 6, hp: 1, ac: 12 },
    actions: [{ name: "Pico", desc: "Ataque cuerpo a cuerpo: 1 daño perforante." }],
    description: "Ave inteligente y oportunista."
  },
  {
    name: "Escarabajo de fuego gigante",
    type: "Bestia",
    stats: { str: 8, dex: 10, con: 12, int: 1, wis: 7, cha: 3, hp: 4, ac: 13 },
    actions: [{ name: "Mandíbulas", desc: "Ataque cuerpo a cuerpo: 1d6 daño contundente." }],
    description: "Insecto grande que emite luz por glándulas."
  },
  {
    name: "Escorpión",
    type: "Bestia",
    stats: { str: 2, dex: 11, con: 8, int: 1, wis: 8, cha: 2, hp: 1, ac: 11 },
    actions: [{ name: "Aguijón", desc: "Ataque cuerpo a cuerpo: 1 daño perforante." }],
    description: "Arácnido pequeño con aguijón venenoso débil."
  },
  {
    name: "Gato",
    type: "Bestia",
    stats: { str: 3, dex: 15, con: 10, int: 3, wis: 12, cha: 7, hp: 2, ac: 12 },
    actions: [{ name: "Garras", desc: "Ataque cuerpo a cuerpo: 1 daño cortante." }],
    description: "Animal doméstico ágil y curioso."
  },
  {
    name: "Halcón",
    type: "Bestia",
    stats: { str: 5, dex: 16, con: 8, int: 2, wis: 14, cha: 6, hp: 1, ac: 13 },
    actions: [{ name: "Garras", desc: "Ataque cuerpo a cuerpo: 1 daño cortante." }],
    description: "Ave de caza rápida con vista aguda."
  },
  {
    name: "Hiena",
    type: "Bestia",
    stats: { str: 11, dex: 13, con: 12, int: 2, wis: 12, cha: 5, hp: 5, ac: 11 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante." }],
    description: "Carroñera agresiva que caza en manadas."
  },
  {
    name: "Homúnculo",
    type: "Constructo",
    stats: { str: 4, dex: 15, con: 11, int: 10, wis: 10, cha: 7, hp: 5, ac: 13 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d4 daño perforante." }],
    description: "Criatura alquímica creada para servir a un amo."
  },
  {
    name: "Hongo chillón",
    type: "Planta",
    stats: { str: 1, dex: 1, con: 10, int: 1, wis: 3, cha: 1, hp: 13, ac: 5 },
    actions: [{ name: "Chillido", desc: "Emite un grito cuando detecta criaturas cercanas." }],
    description: "Hongo que alerta con un sonido estridente."
  },
  {
    name: "Lagarto",
    type: "Bestia",
    stats: { str: 2, dex: 11, con: 10, int: 1, wis: 8, cha: 3, hp: 2, ac: 10 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1 daño perforante." }],
    description: "Reptil pequeño común en climas cálidos."
  },
  {
    name: "Lémur",
    type: "Bestia",
    stats: { str: 5, dex: 14, con: 10, int: 4, wis: 12, cha: 7, hp: 3, ac: 12 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d4 daño perforante." }],
    description: "Primate ágil y social."
  },
  {
    name: "Murciélago",
    type: "Bestia",
    stats: { str: 2, dex: 15, con: 8, int: 2, wis: 12, cha: 4, hp: 1, ac: 12 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1 daño perforante." }],
    description: "Pequeño mamífero volador con ecolocalización."
  },
  {
    name: "Piraña",
    type: "Bestia",
    stats: { str: 2, dex: 14, con: 10, int: 1, wis: 7, cha: 2, hp: 1, ac: 13 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1 daño perforante." }],
    description: "Pez agresivo con dientes afilados."
  },
  {
    name: "Plebeyo",
    type: "Humanoide",
    stats: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10, hp: 4, ac: 10 },
    actions: [{ name: "Garrote", desc: "Ataque cuerpo a cuerpo: 1d4 daño contundente." }],
    description: "Persona común sin entrenamiento marcial."
  },
  {
    name: "Pulpo",
    type: "Bestia",
    stats: { str: 4, dex: 15, con: 11, int: 3, wis: 10, cha: 4, hp: 3, ac: 12 },
    actions: [{ name: "Tentáculos", desc: "Ataque cuerpo a cuerpo: 1 daño contundente y agarre." }],
    description: "Criatura marina inteligente y flexible."
  },
  {
    name: "Rana",
    type: "Bestia",
    stats: { str: 1, dex: 13, con: 8, int: 1, wis: 8, cha: 3, hp: 1, ac: 11 },
    actions: [],
    description: "Anfibio pequeño que salta grandes distancias."
  },
  {
    name: "Rata",
    type: "Bestia",
    stats: { str: 2, dex: 11, con: 9, int: 2, wis: 10, cha: 4, hp: 1, ac: 10 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1 daño perforante." }],
    description: "Roedor común y escurridizo."
  },
  {
    name: "Tejón",
    type: "Bestia",
    stats: { str: 12, dex: 10, con: 12, int: 2, wis: 12, cha: 5, hp: 5, ac: 10 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante." }],
    description: "Animal territorial y sorprendentemente agresivo."
  }  
  ],

  "1/8": [{
    name: 'Bandido',
    type: 'Humanoide',
    description: 'Forajido armado que vive del saqueo.',
    stats: { str: 11, dex: 12, con: 12, int: 10, wis: 10, cha: 10, hp: 11, ac: 12 },
    actions: [{ name: 'Cimitarra', desc: 'Ataque cuerpo a cuerpo.' }]
  },
  {
    name: 'Camello',
    type: 'Bestia',
    description: 'Animal resistente del desierto.',
    stats: { str: 16, dex: 8, con: 14, int: 2, wis: 8, cha: 5, hp: 15, ac: 9 },
    actions: [{ name: 'Pisotear', desc: 'Ataque contundente.' }]
  },
  {
    name: 'Cangrejo gigante',
    type: 'Bestia',
    description: 'Crustáceo de gran tamaño con fuertes pinzas.',
    stats: { str: 13, dex: 15, con: 11, int: 1, wis: 9, cha: 3, hp: 13, ac: 15 },
    actions: [{ name: 'Pinza', desc: 'Agarra al objetivo.' }]
  },
  {
    name: 'Comadreja gigante',
    type: 'Bestia',
    description: 'Depredador ágil y feroz.',
    stats: { str: 11, dex: 16, con: 10, int: 4, wis: 12, cha: 5, hp: 9, ac: 13 },
    actions: [{ name: 'Mordisco', desc: 'Ataque rápido.' }]
  },
  {
    name: 'Estirge',
    type: 'Bestia',
    description: 'Criatura voladora chupasangre.',
    stats: { str: 4, dex: 16, con: 11, int: 2, wis: 8, cha: 6, hp: 2, ac: 14 },
    actions: [{ name: 'Picadura', desc: 'Drena sangre.' }]
  },
  {
    name: 'Guardia',
    type: 'Humanoide',
    description: 'Vigilante entrenado de una ciudad.',
    stats: { str: 13, dex: 12, con: 12, int: 10, wis: 11, cha: 10, hp: 11, ac: 16 },
    actions: [{ name: 'Lanza', desc: 'Ataque cuerpo a cuerpo o a distancia.' }]
  },
  {
    name: 'Guerrero tribal',
    type: 'Humanoide',
    description: 'Combatiente de una tribu salvaje.',
    stats: { str: 13, dex: 11, con: 12, int: 8, wis: 11, cha: 8, hp: 11, ac: 12 },
    actions: [{ name: 'Lanza', desc: 'Ataque primitivo.' }]
  },
  {
    name: 'Halcón sangriento',
    type: 'Bestia',
    description: 'Ave rapaz entrenada para el combate.',
    stats: { str: 6, dex: 14, con: 10, int: 2, wis: 14, cha: 5, hp: 7, ac: 12 },
    actions: [{ name: 'Picotear', desc: 'Ataque veloz.' }]
  },
  {
    name: 'Kóbold',
    type: 'Humanoide',
    description: 'Reptiliano pequeño y astuto.',
    stats: { str: 7, dex: 15, con: 9, int: 8, wis: 7, cha: 8, hp: 5, ac: 12 },
    actions: [{ name: 'Daga', desc: 'Ataque rápido.' }]
  },
  {
    name: 'Mastín',
    type: 'Bestia',
    description: 'Perro guardián entrenado.',
    stats: { str: 13, dex: 14, con: 12, int: 3, wis: 12, cha: 7, hp: 5, ac: 12 },
    actions: [{ name: 'Mordisco', desc: 'Puede derribar.' }]
  },
  {
    name: 'Mula',
    type: 'Bestia',
    description: 'Animal de carga resistente.',
    stats: { str: 14, dex: 10, con: 13, int: 2, wis: 10, cha: 5, hp: 11, ac: 10 },
    actions: [{ name: 'Cascos', desc: 'Defensa desesperada.' }]
  },
  {
    name: 'Noble',
    type: 'Humanoide',
    description: 'Miembro de la nobleza con mínima formación marcial.',
    stats: { str: 11, dex: 12, con: 11, int: 12, wis: 14, cha: 16, hp: 9, ac: 15 },
    actions: [{ name: 'Estoque', desc: 'Ataque elegante.' }]
  },
  {
    name: 'Poni',
    type: 'Bestia',
    description: 'Pequeño equino doméstico.',
    stats: { str: 15, dex: 10, con: 13, int: 2, wis: 11, cha: 7, hp: 11, ac: 10 },
    actions: [{ name: 'Cascos', desc: 'Ataque defensivo.' }]
  },
  {
    name: 'Rata gigante',
    type: 'Bestia',
    description: 'Roedor de gran tamaño.',
    stats: { str: 7, dex: 15, con: 11, int: 2, wis: 10, cha: 4, hp: 7, ac: 12 },
    actions: [{ name: 'Mordisco', desc: 'Ataque rápido.' }]
  },
  {
    name: 'Rata gigante enferma',
    type: 'Bestia',
    description: 'Portadora de enfermedades.',
    stats: { str: 7, dex: 15, con: 9, int: 2, wis: 10, cha: 4, hp: 5, ac: 12 },
    actions: [{ name: 'Mordisco', desc: 'Puede transmitir enfermedad.' }]
  },
  {
    name: 'Sectario',
    type: 'Humanoide',
    description: 'Fanático al servicio de un culto.',
    stats: { str: 11, dex: 12, con: 10, int: 10, wis: 11, cha: 10, hp: 9, ac: 12 },
    actions: [{ name: 'Cimitarra', desc: 'Ataque fanático.' }]
  },
  {
    name: 'Serpiente venenosa',
    type: 'Bestia',
    description: 'Serpiente pequeña pero letal.',
    stats: { str: 2, dex: 16, con: 11, int: 1, wis: 10, cha: 3, hp: 2, ac: 13 },
    actions: [{ name: 'Mordisco', desc: 'Veneno potente.' }]
  },
  {
    name: 'Serpiente voladora',
    type: 'Bestia',
    description: 'Reptil alado ágil.',
    stats: { str: 4, dex: 18, con: 11, int: 2, wis: 12, cha: 5, hp: 5, ac: 14 },
    actions: [{ name: 'Mordisco', desc: 'Ataque rápido aéreo.' }]
  },
  {
    name: 'Sirénido',
    type: 'Humanoide',
    description: 'Habitante acuático inteligente.',
    stats: { str: 10, dex: 13, con: 12, int: 11, wis: 11, cha: 12, hp: 11, ac: 11 },
    actions: [{ name: 'Tridente', desc: 'Ataque marino.' }]
  }],
  "1/4": [{
    name: "Acólito",
    type: "Humanoide",
    stats: { str: 10, dex: 10, con: 10, int: 10, wis: 14, cha: 11, hp: 9, ac: 10 },
    actions: [{ name: "Garrote", desc: "Ataque cuerpo a cuerpo: 1d4 daño contundente." }],
    description: "Servidor religioso con conocimientos básicos de magia divina."
  },
  {
    name: "Alce",
    type: "Bestia",
    stats: { str: 16, dex: 10, con: 14, int: 2, wis: 10, cha: 6, hp: 13, ac: 10 },
    actions: [{ name: "Cornada", desc: "Ataque cuerpo a cuerpo: 2d4 daño contundente." }],
    description: "Gran herbívoro de los bosques y llanuras."
  },
  {
    name: "Araña lobo gigante",
    type: "Bestia",
    stats: { str: 12, dex: 16, con: 13, int: 3, wis: 12, cha: 4, hp: 11, ac: 13 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante, posible veneno." }],
    description: "Araña grande y veloz que caza sin telarañas."
  },
  {
    name: "Búho gigante",
    type: "Bestia",
    stats: { str: 13, dex: 15, con: 12, int: 8, wis: 13, cha: 10, hp: 19, ac: 12 },
    actions: [{ name: "Garras", desc: "Ataque cuerpo a cuerpo: 2d6 daño cortante." }],
    description: "Ave majestuosa e inteligente, aliada frecuente de criaturas buenas."
  },
  {
    name: "Caballo de monta",
    type: "Bestia",
    stats: { str: 16, dex: 10, con: 12, int: 2, wis: 11, cha: 7, hp: 13, ac: 10 },
    actions: [{ name: "Pezuñas", desc: "Ataque cuerpo a cuerpo: 2d4 daño contundente." }],
    description: "Caballo entrenado para ser montado."
  },
  {
    name: "Caballo de tiro",
    type: "Bestia",
    stats: { str: 18, dex: 10, con: 12, int: 2, wis: 11, cha: 7, hp: 19, ac: 10 },
    actions: [{ name: "Pezuñas", desc: "Ataque cuerpo a cuerpo: 2d4 daño contundente." }],
    description: "Caballo grande y fuerte usado para carga pesada."
  },
  {
    name: "Ciempiés gigante",
    type: "Bestia",
    stats: { str: 5, dex: 14, con: 12, int: 1, wis: 7, cha: 3, hp: 4, ac: 13 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d4 daño perforante y veneno." }],
    description: "Artrópodo venenoso de gran tamaño."
  },
  {
    name: "Drow",
    type: "Humanoide",
    stats: { str: 10, dex: 14, con: 10, int: 11, wis: 11, cha: 12, hp: 13, ac: 15 },
    actions: [{ name: "Espada corta", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante." }],
    description: "Elfo oscuro entrenado en combate y sigilo."
  },
  {
    name: "Duende",
    type: "Humanoide",
    stats: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8, hp: 7, ac: 15 },
    actions: [{ name: "Cimitarra", desc: "Ataque cuerpo a cuerpo: 1d6 daño cortante." }],
    description: "Criatura pequeña y astuta, común en bandas."
  },
  {
    name: "Enjambre de cuervos",
    type: "Enjambre de bestias",
    stats: { str: 6, dex: 14, con: 8, int: 3, wis: 12, cha: 6, hp: 24, ac: 12 },
    actions: [{ name: "Picos", desc: "Ataque cuerpo a cuerpo: 2d6 daño perforante." }],
    description: "Masa de cuervos agresivos que atacan en conjunto."
  },
  {
    name: "Enjambre de murciélagos",
    type: "Enjambre de bestias",
    stats: { str: 5, dex: 15, con: 10, int: 2, wis: 12, cha: 4, hp: 22, ac: 12 },
    actions: [{ name: "Mordiscos", desc: "Ataque cuerpo a cuerpo: 2d6 daño perforante." }],
    description: "Nube chillona de murciélagos hambrientos."
  },
  {
    name: "Enjambre de ratas",
    type: "Enjambre de bestias",
    stats: { str: 9, dex: 11, con: 9, int: 2, wis: 10, cha: 3, hp: 24, ac: 10 },
    actions: [{ name: "Mordiscos", desc: "Ataque cuerpo a cuerpo: 2d6 daño perforante." }],
    description: "Marea de ratas que abruma a sus presas."
  },
  {
    name: "Espada voladora",
    type: "Constructo",
    stats: { str: 12, dex: 15, con: 11, int: 1, wis: 5, cha: 1, hp: 17, ac: 17 },
    actions: [{ name: "Corte", desc: "Ataque cuerpo a cuerpo: 1d8 daño cortante." }],
    description: "Arma animada por magia."
  },
  {
    name: "Esqueleto",
    type: "No-muerto",
    stats: { str: 10, dex: 14, con: 15, int: 6, wis: 8, cha: 5, hp: 13, ac: 13 },
    actions: [{ name: "Espada corta", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante." }],
    description: "Restos animados por energía necromántica."
  },
  {
    name: "Gibado",
    type: "Bestia",
    stats: { str: 15, dex: 12, con: 14, int: 2, wis: 10, cha: 5, hp: 11, ac: 12 },
    actions: [{ name: "Cornada", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante." }],
    description: "Animal montañés agresivo y territorial."
  },
  {
    name: "Goblin",
    type: "Humanoide",
    stats: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8, hp: 7, ac: 15 },
    actions: [{ name: "Cimitarra", desc: "Ataque cuerpo a cuerpo: 1d6 daño cortante." }],
    description: "Humanoide pequeño, astuto y cobarde."
  },
  {
    name: "Grimórlock",
    type: "Humanoide",
    stats: { str: 16, dex: 12, con: 12, int: 9, wis: 8, cha: 6, hp: 11, ac: 11 },
    actions: [{ name: "Garrote", desc: "Ataque cuerpo a cuerpo: 1d8 daño contundente." }],
    description: "Criatura subterránea ciega con sentidos agudos."
  },
  {
    name: "Hachapico",
    type: "Bestia",
    stats: { str: 14, dex: 12, con: 12, int: 2, wis: 10, cha: 5, hp: 19, ac: 13 },
    actions: [{ name: "Pico", desc: "Ataque cuerpo a cuerpo: 1d10 daño perforante." }],
    description: "Ave grande y agresiva."
  },
  {
    name: "Hongo violáceo",
    type: "Planta",
    stats: { str: 12, dex: 1, con: 10, int: 1, wis: 3, cha: 1, hp: 18, ac: 5 },
    actions: [{ name: "Tentáculos", desc: "Ataque cuerpo a cuerpo: 1d8 daño contundente." }],
    description: "Hongo peligroso que ataca con apéndices."
  },
  {
    name: "Jabalí",
    type: "Bestia",
    stats: { str: 13, dex: 11, con: 12, int: 2, wis: 9, cha: 5, hp: 11, ac: 11 },
    actions: [{ name: "Colmillos", desc: "Ataque cuerpo a cuerpo: 1d6 daño cortante." }],
    description: "Animal salvaje y temperamental."
  },
  {
    name: "Lagarto gigante",
    type: "Bestia",
    stats: { str: 15, dex: 12, con: 13, int: 2, wis: 10, cha: 5, hp: 19, ac: 12 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d8 daño perforante." }],
    description: "Reptil grande usado como montura."
  },
  {
    name: "Lobo",
    type: "Bestia",
    stats: { str: 12, dex: 15, con: 12, int: 3, wis: 12, cha: 6, hp: 11, ac: 13 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 2d4 daño perforante." }],
    description: "Depredador que caza en manada."
  },
  {
    name: "Méfit de vapor",
    type: "Elemental",
    stats: { str: 5, dex: 12, con: 10, int: 11, wis: 10, cha: 12, hp: 21, ac: 10 },
    actions: [{ name: "Vapor abrasador", desc: "Explosión menor de vapor caliente." }],
    description: "Elemental travieso de vapor y agua caliente."
  },
  {
    name: "Murciélago gigante",
    type: "Bestia",
    stats: { str: 15, dex: 16, con: 14, int: 2, wis: 12, cha: 6, hp: 22, ac: 13 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante." }],
    description: "Murciélago de gran tamaño usado como montura."
  },
  {
    name: "Pantera",
    type: "Bestia",
    stats: { str: 14, dex: 15, con: 10, int: 3, wis: 14, cha: 7, hp: 13, ac: 12 },
    actions: [{ name: "Garras", desc: "Ataque cuerpo a cuerpo: 1d6 daño cortante." }],
    description: "Felino sigiloso y letal."
  },
  {
    name: "Perro intermitente",
    type: "Feérico",
    stats: { str: 12, dex: 17, con: 12, int: 10, wis: 13, cha: 11, hp: 22, ac: 13 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante." }],
    description: "Can feérico capaz de teletransportarse brevemente."
  },
  {
    name: "Pseudodragón",
    type: "Dragón",
    stats: { str: 6, dex: 15, con: 13, int: 10, wis: 12, cha: 10, hp: 7, ac: 13 },
    actions: [{ name: "Aguijón", desc: "Ataque cuerpo a cuerpo: 1d4 daño perforante y veneno." }],
    description: "Pequeño dragón inteligente y leal."
  },
  {
    name: "Rana gigante",
    type: "Bestia",
    stats: { str: 12, dex: 13, con: 11, int: 2, wis: 10, cha: 3, hp: 18, ac: 11 },
    actions: [{ name: "Lengua", desc: "Ataque cuerpo a cuerpo: 1d6 daño contundente y agarre." }],
    description: "Anfibio grande que captura presas con la lengua."
  },
  {
    name: "Serpiente constrictora",
    type: "Bestia",
    stats: { str: 15, dex: 14, con: 12, int: 1, wis: 10, cha: 3, hp: 13, ac: 12 },
    actions: [{ name: "Constricción", desc: "Ataque cuerpo a cuerpo: 1d8 daño contundente y agarre." }],
    description: "Serpiente grande que aplasta a sus presas."
  },
  {
    name: "Serpiente venenosa gigante",
    type: "Bestia",
    stats: { str: 10, dex: 18, con: 13, int: 2, wis: 10, cha: 3, hp: 11, ac: 14 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d4 daño perforante y veneno." }],
    description: "Serpiente rápida con veneno letal."
  },
  {
    name: "Tejón gigante",
    type: "Bestia",
    stats: { str: 13, dex: 10, con: 12, int: 2, wis: 12, cha: 5, hp: 13, ac: 10 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante." }],
    description: "Versión enorme y agresiva del tejón común."
  },
  {
    name: "Zombi",
    type: "No-muerto",
    stats: { str: 13, dex: 6, con: 16, int: 3, wis: 6, cha: 5, hp: 22, ac: 8 },
    actions: [{ name: "Golpe", desc: "Ataque cuerpo a cuerpo: 1d6 daño contundente." }],
    description: "Cadáver reanimado que avanza implacablemente."
  }],
  "1/2": [ {
    name: "Avispa gigante",
    type: "Bestia",
    stats: { str: 10, dex: 14, con: 10, int: 1, wis: 10, cha: 3, hp: 13, ac: 12 },
    actions: [{ name: "Aguijón", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante y veneno." }],
    description: "Insecto volador agresivo con picadura venenosa."
  },
  {
    name: "Caballito de mar gigante",
    type: "Bestia",
    stats: { str: 12, dex: 14, con: 12, int: 2, wis: 12, cha: 5, hp: 16, ac: 13 },
    actions: [{ name: "Embestida", desc: "Ataque cuerpo a cuerpo: 1d6 daño contundente." }],
    description: "Criatura marina dócil usada como montura acuática."
  },
  {
    name: "Caballo de guerra",
    type: "Bestia",
    stats: { str: 18, dex: 12, con: 13, int: 2, wis: 12, cha: 7, hp: 19, ac: 11 },
    actions: [{ name: "Pezuñas", desc: "Ataque cuerpo a cuerpo: 2d6 daño contundente." }],
    description: "Caballo entrenado para el combate."
  },
  {
    name: "Caballo de guerra esqueleto",
    type: "No-muerto",
    stats: { str: 18, dex: 12, con: 15, int: 2, wis: 8, cha: 5, hp: 22, ac: 13 },
    actions: [{ name: "Pezuñas", desc: "Ataque cuerpo a cuerpo: 2d6 daño contundente." }],
    description: "Montura no-muerta animada por magia oscura."
  },
  {
    name: "Cabra gigante",
    type: "Bestia",
    stats: { str: 17, dex: 11, con: 15, int: 2, wis: 12, cha: 7, hp: 19, ac: 11 },
    actions: [{ name: "Cornada", desc: "Ataque cuerpo a cuerpo: 2d4 daño contundente." }],
    description: "Cabra enorme y agresiva de zonas montañosas."
  },
  {
    name: "Caza-bestias (velador)",
    type: "Humanoide",
    stats: { str: 14, dex: 15, con: 12, int: 11, wis: 12, cha: 10, hp: 27, ac: 13 },
    actions: [{ name: "Espada larga", desc: "Ataque cuerpo a cuerpo: 1d8 daño cortante." }],
    description: "Guerrero entrenado para rastrear y matar monstruos."
  },
  {
    name: "Cieno gris",
    type: "Aberración",
    stats: { str: 12, dex: 6, con: 16, int: 1, wis: 6, cha: 2, hp: 22, ac: 8 },
    actions: [{ name: "Pseudópodo", desc: "Ataque cuerpo a cuerpo: 1d6 daño contundente y corrosión." }],
    description: "Masa amorfa que corroe metal y carne."
  },
  {
    name: "Cocatriz",
    type: "Monstruosidad",
    stats: { str: 11, dex: 12, con: 12, int: 2, wis: 13, cha: 5, hp: 27, ac: 13 },
    actions: [{ name: "Picotazo", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante y petrificación parcial." }],
    description: "Criatura híbrida cuyo picotazo endurece la carne."
  },
  {
    name: "Cocodrilo",
    type: "Bestia",
    stats: { str: 15, dex: 10, con: 13, int: 2, wis: 10, cha: 5, hp: 19, ac: 12 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d10 daño perforante y agarre." }],
    description: "Reptil acuático emboscador."
  },
  {
    name: "Enjambre de insectos",
    type: "Enjambre de bestias",
    stats: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 2, hp: 22, ac: 12 },
    actions: [{ name: "Picaduras", desc: "Ataque cuerpo a cuerpo: 4d4 daño perforante." }],
    description: "Nube de insectos que devora a sus presas."
  },
  {
    name: "Explorador",
    type: "Humanoide",
    stats: { str: 11, dex: 14, con: 12, int: 11, wis: 13, cha: 11, hp: 16, ac: 13 },
    actions: [{ name: "Espada corta", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante." }],
    description: "Aventurero experto en supervivencia."
  },
  {
    name: "Gnoll",
    type: "Humanoide",
    stats: { str: 14, dex: 12, con: 11, int: 6, wis: 10, cha: 7, hp: 22, ac: 15 },
    actions: [{ name: "Lanza", desc: "Ataque cuerpo a cuerpo o a distancia: 1d6 daño perforante." }],
    description: "Humanoide salvaje con instintos depredadores."
  },
  {
    name: "Gnomo de las profundidades (svirfneblin)",
    type: "Humanoide",
    stats: { str: 10, dex: 14, con: 12, int: 12, wis: 10, cha: 9, hp: 16, ac: 15 },
    actions: [{ name: "Pico", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante." }],
    description: "Gnomo del inframundo experto en sigilo."
  },
  {
    name: "Hobgoblin",
    type: "Humanoide",
    stats: { str: 13, dex: 12, con: 12, int: 10, wis: 10, cha: 9, hp: 11, ac: 18 },
    actions: [{ name: "Espada larga", desc: "Ataque cuerpo a cuerpo: 1d8 daño cortante." }],
    description: "Guerrero disciplinado y táctico."
  },
  {
    name: "Hombre lagarto",
    type: "Humanoide",
    stats: { str: 15, dex: 10, con: 13, int: 7, wis: 12, cha: 7, hp: 22, ac: 15 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante." }],
    description: "Reptiliano primitivo y territorial."
  },
  {
    name: "Huargo",
    type: "Monstruosidad",
    stats: { str: 16, dex: 13, con: 13, int: 7, wis: 11, cha: 8, hp: 26, ac: 13 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 2d6 daño perforante." }],
    description: "Lobo maligno de gran tamaño."
  },
  {
    name: "Magmino",
    type: "Elemental",
    stats: { str: 8, dex: 15, con: 12, int: 8, wis: 11, cha: 10, hp: 9, ac: 14 },
    actions: [{ name: "Toque ardiente", desc: "Ataque cuerpo a cuerpo: 1d8 daño de fuego." }],
    description: "Pequeño elemental de magma y fuego."
  },
  {
    name: "Mantoscuro",
    type: "Monstruosidad",
    stats: { str: 14, dex: 13, con: 13, int: 2, wis: 10, cha: 5, hp: 22, ac: 11 },
    actions: [{ name: "Aplastamiento", desc: "Ataque cuerpo a cuerpo: 1d8 daño contundente." }],
    description: "Depredador subterráneo que ataca desde las alturas."
  },
  {
    name: "Matón",
    type: "Humanoide",
    stats: { str: 15, dex: 11, con: 14, int: 10, wis: 10, cha: 11, hp: 32, ac: 11 },
    actions: [{ name: "Maza", desc: "Ataque cuerpo a cuerpo: 2d6 daño contundente." }],
    description: "Bruto violento que confía en su fuerza."
  },
  {
    name: "Méfit de hielo",
    type: "Elemental",
    stats: { str: 7, dex: 13, con: 10, int: 9, wis: 11, cha: 12, hp: 21, ac: 11 },
    actions: [{ name: "Aliento helado", desc: "Cono de frío menor." }],
    description: "Elemental travieso del frío."
  },
  {
    name: "Méfit de magma",
    type: "Elemental",
    stats: { str: 8, dex: 12, con: 12, int: 9, wis: 11, cha: 10, hp: 22, ac: 11 },
    actions: [{ name: "Escupir magma", desc: "Ataque a distancia: daño de fuego." }],
    description: "Elemental ígneo inestable."
  },
  {
    name: "Méfit de polvo",
    type: "Elemental",
    stats: { str: 6, dex: 14, con: 10, int: 9, wis: 11, cha: 10, hp: 17, ac: 12 },
    actions: [{ name: "Nube cegadora", desc: "Área pequeña que ciega temporalmente." }],
    description: "Elemental menor de aire y polvo."
  },
  {
    name: "Monstruo corrosivo",
    type: "Aberración",
    stats: { str: 14, dex: 8, con: 14, int: 2, wis: 8, cha: 5, hp: 22, ac: 8 },
    actions: [{ name: "Pseudópodo", desc: "Ataque cuerpo a cuerpo: 1d8 daño ácido." }],
    description: "Criatura amorfa que disuelve materia."
  },
  {
    name: "Orco",
    type: "Humanoide",
    stats: { str: 16, dex: 12, con: 16, int: 7, wis: 11, cha: 10, hp: 15, ac: 13 },
    actions: [{ name: "Hacha grande", desc: "Ataque cuerpo a cuerpo: 1d12 daño cortante." }],
    description: "Guerrero salvaje y agresivo."
  },
  {
    name: "Oso negro",
    type: "Bestia",
    stats: { str: 15, dex: 10, con: 14, int: 2, wis: 12, cha: 7, hp: 19, ac: 11 },
    actions: [{ name: "Garras", desc: "Ataque cuerpo a cuerpo: 2d4 daño cortante." }],
    description: "Oso omnívoro territorial."
  },
  {
    name: "Sahuagin",
    type: "Humanoide",
    stats: { str: 13, dex: 11, con: 12, int: 12, wis: 13, cha: 9, hp: 22, ac: 12 },
    actions: [{ name: "Tridente", desc: "Ataque cuerpo a cuerpo o a distancia: 1d6 daño perforante." }],
    description: "Depredador marino inteligente."
  },
  {
    name: "Sátiro",
    type: "Feérico",
    stats: { str: 12, dex: 14, con: 12, int: 10, wis: 13, cha: 14, hp: 31, ac: 14 },
    actions: [{ name: "Espada corta", desc: "Ataque cuerpo a cuerpo: 1d6 daño perforante." }],
    description: "Criatura feérica amante de la música y el caos."
  },
  {
    name: "Simio",
    type: "Bestia",
    stats: { str: 16, dex: 14, con: 14, int: 6, wis: 12, cha: 7, hp: 19, ac: 12 },
    actions: [{ name: "Puño", desc: "Ataque cuerpo a cuerpo: 1d6 daño contundente." }],
    description: "Primate fuerte y territorial."
  },
  {
    name: "Sombra",
    type: "No-muerto",
    stats: { str: 6, dex: 14, con: 13, int: 6, wis: 10, cha: 8, hp: 16, ac: 12 },
    actions: [{ name: "Toque drenante", desc: "Ataque cuerpo a cuerpo: 2d6 daño necrótico." }],
    description: "Entidad oscura que drena la fuerza vital."
  },
  {
    name: "Tiburón de arrecife",
    type: "Bestia",
    stats: { str: 14, dex: 13, con: 13, int: 1, wis: 10, cha: 4, hp: 22, ac: 12 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 2d6 daño perforante." }],
    description: "Depredador marino rápido y letal."
  }],
  "1": [{
    name: "Águila gigante",
    type: "Bestia",
    description: "Un águila enorme con una vista letal que ataca desde el aire.",
    stats: { str: 16, dex: 17, con: 13, int: 8, wis: 14, cha: 10, hp: 26, ac: 13 },
    actions: [{ name: "Garras", desc: "Ataque cuerpo a cuerpo +5, daño cortante." }]
  },
  {
    name: "Araña gigante",
    type: "Bestia",
    description: "Depredador venenoso que acecha desde telarañas.",
    stats: { str: 14, dex: 16, con: 12, int: 2, wis: 11, cha: 4, hp: 26, ac: 14 },
    actions: [{ name: "Mordisco venenoso", desc: "Daño perforante + veneno." }]
  },
  {
    name: "Armadura animada",
    type: "Constructo",
    description: "Una armadura vacía que se mueve por magia.",
    stats: { str: 14, dex: 11, con: 13, int: 1, wis: 3, cha: 1, hp: 33, ac: 18 },
    actions: [{ name: "Golpe", desc: "Ataque contundente mágico." }]
  },
  {
    name: "Arpía",
    type: "Monstruosidad",
    description: "Criatura alada con canto hipnótico.",
    stats: { str: 12, dex: 13, con: 12, int: 7, wis: 10, cha: 13, hp: 38, ac: 11 },
    actions: [{ name: "Canto seductor", desc: "Atrae a criaturas cercanas." }]
  },
  {
    name: "Buitre gigante",
    type: "Bestia",
    description: "Carroñero agresivo de gran tamaño.",
    stats: { str: 15, dex: 10, con: 13, int: 6, wis: 12, cha: 7, hp: 22, ac: 10 },
    actions: [{ name: "Picotazo", desc: "Daño perforante." }]
  },
  {
    name: "Cría de dragón de cobre",
    type: "Dragón",
    description: "Dragón joven bromista y ágil.",
    stats: { str: 15, dex: 12, con: 13, int: 14, wis: 11, cha: 13, hp: 22, ac: 16 },
    actions: [{ name: "Aliento ácido", desc: "Daño ácido en área." }]
  },
  {
    name: "Cría de dragón de oropel",
    type: "Dragón",
    description: "Dragón joven benevolente.",
    stats: { str: 14, dex: 10, con: 13, int: 12, wis: 11, cha: 15, hp: 22, ac: 16 },
    actions: [{ name: "Aliento ígneo", desc: "Daño de fuego en cono." }]
  },
  {
    name: "Diablillo",
    type: "Infernal",
    description: "Espía infernal invisible.",
    stats: { str: 6, dex: 17, con: 13, int: 11, wis: 12, cha: 14, hp: 10, ac: 13 },
    actions: [{ name: "Aguijón", desc: "Daño perforante + veneno." }]
  },
  {
    name: "Dríada",
    type: "Feérico",
    description: "Espíritu del bosque vinculado a los árboles.",
    stats: { str: 10, dex: 12, con: 11, int: 14, wis: 15, cha: 18, hp: 22, ac: 11 },
    actions: [{ name: "Encantar", desc: "Hechizo de control mental." }]
  },
  {
    name: "Duérgar",
    type: "Humanoide",
    description: "Enano gris esclavista del Underdark.",
    stats: { str: 14, dex: 11, con: 14, int: 11, wis: 10, cha: 9, hp: 26, ac: 16 },
    actions: [{ name: "Pico de guerra", desc: "Ataque cuerpo a cuerpo." }]
  },
  {
    name: "Enjambre de pirañas",
    type: "Bestia",
    description: "Banco de peces carnívoros.",
    stats: { str: 10, dex: 16, con: 9, int: 1, wis: 7, cha: 2, hp: 28, ac: 13 },
    actions: [{ name: "Mordiscos", desc: "Daño continuo en enjambre." }]
  },
  {
    name: "Espectro",
    type: "No muerto",
    description: "Espíritu vengativo incorpóreo.",
    stats: { str: 1, dex: 14, con: 11, int: 10, wis: 10, cha: 11, hp: 22, ac: 12 },
    actions: [{ name: "Drenar vida", desc: "Daño necrótico." }]
  },
  {
    name: "Espía",
    type: "Humanoide",
    description: "Agente encubierto entrenado.",
    stats: { str: 10, dex: 15, con: 10, int: 12, wis: 14, cha: 16, hp: 27, ac: 12 },
    actions: [{ name: "Daga", desc: "Ataque rápido y preciso." }]
  },
  {
    name: "Hiena gigante",
    type: "Bestia",
    description: "Bestia salvaje de risa perturbadora.",
    stats: { str: 16, dex: 14, con: 14, int: 2, wis: 12, cha: 7, hp: 45, ac: 12 },
    actions: [{ name: "Mordisco", desc: "Puede derribar." }]
  },
  {
    name: "Hipogrifo",
    type: "Monstruosidad",
    description: "Criatura mitad águila mitad león.",
    stats: { str: 17, dex: 13, con: 13, int: 2, wis: 12, cha: 8, hp: 19, ac: 11 },
    actions: [{ name: "Garras y pico", desc: "Ataque múltiple." }]
  },
  {
    name: "León",
    type: "Bestia",
    description: "Depredador alfa de la sabana.",
    stats: { str: 17, dex: 15, con: 13, int: 3, wis: 12, cha: 8, hp: 26, ac: 12 },
    actions: [{ name: "Zarpazo", desc: "Puede derribar al objetivo." }]
  },
  {
    name: "Lobo terrible",
    type: "Bestia",
    description: "Lobo gigantesco y letal.",
    stats: { str: 17, dex: 15, con: 15, int: 3, wis: 12, cha: 7, hp: 37, ac: 14 },
    actions: [{ name: "Mordisco", desc: "Ventaja en grupo." }]
  },
  {
    name: "Necrófago (Gul)",
    type: "No muerto",
    description: "Carroñero humanoide paralizante.",
    stats: { str: 13, dex: 15, con: 10, int: 7, wis: 10, cha: 6, hp: 22, ac: 12 },
    actions: [{ name: "Garras", desc: "Puede paralizar." }]
  },
  {
    name: "Osgo",
    type: "Humanoide",
    description: "Cruce brutal entre orco y ogro.",
    stats: { str: 19, dex: 8, con: 16, int: 5, wis: 7, cha: 7, hp: 30, ac: 11 },
    actions: [{ name: "Garrote", desc: "Daño contundente elevado." }]
  },
  {
    name: "Oso pardo",
    type: "Bestia",
    description: "Bestia territorial extremadamente fuerte.",
    stats: { str: 19, dex: 10, con: 16, int: 2, wis: 13, cha: 7, hp: 34, ac: 11 },
    actions: [{ name: "Garras", desc: "Ataque múltiple." }]
  },
  {
    name: "Perro de la muerte",
    type: "Monstruosidad",
    description: "Can infernal de dos cabezas.",
    stats: { str: 15, dex: 14, con: 14, int: 3, wis: 13, cha: 6, hp: 39, ac: 12 },
    actions: [{ name: "Mordiscos dobles", desc: "Dos ataques." }]
  },
  {
    name: "Pulpo gigante",
    type: "Bestia",
    description: "Depredador marino con tentáculos.",
    stats: { str: 17, dex: 13, con: 13, int: 4, wis: 10, cha: 4, hp: 52, ac: 11 },
    actions: [{ name: "Tentáculos", desc: "Agarra y asfixia." }]
  },
  {
    name: "Quasit",
    type: "Infernal",
    description: "Demonio menor caótico.",
    stats: { str: 5, dex: 14, con: 10, int: 7, wis: 10, cha: 10, hp: 7, ac: 13 },
    actions: [{ name: "Garras", desc: "Daño menor infernal." }]
  },
  {
    name: "Sapo gigante",
    type: "Bestia",
    description: "Anfibio cazador de presas grandes.",
    stats: { str: 15, dex: 13, con: 13, int: 2, wis: 10, cha: 3, hp: 39, ac: 11 },
    actions: [{ name: "Lengüetazo", desc: "Engulle objetivos." }]
  },
  {
    name: "Tigre",
    type: "Bestia",
    description: "Depredador sigiloso y mortal.",
    stats: { str: 17, dex: 15, con: 14, int: 3, wis: 12, cha: 8, hp: 37, ac: 12 },
    actions: [{ name: "Garras", desc: "Salto devastador." }]
  }],
  "2": [  {
    name: "Alce gigante",
    type: "Bestia",
    stats: { str: 19, dex: 10, con: 16, int: 2, wis: 10, cha: 7, hp: 42, ac: 14 },
    actions: [{ name: "Cornada", desc: "Ataque cuerpo a cuerpo: 2d8 daño contundente." }],
    description: "Alce enorme y territorial de regiones frías."
  },
  {
    name: "Alfombra asfixiante",
    type: "Constructo",
    stats: { str: 14, dex: 14, con: 12, int: 1, wis: 3, cha: 1, hp: 33, ac: 12 },
    actions: [{ name: "Asfixiar", desc: "Envuelve a la criatura y la restringe." }],
    description: "Alfombra animada que intenta asfixiar a sus víctimas."
  },
  {
    name: "Ankheg",
    type: "Monstruosidad",
    stats: { str: 17, dex: 11, con: 13, int: 1, wis: 13, cha: 6, hp: 39, ac: 14 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 2d6 daño cortante y ácido." }],
    description: "Insecto excavador con mandíbulas corrosivas."
  },
  {
    name: "Árbol consciente",
    type: "Planta",
    stats: { str: 19, dex: 6, con: 16, int: 10, wis: 12, cha: 7, hp: 59, ac: 13 },
    actions: [{ name: "Golpe", desc: "Ataque cuerpo a cuerpo: 2d8 daño contundente." }],
    description: "Árbol animado que protege los bosques."
  },
  {
    name: "Azer",
    type: "Elemental",
    stats: { str: 17, dex: 12, con: 15, int: 12, wis: 13, cha: 10, hp: 39, ac: 17 },
    actions: [{ name: "Martillo ardiente", desc: "Ataque cuerpo a cuerpo: 1d10 daño contundente y fuego." }],
    description: "Enano ígneo forjado en el Plano Elemental del Fuego."
  },
  {
    name: "Berserker",
    type: "Humanoide",
    stats: { str: 16, dex: 12, con: 17, int: 9, wis: 11, cha: 9, hp: 67, ac: 13 },
    actions: [{ name: "Hacha grande", desc: "Ataque cuerpo a cuerpo: 1d12 daño cortante." }],
    description: "Guerrero salvaje que lucha en un frenesí."
  },
  {
    name: "Bocón barbotante",
    type: "Aberración",
    stats: { str: 10, dex: 8, con: 16, int: 5, wis: 10, cha: 8, hp: 67, ac: 14 },
    actions: [{ name: "Mordiscos", desc: "Múltiples mordiscos: daño perforante y psíquico." }],
    description: "Masa de bocas y ojos que murmura sin cesar."
  },
  {
    name: "Capitán bandido",
    type: "Humanoide",
    stats: { str: 15, dex: 16, con: 14, int: 14, wis: 11, cha: 14, hp: 65, ac: 15 },
    actions: [{ name: "Espada larga", desc: "Ataque cuerpo a cuerpo: 1d8 daño cortante." }],
    description: "Líder carismático de forajidos y saqueadores."
  },
  {
    name: "Centauro",
    type: "Monstruosidad",
    stats: { str: 18, dex: 14, con: 14, int: 9, wis: 13, cha: 11, hp: 45, ac: 12 },
    actions: [{ name: "Pezuñas", desc: "Ataque cuerpo a cuerpo: 2d6 daño contundente." }],
    description: "Guerrero mitad humano mitad caballo."
  },
  {
    name: "Cría de dragón blanco",
    type: "Dragón",
    stats: { str: 18, dex: 10, con: 14, int: 5, wis: 10, cha: 11, hp: 32, ac: 16 },
    actions: [{ name: "Aliento gélido", desc: "Cono de frío: daño de frío." }],
    description: "Dragón joven y salvaje de climas helados."
  },
  {
    name: "Cría de dragón de bronce",
    type: "Dragón",
    stats: { str: 17, dex: 10, con: 15, int: 12, wis: 11, cha: 15, hp: 32, ac: 17 },
    actions: [{ name: "Aliento eléctrico", desc: "Línea de relámpago: daño eléctrico." }],
    description: "Dragón joven noble y protector."
  },
  {
    name: "Cría de dragón de plata",
    type: "Dragón",
    stats: { str: 19, dex: 10, con: 17, int: 12, wis: 11, cha: 15, hp: 45, ac: 18 },
    actions: [{ name: "Aliento helado", desc: "Cono de frío." }],
    description: "Dragón joven benevolente y poderoso."
  },
  {
    name: "Cría de dragón negro",
    type: "Dragón",
    stats: { str: 15, dex: 14, con: 13, int: 10, wis: 11, cha: 13, hp: 33, ac: 17 },
    actions: [{ name: "Aliento ácido", desc: "Línea de ácido corrosivo." }],
    description: "Dragón joven cruel de pantanos."
  },
  {
    name: "Cría de dragón verde",
    type: "Dragón",
    stats: { str: 17, dex: 12, con: 15, int: 14, wis: 11, cha: 15, hp: 38, ac: 17 },
    actions: [{ name: "Aliento venenoso", desc: "Cono de veneno." }],
    description: "Dragón joven manipulador y astuto."
  },
  {
    name: "Cubo gelatinoso",
    type: "Ooze",
    stats: { str: 14, dex: 3, con: 20, int: 1, wis: 6, cha: 1, hp: 84, ac: 6 },
    actions: [{ name: "Engullir", desc: "Engulle criaturas y las digiere con ácido." }],
    description: "Cubo transparente que disuelve todo a su paso."
  },
  {
    name: "Trácnido",
    type: "Monstruosidad",
    stats: { str: 14, dex: 16, con: 13, int: 12, wis: 12, cha: 8, hp: 45, ac: 13 },
    actions: [{ name: "Espadas múltiples", desc: "Múltiples ataques con armas." }],
    description: "Criatura arácnida humanoide experta en combate."
  }],
  "3": [  {
    name: "Araña de fase",
    type: "Monstruosidad",
    stats: { str: 17, dex: 15, con: 16, int: 6, wis: 10, cha: 6, hp: 32, ac: 13 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: daño perforante y veneno. Puede desplazarse entre planos." }],
    description: "Araña capaz de entrar y salir del Plano Etéreo."
  },
  {
    name: "Ballena asesina",
    type: "Bestia",
    stats: { str: 19, dex: 10, con: 13, int: 3, wis: 12, cha: 7, hp: 90, ac: 12 },
    actions: [{ name: "Mordisco", desc: "Ataque cuerpo a cuerpo: 5d6 daño perforante." }],
    description: "Gran depredador marino extremadamente agresivo."
  },
  {
    name: "Basilisco",
    type: "Monstruosidad",
    stats: { str: 16, dex: 8, con: 15, int: 2, wis: 8, cha: 7, hp: 52, ac: 15 },
    actions: [{ name: "Mirada petrificante", desc: "Puede petrificar a criaturas que lo miren." }],
    description: "Reptil monstruoso con una mirada mortal."
  },
  {
    name: "Caballero",
    type: "Humanoide",
    stats: { str: 16, dex: 11, con: 14, int: 11, wis: 11, cha: 15, hp: 52, ac: 18 },
    actions: [{ name: "Espada larga", desc: "Ataque cuerpo a cuerpo: 1d8 daño cortante." }],
    description: "Guerrero entrenado con armadura pesada y disciplina marcial."
  },
  {
    name: "Can del infierno",
    type: "Infernal",
    stats: { str: 17, dex: 12, con: 14, int: 6, wis: 13, cha: 6, hp: 45, ac: 15 },
    actions: [{ name: "Aliento de fuego", desc: "Cono de fuego que inflige daño ígneo." }],
    description: "Sabueso infernal que rastrea almas condenadas."
  },
  {
    name: "Cría de dragón azul",
    type: "Dragón",
    stats: { str: 19, dex: 10, con: 17, int: 12, wis: 11, cha: 15, hp: 52, ac: 18 },
    actions: [{ name: "Aliento eléctrico", desc: "Línea de relámpago que inflige daño eléctrico." }],
    description: "Dragón joven del desierto con aliento de relámpago."
  },
  {
    name: "Cría de dragón de oro",
    type: "Dragón",
    stats: { str: 19, dex: 14, con: 17, int: 14, wis: 13, cha: 16, hp: 60, ac: 18 },
    actions: [{ name: "Aliento de fuego", desc: "Cono de fuego ardiente." }],
    description: "Dragón joven noble y protector del bien."
  },
  {
    name: "Diablo barbado",
    type: "Infernal",
    stats: { str: 16, dex: 15, con: 15, int: 9, wis: 11, cha: 14, hp: 52, ac: 13 },
    actions: [{ name: "Barba infernal", desc: "Ataque que causa daño perforante y veneno." }],
    description: "Diablo menor con barba venenosa y actitud sádica."
  },
  {
    name: "Doppelgánger",
    type: "Monstruosidad",
    stats: { str: 11, dex: 18, con: 14, int: 11, wis: 12, cha: 14, hp: 52, ac: 14 },
    actions: [{ name: "Cambio de forma", desc: "Puede adoptar la apariencia de otros humanoides." }],
    description: "Metamorfo astuto que suplanta identidades."
  },
  {
    name: "Escorpión gigante",
    type: "Bestia",
    stats: { str: 15, dex: 13, con: 15, int: 1, wis: 9, cha: 3, hp: 52, ac: 15 },
    actions: [{ name: "Aguijón", desc: "Ataque cuerpo a cuerpo: daño perforante y veneno." }],
    description: "Escorpión enorme con un aguijón letal."
  },
  {
    name: "Hombre lobo",
    type: "Humanoide",
    stats: { str: 15, dex: 14, con: 14, int: 10, wis: 11, cha: 10, hp: 58, ac: 11 },
    actions: [{ name: "Garras", desc: "Ataque cuerpo a cuerpo: daño cortante." }],
    description: "Humano maldito capaz de transformarse en lobo."
  },
  {
    name: "Lobo de invierno",
    type: "Monstruosidad",
    stats: { str: 18, dex: 13, con: 14, int: 7, wis: 12, cha: 8, hp: 75, ac: 13 },
    actions: [{ name: "Aliento gélido", desc: "Cono de frío que ralentiza a los enemigos." }],
    description: "Lobo gigante imbuido de frío sobrenatural."
  },
  {
    name: "Mantícora",
    type: "Monstruosidad",
    stats: { str: 17, dex: 16, con: 17, int: 7, wis: 12, cha: 8, hp: 68, ac: 14 },
    actions: [{ name: "Púas caudales", desc: "Ataque a distancia con púas afiladas." }],
    description: "Bestia alada con cola llena de púas mortales."
  },
  {
    name: "Minotauro",
    type: "Monstruosidad",
    stats: { str: 18, dex: 11, con: 16, int: 6, wis: 10, cha: 9, hp: 76, ac: 14 },
    actions: [{ name: "Embate", desc: "Ataque cuerpo a cuerpo que puede empujar." }],
    description: "Guerrero brutal con cabeza de toro."
  },
  {
    name: "Momia",
    type: "No-muerto",
    stats: { str: 16, dex: 8, con: 15, int: 6, wis: 10, cha: 12, hp: 58, ac: 11 },
    actions: [{ name: "Golpe putrefacto", desc: "Ataque que causa daño y maldición." }],
    description: "Cadáver momificado animado por magia oscura."
  },
  {
    name: "Oso lechuza",
    type: "Monstruosidad",
    stats: { str: 20, dex: 12, con: 17, int: 3, wis: 12, cha: 7, hp: 59, ac: 13 },
    actions: [{ name: "Garras y pico", desc: "Ataques múltiples cuerpo a cuerpo." }],
    description: "Criatura feroz mitad oso mitad búho."
  },
  {
    name: "Pesadilla",
    type: "Infernal",
    stats: { str: 18, dex: 15, con: 16, int: 10, wis: 13, cha: 15, hp: 68, ac: 13 },
    actions: [{ name: "Pisotear ígneo", desc: "Ataque cuerpo a cuerpo con daño de fuego." }],
    description: "Corcel infernal envuelto en llamas."
  },
  {
    name: "Saga cetrina",
    type: "Feérico",
    stats: { str: 10, dex: 14, con: 12, int: 13, wis: 12, cha: 15, hp: 49, ac: 15 },
    actions: [{ name: "Encantar", desc: "Magia feérica que confunde a los enemigos." }],
    description: "Hada astuta especializada en engaños y hechizos."
  },
  {
    name: "Tumulario",
    type: "No-muerto",
    stats: { str: 16, dex: 8, con: 15, int: 9, wis: 10, cha: 15, hp: 45, ac: 12 },
    actions: [{ name: "Toque vital", desc: "Drena energía vital." }],
    description: "Espíritu oscuro ligado a antiguos túmulos."
  },
  {
    name: "Veterano",
    type: "Humanoide",
    stats: { str: 16, dex: 13, con: 14, int: 10, wis: 11, cha: 10, hp: 58, ac: 17 },
    actions: [{ name: "Multiataque", desc: "Dos ataques con arma cuerpo a cuerpo." }],
    description: "Soldado experimentado curtido en batallas."
  }],
  "4": [{
    name: "Couatl",
    type: "Celestial",
    stats: { str: 16, dex: 20, con: 17, int: 18, wis: 20, cha: 18, hp: 97, ac: 19 },
    actions: [
      { name: "Mordisco", desc: "Ataque cuerpo a cuerpo que inflige daño perforante y veneno." },
      { name: "Constricción", desc: "Agarra y restringe al objetivo." }
    ],
    description: "Serpiente alada celestial, guardián sagrado y mensajero divino."
  },
  {
    name: "Cría de dragón rojo",
    type: "Dragón",
    stats: { str: 19, dex: 10, con: 17, int: 12, wis: 11, cha: 15, hp: 75, ac: 18 },
    actions: [
      { name: "Aliento de fuego", desc: "Cono de fuego que inflige daño ígneo." }
    ],
    description: "Dragón joven feroz y arrogante que escupe llamas devastadoras."
  },
  {
    name: "Elefante",
    type: "Bestia",
    stats: { str: 22, dex: 9, con: 17, int: 3, wis: 11, cha: 6, hp: 76, ac: 12 },
    actions: [
      { name: "Pisotear", desc: "Ataque cuerpo a cuerpo que puede derribar al objetivo." }
    ],
    description: "Bestia colosal de enorme fuerza y resistencia."
  },
  {
    name: "Ettin",
    type: "Gigante",
    stats: { str: 21, dex: 8, con: 17, int: 6, wis: 10, cha: 8, hp: 85, ac: 12 },
    actions: [
      { name: "Multiataque", desc: "Dos ataques con armas cuerpo a cuerpo." }
    ],
    description: "Gigante de dos cabezas con temperamento violento."
  },
  {
    name: "Fantasma",
    type: "No-muerto",
    stats: { str: 7, dex: 13, con: 10, int: 10, wis: 12, cha: 17, hp: 45, ac: 11 },
    actions: [
      { name: "Toque marchitante", desc: "Ataque que drena energía vital." },
      { name: "Aterrorizar", desc: "Las criaturas cercanas pueden quedar asustadas." }
    ],
    description: "Espíritu incorpóreo atado a asuntos sin resolver."
  },
  {
    name: "Hombre jabalí",
    type: "Humanoide",
    stats: { str: 17, dex: 10, con: 15, int: 8, wis: 11, cha: 8, hp: 67, ac: 12 },
    actions: [
      { name: "Colmillos", desc: "Ataque cuerpo a cuerpo que causa daño perforante." }
    ],
    description: "Humanoide maldito capaz de transformarse en jabalí feroz."
  },
  {
    name: "Hombre tigre",
    type: "Humanoide",
    stats: { str: 17, dex: 15, con: 14, int: 10, wis: 13, cha: 11, hp: 67, ac: 12 },
    actions: [
      { name: "Garras", desc: "Ataques rápidos y letales con las garras." }
    ],
    description: "Cambiaformas ágil y mortal con instintos depredadores."
  },
  {
    name: "Khuul",
    type: "Monstruosidad",
    stats: { str: 14, dex: 10, con: 12, int: 10, wis: 11, cha: 9, hp: 45, ac: 13 },
    actions: [
      { name: "Garras paralizantes", desc: "Ataque que puede paralizar brevemente." }
    ],
    description: "Criatura carroñera de tumbas y cementerios."
  },
  {
    name: "Lamia",
    type: "Monstruosidad",
    stats: { str: 16, dex: 13, con: 15, int: 14, wis: 15, cha: 16, hp: 97, ac: 13 },
    actions: [
      { name: "Toque corruptor", desc: "Ataque mágico que debilita a la víctima." }
    ],
    description: "Criatura seductora que domina y engaña a sus presas."
  },
  {
    name: "Pudin negro",
    type: "Cieno",
    stats: { str: 16, dex: 5, con: 16, int: 1, wis: 6, cha: 1, hp: 85, ac: 8 },
    actions: [
      { name: "Pseudópodo", desc: "Ataque corrosivo que daña equipo." }
    ],
    description: "Masa amorfa de ácido que devora todo a su paso."
  },
  {
    name: "Súcubo/íncubo",
    type: "Infernal",
    stats: { str: 8, dex: 17, con: 13, int: 15, wis: 12, cha: 20, hp: 66, ac: 15 },
    actions: [
      { name: "Encantar", desc: "Magia que somete la voluntad del objetivo." },
      { name: "Drenar vida", desc: "Absorbe energía vital mediante contacto." }
    ],
    description: "Demonio seductor que se alimenta de deseos mortales."
  }],
  "5": [  {
    name: "Broza movediza",
    type: "Planta",
    stats: { str: 18, dex: 8, con: 16, int: 5, wis: 10, cha: 5, hp: 110, ac: 13 },
    actions: [{ name: "Engullir", desc: "Agarra y daña a criaturas atrapadas en su masa vegetal." }],
    description: "Vegetación animada que atrapa y asfixia a sus presas."
  },
  {
    name: "Bulete",
    type: "Monstruosidad",
    stats: { str: 19, dex: 11, con: 17, int: 2, wis: 10, cha: 5, hp: 94, ac: 17 },
    actions: [{ name: "Salto devastador", desc: "Impacto desde el subsuelo que inflige gran daño." }],
    description: "Depredador acorazado que acecha bajo tierra."
  },
  {
    name: "Cocodrilo gigante",
    type: "Bestia",
    stats: { str: 21, dex: 9, con: 17, int: 2, wis: 10, cha: 7, hp: 85, ac: 14 },
    actions: [{ name: "Mordisco", desc: "Ataque que agarra y arrastra al objetivo." }],
    description: "Reptil colosal y extremadamente territorial."
  },
  {
    name: "Diablo punzante",
    type: "Infernal",
    stats: { str: 10, dex: 17, con: 12, int: 11, wis: 14, cha: 11, hp: 110, ac: 15 },
    actions: [{ name: "Espinas voladoras", desc: "Ataque a distancia con púas infernales." }],
    description: "Diablo alado que hostiga desde la distancia."
  },
  {
    name: "Elemental de agua",
    type: "Elemental",
    stats: { str: 18, dex: 14, con: 18, int: 5, wis: 10, cha: 8, hp: 114, ac: 14 },
    actions: [{ name: "Aplastamiento acuático", desc: "Golpe que puede derribar y ahogar." }],
    description: "Manifestación viva del poder del agua."
  },
  {
    name: "Elemental de aire",
    type: "Elemental",
    stats: { str: 14, dex: 20, con: 14, int: 6, wis: 10, cha: 6, hp: 90, ac: 15 },
    actions: [{ name: "Torbellino", desc: "Puede levantar y lanzar criaturas." }],
    description: "Ser de viento puro, rápido e impredecible."
  },
  {
    name: "Elemental de fuego",
    type: "Elemental",
    stats: { str: 10, dex: 17, con: 16, int: 6, wis: 10, cha: 7, hp: 102, ac: 13 },
    actions: [{ name: "Toque ígneo", desc: "Ataque que inflige daño de fuego continuo." }],
    description: "Criatura viviente de llamas devoradoras."
  },
  {
    name: "Elemental de tierra",
    type: "Elemental",
    stats: { str: 20, dex: 8, con: 20, int: 5, wis: 10, cha: 5, hp: 126, ac: 17 },
    actions: [{ name: "Golpe pétreo", desc: "Ataque contundente extremadamente poderoso." }],
    description: "Coloso de piedra y tierra animada."
  },
  {
    name: "Engendro vampírico",
    type: "No-muerto",
    stats: { str: 16, dex: 16, con: 14, int: 11, wis: 10, cha: 12, hp: 82, ac: 15 },
    actions: [{ name: "Drenar vida", desc: "Recupera puntos de golpe al dañar." }],
    description: "Servidor no-muerto creado por un vampiro."
  },
  {
    name: "Gigante de las colinas",
    type: "Gigante",
    stats: { str: 21, dex: 8, con: 19, int: 5, wis: 9, cha: 6, hp: 105, ac: 13 },
    actions: [{ name: "Aplastamiento", desc: "Golpe masivo con arma improvisada." }],
    description: "Gigante brutal y poco inteligente."
  },
  {
    name: "Gladiador",
    type: "Humanoide",
    stats: { str: 18, dex: 15, con: 16, int: 10, wis: 12, cha: 15, hp: 112, ac: 16 },
    actions: [{ name: "Multiataque", desc: "Realiza múltiples ataques con arma." }],
    description: "Combatiente experto entrenado para el espectáculo."
  },
  {
    name: "Gólem de carne",
    type: "Constructo",
    stats: { str: 19, dex: 9, con: 18, int: 6, wis: 10, cha: 5, hp: 93, ac: 9 },
    actions: [{ name: "Puños demoledores", desc: "Ataques contundentes devastadores." }],
    description: "Constructo cosido a partir de restos mortales."
  },
  {
    name: "Gorgón",
    type: "Constructo",
    stats: { str: 20, dex: 11, con: 18, int: 2, wis: 12, cha: 7, hp: 114, ac: 19 },
    actions: [{ name: "Aliento petrificante", desc: "Cono que puede convertir en piedra." }],
    description: "Toro metálico animado con aliento petrificador."
  },
  {
    name: "Hombre oso",
    type: "Humanoide",
    stats: { str: 19, dex: 10, con: 17, int: 10, wis: 11, cha: 9, hp: 135, ac: 11 },
    actions: [{ name: "Garras", desc: "Ataques salvajes cuerpo a cuerpo." }],
    description: "Cambiaformas brutal con fuerza sobrehumana."
  },
  {
    name: "Incorpóreo",
    type: "No-muerto",
    stats: { str: 6, dex: 14, con: 16, int: 12, wis: 14, cha: 15, hp: 67, ac: 13 },
    actions: [{ name: "Toque horrendo", desc: "Daño necrótico que debilita." }],
    description: "Espíritu maligno atado al plano material."
  },
  {
    name: "Morfolito",
    type: "Cieno",
    stats: { str: 12, dex: 15, con: 16, int: 5, wis: 10, cha: 5, hp: 93, ac: 13 },
    actions: [{ name: "Imitar", desc: "Adopta la forma de objetos inanimados." }],
    description: "Masa cambiante que embosca a sus víctimas."
  },
  {
    name: "Otyugh",
    type: "Aberración",
    stats: { str: 16, dex: 11, con: 19, int: 6, wis: 13, cha: 6, hp: 114, ac: 14 },
    actions: [{ name: "Tentáculos", desc: "Ataque que puede infectar y agarrar." }],
    description: "Criatura carroñera que habita en basureros."
  },
  {
    name: "Saga nocturna",
    type: "Feérico",
    stats: { str: 18, dex: 15, con: 16, int: 16, wis: 14, cha: 16, hp: 95, ac: 17 },
    actions: [{ name: "Pesadilla", desc: "Magia que induce terror y agotamiento." }],
    description: "Hada oscura que se alimenta del miedo."
  },
  {
    name: "Salamandra",
    type: "Elemental",
    stats: { str: 18, dex: 14, con: 15, int: 11, wis: 10, cha: 12, hp: 90, ac: 15 },
    actions: [{ name: "Lanza ardiente", desc: "Ataque ígneo cuerpo a cuerpo." }],
    description: "Ser de fuego con forma serpentina."
  },
  {
    name: "Semidragón rojo veterano",
    type: "Humanoide",
    stats: { str: 20, dex: 11, con: 18, int: 10, wis: 11, cha: 15, hp: 102, ac: 18 },
    actions: [{ name: "Aliento de fuego", desc: "Cono de fuego devastador." }],
    description: "Guerrero veterano imbuido del poder de un dragón rojo."
  },
  {
    name: "Tiburón gigante",
    type: "Bestia",
    stats: { str: 23, dex: 11, con: 21, int: 1, wis: 10, cha: 5, hp: 126, ac: 13 },
    actions: [{ name: "Mordisco", desc: "Ataque devastador que causa sangrado." }],
    description: "Depredador marino colosal e imparable."
  },
  {
    name: "Triceratops",
    type: "Bestia",
    stats: { str: 22, dex: 9, con: 17, int: 2, wis: 11, cha: 5, hp: 95, ac: 13 },
    actions: [{ name: "Cornada", desc: "Carga que puede derribar." }],
    description: "Dinosaurio enorme con tres cuernos letales."
  },
  {
    name: "Troll",
    type: "Gigante",
    stats: { str: 18, dex: 13, con: 20, int: 7, wis: 9, cha: 7, hp: 84, ac: 15 },
    actions: [{ name: "Regeneración", desc: "Recupera puntos de golpe cada turno." }],
    description: "Monstruo regenerativo de hambre insaciable."
  },
  {
    name: "Unicornio",
    type: "Celestial",
    stats: { str: 18, dex: 14, con: 15, int: 11, wis: 17, cha: 16, hp: 67, ac: 12 },
    actions: [{ name: "Cornada", desc: "Ataque mágico perforante." }],
    description: "Criatura sagrada protectora de bosques."
  },
  {
    name: "Xorn",
    type: "Elemental",
    stats: { str: 17, dex: 10, con: 22, int: 11, wis: 10, cha: 11, hp: 73, ac: 19 },
    actions: [{ name: "Mordisco triple", desc: "Ataca con bocas pétreas." }],
    description: "Ser extraplanar que se alimenta de gemas."
  }],
  "6": [ {
    name: "Acechador invisible",
    type: "Elemental",
    stats: { str: 16, dex: 19, con: 14, int: 10, wis: 14, cha: 11, hp: 104, ac: 14 },
    actions: [
      { name: "Golpe invisible", desc: "Ataque cuerpo a cuerpo con ventaja mientras es invisible." }
    ],
    description: "Asesino elemental invisible creado a partir de aire puro."
  },
  {
    name: "Draco",
    type: "Dragón",
    stats: { str: 19, dex: 12, con: 17, int: 10, wis: 11, cha: 13, hp: 110, ac: 17 },
    actions: [
      { name: "Mordisco y garras", desc: "Multiataque con mordisco y dos garras." }
    ],
    description: "Dragón alado salvaje, menos inteligente que los dragones verdaderos."
  },
  {
    name: "Dragón blanco joven",
    type: "Dragón",
    stats: { str: 18, dex: 10, con: 16, int: 6, wis: 11, cha: 10, hp: 133, ac: 17 },
    actions: [
      { name: "Aliento gélido", desc: "Cono de frío que inflige daño de frío." }
    ],
    description: "Dragón joven brutal y territorial de regiones heladas."
  },
  {
    name: "Dragón de oropel joven",
    type: "Dragón",
    stats: { str: 17, dex: 14, con: 15, int: 12, wis: 11, cha: 15, hp: 127, ac: 18 },
    actions: [
      { name: "Aliento cegador", desc: "Aliento que puede cegar temporalmente." }
    ],
    description: "Dragón joven curioso y parlanchín con aliento luminoso."
  },
  {
    name: "Draña",
    type: "Monstruosidad",
    stats: { str: 19, dex: 16, con: 18, int: 6, wis: 12, cha: 8, hp: 123, ac: 14 },
    actions: [
      { name: "Ataque de mordisco", desc: "Mordisco venenoso extremadamente peligroso." }
    ],
    description: "Araña monstruosa gigantesca de agresividad extrema."
  },
  {
    name: "Mago",
    type: "Humanoide",
    stats: { str: 9, dex: 14, con: 11, int: 17, wis: 12, cha: 11, hp: 40, ac: 12 },
    actions: [
      { name: "Conjuros", desc: "Lanza conjuros arcanos ofensivos y defensivos." }
    ],
    description: "Hechicero entrenado en las artes arcanas."
  },
  {
    name: "Mamut",
    type: "Bestia",
    stats: { str: 24, dex: 9, con: 21, int: 3, wis: 11, cha: 6, hp: 126, ac: 13 },
    actions: [
      { name: "Pisotear", desc: "Ataque masivo que puede derribar a los enemigos." }
    ],
    description: "Bestia colosal cubierta de pelaje, devastadora en combate."
  },
  {
    name: "Medusa",
    type: "Monstruosidad",
    stats: { str: 10, dex: 15, con: 14, int: 12, wis: 13, cha: 15, hp: 127, ac: 15 },
    actions: [
      { name: "Mirada petrificante", desc: "Puede convertir en piedra a quien la mire." }
    ],
    description: "Criatura maldita con serpientes por cabello y mirada letal."
  },
  {
    name: "Quimera",
    type: "Monstruosidad",
    stats: { str: 19, dex: 11, con: 19, int: 3, wis: 14, cha: 10, hp: 114, ac: 14 },
    actions: [
      { name: "Aliento de fuego", desc: "Cono de fuego lanzado por su cabeza de dragón." }
    ],
    description: "Bestia híbrida de león, cabra y dragón."
  },
  {
    name: "Vrock",
    type: "Demonio",
    stats: { str: 17, dex: 15, con: 18, int: 8, wis: 13, cha: 8, hp: 104, ac: 15 },
    actions: [
      { name: "Esporas tóxicas", desc: "Nube de esporas venenosas alrededor del demonio." }
    ],
    description: "Demonio alado caótico y brutal."
  }],
  "7": [ {
    name: "Dragón de cobre joven",
    type: "Dragón",
    stats: { str: 19, dex: 12, con: 17, int: 14, wis: 13, cha: 15, hp: 119, ac: 18 },
    actions: [
      { name: "Aliento ácido", desc: "Línea de ácido que inflige daño ácido." }
    ],
    description: "Dragón joven bromista y astuto con un corrosivo aliento ácido."
  },
  {
    name: "Dragón negro joven",
    type: "Dragón",
    stats: { str: 19, dex: 14, con: 17, int: 12, wis: 13, cha: 15, hp: 127, ac: 18 },
    actions: [
      { name: "Aliento ácido", desc: "Cono de ácido corrosivo." }
    ],
    description: "Dragón joven cruel que habita en pantanos y ruinas."
  },
  {
    name: "Gigante de piedra",
    type: "Gigante",
    stats: { str: 23, dex: 15, con: 20, int: 10, wis: 12, cha: 9, hp: 126, ac: 17 },
    actions: [
      { name: "Aplastar", desc: "Ataque cuerpo a cuerpo devastador." },
      { name: "Lanzar roca", desc: "Ataque a distancia con enorme roca." }
    ],
    description: "Gigante resistente que protege territorios montañosos."
  },
  {
    name: "Guardián escudo",
    type: "Constructo",
    stats: { str: 18, dex: 8, con: 18, int: 7, wis: 10, cha: 3, hp: 142, ac: 17 },
    actions: [
      { name: "Puños defensivos", desc: "Ataques contundentes con energía mágica." },
      { name: "Vincular escudo", desc: "Absorbe daño dirigido a su maestro." }
    ],
    description: "Constructo protector enlazado mágicamente a su creador."
  },
  {
    name: "Oni",
    type: "Gigante",
    stats: { str: 19, dex: 11, con: 16, int: 14, wis: 12, cha: 15, hp: 110, ac: 16 },
    actions: [
      { name: "Cambio de forma", desc: "Puede adoptar forma humanoide." },
      { name: "Hechicería innata", desc: "Lanza conjuros de ilusión y engaño." }
    ],
    description: "Gigante maligno astuto que se infiltra entre humanoides."
  },
  {
    name: "Simio gigante",
    type: "Bestia",
    stats: { str: 23, dex: 14, con: 18, int: 7, wis: 12, cha: 7, hp: 157, ac: 12 },
    actions: [
      { name: "Puños colosales", desc: "Ataques cuerpo a cuerpo de enorme fuerza." },
      { name: "Lanzar roca", desc: "Ataque a distancia con rocas grandes." }
    ],
    description: "Primate colosal de fuerza descomunal."
  }],
  "8": [{
    name: "Asesino",
    type: "Humanoide",
    stats: { str: 11, dex: 16, con: 14, int: 13, wis: 11, cha: 10, hp: 78, ac: 15 },
    actions: [
      { name: "Multiataque", desc: "Realiza dos ataques con arma o a distancia." },
      { name: "Ataque furtivo", desc: "Inflige daño adicional si tiene ventaja." }
    ],
    description: "Asesino profesional entrenado en el sigilo y el veneno."
  },
  {
    name: "Diablo de la cadena",
    type: "Infernal",
    stats: { str: 18, dex: 15, con: 16, int: 11, wis: 12, cha: 14, hp: 85, ac: 16 },
    actions: [
      { name: "Cadenas animadas", desc: "Ataques con cadenas que pueden agarrar." }
    ],
    description: "Diablo cruel que controla cadenas vivientes."
  },
  {
    name: "Dragón de bronce joven",
    type: "Dragón",
    stats: { str: 21, dex: 10, con: 19, int: 14, wis: 13, cha: 17, hp: 142, ac: 18 },
    actions: [
      { name: "Aliento eléctrico", desc: "Línea de relámpago que inflige daño eléctrico." }
    ],
    description: "Dragón joven noble que protege costas y mares."
  },
  {
    name: "Dragón verde joven",
    type: "Dragón",
    stats: { str: 19, dex: 12, con: 17, int: 14, wis: 13, cha: 15, hp: 136, ac: 18 },
    actions: [
      { name: "Aliento venenoso", desc: "Cono de gas venenoso." }
    ],
    description: "Dragón joven manipulador que domina los bosques."
  },
  {
    name: "Gigante de escarcha",
    type: "Gigante",
    stats: { str: 23, dex: 9, con: 21, int: 9, wis: 10, cha: 12, hp: 138, ac: 15 },
    actions: [
      { name: "Hacha gigante", desc: "Ataque cuerpo a cuerpo de daño masivo." },
      { name: "Lanzar roca", desc: "Ataque a distancia contundente." }
    ],
    description: "Gigante gélido que reina en tundras heladas."
  },
  {
    name: "Hezrou",
    type: "Demonio",
    stats: { str: 19, dex: 17, con: 20, int: 5, wis: 12, cha: 13, hp: 136, ac: 16 },
    actions: [
      { name: "Hedor demoníaco", desc: "Aura nauseabunda que debilita a enemigos." }
    ],
    description: "Demonio corpulento envuelto en un hedor repugnante."
  },
  {
    name: "Hidra",
    type: "Monstruosidad",
    stats: { str: 20, dex: 12, con: 20, int: 2, wis: 10, cha: 7, hp: 172, ac: 15 },
    actions: [
      { name: "Múltiples mordiscos", desc: "Ataca con varias cabezas; puede regenerarlas." }
    ],
    description: "Bestia reptiliana cuyas cabezas se multiplican."
  },
  {
    name: "Manto",
    type: "Monstruosidad",
    stats: { str: 17, dex: 15, con: 17, int: 3, wis: 13, cha: 8, hp: 93, ac: 15 },
    actions: [
      { name: "Asfixiar", desc: "Envuelve la cabeza del objetivo, cegándolo." }
    ],
    description: "Depredador aéreo que se camufla como una capa."
  },
  {
    name: "Naga espiritual",
    type: "Monstruosidad",
    stats: { str: 18, dex: 18, con: 16, int: 16, wis: 15, cha: 18, hp: 135, ac: 18 },
    actions: [
      { name: "Hechicería innata", desc: "Lanza conjuros sagrados y ofensivos." }
    ],
    description: "Serpiente mágica guardiana de templos antiguos."
  },
  {
    name: "Tyrannosaurus rex",
    type: "Bestia",
    stats: { str: 25, dex: 10, con: 19, int: 2, wis: 12, cha: 9, hp: 136, ac: 13 },
    actions: [
      { name: "Mordisco devastador", desc: "Ataque que puede agarrar y derribar." }
    ],
    description: "Depredador prehistórico gigantesco y letal."
  }],
  "9": [ {
    name: "Diablo óseo",
    type: "Infernal",
    stats: { str: 18, dex: 16, con: 16, int: 13, wis: 14, cha: 16, hp: 142, ac: 19 },
    actions: [
      { name: "Garras y aguijón", desc: "Multiataque con garras y aguijón venenoso." }
    ],
    description: "Diablo disciplinado que actúa como general del infierno."
  },
  {
    name: "Dragón azul joven",
    type: "Dragón",
    stats: { str: 21, dex: 10, con: 19, int: 14, wis: 13, cha: 17, hp: 152, ac: 18 },
    actions: [
      { name: "Aliento eléctrico", desc: "Línea de relámpago que inflige daño eléctrico." }
    ],
    description: "Dragón joven arrogante que domina desiertos y tormentas."
  },
  {
    name: "Dragón de plata joven",
    type: "Dragón",
    stats: { str: 21, dex: 10, con: 19, int: 14, wis: 13, cha: 17, hp: 168, ac: 18 },
    actions: [
      { name: "Aliento gélido", desc: "Cono de frío que inflige daño de frío." }
    ],
    description: "Dragón joven noble que protege a los inocentes."
  },
  {
    name: "Ent",
    type: "Planta",
    stats: { str: 23, dex: 8, con: 21, int: 12, wis: 16, cha: 12, hp: 138, ac: 16 },
    actions: [
      { name: "Aplastar", desc: "Ataque contundente con brazos de madera." },
      { name: "Animar árboles", desc: "Despierta árboles cercanos para luchar." }
    ],
    description: "Guardián ancestral del bosque con fuerza colosal."
  },
  {
    name: "Gigante de fuego",
    type: "Gigante",
    stats: { str: 25, dex: 9, con: 23, int: 10, wis: 14, cha: 13, hp: 162, ac: 18 },
    actions: [
      { name: "Espada ardiente", desc: "Ataque cuerpo a cuerpo con daño de fuego." },
      { name: "Lanzar roca", desc: "Ataque a distancia con rocas incandescentes." }
    ],
    description: "Gigante herrero que domina fortalezas volcánicas."
  },
  {
    name: "Gigante de las nubes",
    type: "Gigante",
    stats: { str: 27, dex: 10, con: 22, int: 12, wis: 14, cha: 16, hp: 200, ac: 14 },
    actions: [
      { name: "Maza gigante", desc: "Ataque devastador con arma colosal." },
      { name: "Lanzar roca", desc: "Ataque a distancia preciso y potente." }
    ],
    description: "Gigante altivo que gobierna desde castillos flotantes."
  },
  {
    name: "Glabrezu",
    type: "Demonio",
    stats: { str: 20, dex: 15, con: 21, int: 19, wis: 17, cha: 16, hp: 157, ac: 17 },
    actions: [
      { name: "Pinzas demoníacas", desc: "Ataques con pinzas que aplastan enemigos." },
      { name: "Hechicería innata", desc: "Lanza poderosos conjuros demoníacos." }
    ],
    description: "Demonio manipulador que tienta con falsas promesas."
  },
  {
    name: "Gólem de arcilla",
    type: "Constructo",
    stats: { str: 20, dex: 9, con: 18, int: 3, wis: 11, cha: 1, hp: 133, ac: 14 },
    actions: [
      { name: "Golpes malditos", desc: "Ataques que reducen la curación recibida." }
    ],
    description: "Constructo sagrado animado por antiguos rituales."
  }],
  "10": [ {
    name: "Aboleth",
    type: "Aberración",
    stats: { str: 21, dex: 9, con: 15, int: 18, wis: 15, cha: 18, hp: 135, ac: 17 },
    actions: [
      { name: "Tentáculos", desc: "Ataques cuerpo a cuerpo que infligen daño y pueden enfermar." },
      { name: "Esclavizar", desc: "Controla mentalmente a una criatura visible." }
    ],
    description: "Antigua aberración acuática con vasto conocimiento y poder psíquico."
  },
  {
    name: "Deva",
    type: "Celestial",
    stats: { str: 18, dex: 18, con: 18, int: 17, wis: 20, cha: 20, hp: 136, ac: 17 },
    actions: [
      { name: "Maza angelical", desc: "Ataque cuerpo a cuerpo con daño radiante adicional." },
      { name: "Cambiar forma", desc: "Puede adoptar la apariencia de un humanoide." }
    ],
    description: "Mensajero celestial que sirve fielmente a los dioses del bien."
  },
  {
    name: "Dragón de oro joven",
    type: "Dragón",
    stats: { str: 23, dex: 14, con: 21, int: 16, wis: 15, cha: 19, hp: 178, ac: 18 },
    actions: [
      { name: "Aliento de fuego", desc: "Cono de fuego que inflige gran daño ígneo." },
      { name: "Aliento debilitador", desc: "Cono que reduce la fuerza de los enemigos." }
    ],
    description: "Dragón noble y sabio comprometido con la justicia."
  },
  {
    name: "Dragón rojo joven",
    type: "Dragón",
    stats: { str: 23, dex: 10, con: 21, int: 14, wis: 11, cha: 19, hp: 178, ac: 18 },
    actions: [
      { name: "Aliento de fuego", desc: "Cono de fuego devastador." }
    ],
    description: "Dragón joven feroz y territorial que domina regiones volcánicas."
  },
  {
    name: "Gólem de piedra",
    type: "Constructo",
    stats: { str: 22, dex: 9, con: 20, int: 3, wis: 11, cha: 1, hp: 178, ac: 17 },
    actions: [
      { name: "Golpes aplastantes", desc: "Dos ataques contundentes muy potentes." },
      { name: "Aliento ralentizador", desc: "Cono que puede ralentizar a los enemigos." }
    ],
    description: "Constructo implacable creado para proteger lugares sagrados."
  },
  {
    name: "Naga guardiana",
    type: "Monstruosidad",
    stats: { str: 19, dex: 18, con: 16, int: 16, wis: 15, cha: 18, hp: 127, ac: 18 },
    actions: [
      { name: "Mordisco", desc: "Ataque venenoso cuerpo a cuerpo." },
      { name: "Hechicería innata", desc: "Lanza conjuros defensivos y ofensivos." }
    ],
    description: "Serpiente mágica inmortal que protege tesoros y secretos antiguos."
  }],
  "11": [ {
    name: "Behir",
    type: "Monstruosidad",
    stats: { str: 23, dex: 16, con: 18, int: 7, wis: 14, cha: 12, hp: 168, ac: 17 },
    actions: [
      { name: "Mordisco y constricción", desc: "Ataques que dañan y pueden apresar al objetivo." },
      { name: "Aliento eléctrico", desc: "Línea de relámpago que inflige daño eléctrico." }
    ],
    description: "Bestia reptiliana que odia a los dragones y caza en montañas."
  },
  {
    name: "Diablo astado",
    type: "Infernal",
    stats: { str: 22, dex: 17, con: 21, int: 12, wis: 16, cha: 17, hp: 178, ac: 18 },
    actions: [
      { name: "Tridente infernal", desc: "Ataques múltiples con arma infernal." },
      { name: "Cola", desc: "Ataque que puede derribar o empalar enemigos." }
    ],
    description: "General infernal que lidera ejércitos en la Guerra de la Sangre."
  },
  {
    name: "Djinni",
    type: "Elemental",
    stats: { str: 21, dex: 15, con: 20, int: 15, wis: 16, cha: 20, hp: 161, ac: 17 },
    actions: [
      { name: "Cimitarra", desc: "Ataque cuerpo a cuerpo con arma mágica." },
      { name: "Torbellino", desc: "Crea un torbellino que lanza a los enemigos." }
    ],
    description: "Noble elemental del aire con gran poder mágico."
  },
  {
    name: "Ginoesfinge",
    type: "Monstruosidad",
    stats: { str: 18, dex: 15, con: 16, int: 18, wis: 17, cha: 18, hp: 136, ac: 17 },
    actions: [
      { name: "Garras", desc: "Dos ataques cortantes con sus garras." },
      { name: "Hechicería innata", desc: "Lanza poderosos conjuros arcanos." }
    ],
    description: "Esfinge sabia que custodia conocimientos y secretos antiguos."
  },
  {
    name: "Ifriti",
    type: "Elemental",
    stats: { str: 22, dex: 12, con: 24, int: 16, wis: 15, cha: 16, hp: 200, ac: 17 },
    actions: [
      { name: "Espada ígnea", desc: "Ataque cuerpo a cuerpo con daño de fuego adicional." },
      { name: "Llamas abrasadoras", desc: "Explosión de fuego que quema a los enemigos." }
    ],
    description: "Señor elemental del fuego, orgulloso y temperamental."
  },
  {
    name: "Remorhaz",
    type: "Monstruosidad",
    stats: { str: 24, dex: 13, con: 21, int: 4, wis: 10, cha: 5, hp: 195, ac: 17 },
    actions: [
      { name: "Mordisco", desc: "Ataque devastador con daño perforante y de fuego." },
      { name: "Calor abrasador", desc: "Inflige daño de fuego a criaturas que lo tocan." }
    ],
    description: "Depredador ártico gigantesco cuyo cuerpo irradia calor extremo."
  },
  {
    name: "Roc",
    type: "Bestia",
    stats: { str: 28, dex: 10, con: 24, int: 3, wis: 10, cha: 9, hp: 248, ac: 15 },
    actions: [
      { name: "Garras y pico", desc: "Ataques masivos capaces de agarrar presas enormes." }
    ],
    description: "Ave colosal capaz de levantar elefantes y barcos pequeños."
  }],
  "12": [{
    name: "Archimago",
    type: "Humanoide",
    stats: {
      str: 10,
      dex: 14,
      con: 12,
      int: 20,
      wis: 15,
      cha: 16,
      hp: 99,
      ac: 15
    },
    actions: [
      {
        name: "Hechicería arcana",
        desc: "Lanza conjuros de alto nivel ofensivos, defensivos y de control."
      },
      {
        name: "Bastón",
        desc: "Ataque cuerpo a cuerpo simple con un bastón."
      }
    ],
    description: "Uno de los lanzadores de conjuros más poderosos del mundo mortal."
  },
  {
    name: "Erinia",
    type: "Infernal",
    stats: {
      str: 18,
      dex: 16,
      con: 18,
      int: 14,
      wis: 14,
      cha: 18,
      hp: 153,
      ac: 18
    },
    actions: [
      {
        name: "Espada larga infernal",
        desc: "Ataque cuerpo a cuerpo con daño cortante y veneno."
      },
      {
        name: "Lazo infernal",
        desc: "Ataque a distancia que puede inmovilizar a la víctima."
      }
    ],
    description: "Diablesa alada que persigue y castiga a los enemigos del infierno."
  }],
  "13": [ {
    name: "Dragón blanco adulto",
    type: "Dragón",
    stats: { str: 22, dex: 10, con: 22, int: 8, wis: 12, cha: 12, hp: 200, ac: 18 },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento gélido", desc: "Cono de frío que inflige gran daño de frío." }
    ],
    description: "Dragón feroz y territorial que habita regiones heladas."
  },
  {
    name: "Dragón de oropel adulto",
    type: "Dragón",
    stats: { str: 25, dex: 10, con: 23, int: 16, wis: 15, cha: 19, hp: 230, ac: 19 },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento debilitador", desc: "Cono que reduce la fuerza de los enemigos." }
    ],
    description: "Dragón majestuoso y sabio, defensor del bien."
  },
  {
    name: "Gigante de la tormenta",
    type: "Gigante",
    stats: { str: 29, dex: 14, con: 20, int: 16, wis: 18, cha: 18, hp: 230, ac: 16 },
    actions: [
      { name: "Espada de relámpago", desc: "Ataque cuerpo a cuerpo con daño eléctrico adicional." },
      { name: "Lanzar rayo", desc: "Ataque a distancia de energía eléctrica." }
    ],
    description: "Gigante noble que domina mares y tormentas."
  },
  {
    name: "Nálfeshnee",
    type: "Demonio",
    stats: { str: 23, dex: 13, con: 22, int: 19, wis: 17, cha: 20, hp: 184, ac: 18 },
    actions: [
      { name: "Maza demoníaca", desc: "Ataques contundentes imbuidos de energía demoníaca." },
      { name: "Explosión de horror", desc: "Onda de energía que aturde y daña a los enemigos." }
    ],
    description: "Demonio corpulento que disfruta del caos y la destrucción."
  },
  {
    name: "Rakshasa",
    type: "Infernal",
    stats: { str: 14, dex: 17, con: 18, int: 13, wis: 16, cha: 20, hp: 110, ac: 16 },
    actions: [
      { name: "Garras", desc: "Ataques rápidos con daño cortante." },
      { name: "Hechicería innata", desc: "Lanza conjuros de encantamiento e ilusión." }
    ],
    description: "Señor manipulador que camina entre mortales con apariencia humana."
  },
  {
    name: "Vampiro",
    type: "No muerto",
    stats: { str: 18, dex: 18, con: 18, int: 17, wis: 15, cha: 18, hp: 144, ac: 16 },
    actions: [
      { name: "Multiataque", desc: "Dos ataques con garras o mordisco." },
      { name: "Mordisco", desc: "Inflige daño necrótico y recupera puntos de golpe." }
    ],
    description: "Depredador inmortal que se alimenta de la sangre de los vivos."
  }],
  "14": [ {
    name: "Diablo gélido",
    type: "Infernal",
    stats: { str: 21, dex: 14, con: 21, int: 18, wis: 15, cha: 18, hp: 180, ac: 18 },
    actions: [
      { name: "Espada de hielo", desc: "Ataque cuerpo a cuerpo con daño cortante y de frío." },
      { name: "Explosión gélida", desc: "Cono de frío que daña a múltiples enemigos." }
    ],
    description: "Diablo estratega que combina crueldad y frialdad absoluta."
  },
  {
    name: "Dragón de cobre adulto",
    type: "Dragón",
    stats: { str: 23, dex: 12, con: 21, int: 14, wis: 13, cha: 17, hp: 200, ac: 18 },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento ácido", desc: "Línea de ácido corrosivo." },
      { name: "Aliento ralentizador", desc: "Gas que reduce la velocidad de los enemigos." }
    ],
    description: "Dragón ingenioso y bromista con gran inteligencia táctica."
  },
  {
    name: "Dragón negro adulto",
    type: "Dragón",
    stats: { str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17, hp: 195, ac: 19 },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento ácido", desc: "Línea de ácido devastador." }
    ],
    description: "Dragón cruel que acecha pantanos y ruinas en descomposición."
  }],
  "15": [ {
    name: "Dragón de bronce adulto",
    type: "Dragón",
    stats: { str: 25, dex: 10, con: 23, int: 16, wis: 15, cha: 19, hp: 212, ac: 19 },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento eléctrico", desc: "Línea de relámpago que inflige gran daño eléctrico." },
      { name: "Aliento repelente", desc: "Explosión que empuja y derriba a los enemigos." }
    ],
    description: "Dragón honorable que protege costas y rutas marítimas."
  },
  {
    name: "Dragón verde adulto",
    type: "Dragón",
    stats: { str: 23, dex: 12, con: 21, int: 18, wis: 15, cha: 17, hp: 207, ac: 19 },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento venenoso", desc: "Cono de gas venenoso letal." }
    ],
    description: "Dragón manipulador que domina bosques antiguos."
  },
  {
    name: "Gusano púrpura",
    type: "Monstruosidad",
    stats: { str: 28, dex: 7, con: 22, int: 1, wis: 8, cha: 4, hp: 247, ac: 18 },
    actions: [
      { name: "Mordisco", desc: "Ataque masivo que puede tragar al objetivo." },
      { name: "Aguijón", desc: "Ataque venenoso extremadamente letal." }
    ],
    description: "Colosal depredador subterráneo que devora todo a su paso."
  },
  {
    name: "Señor de las momias",
    type: "No muerto",
    stats: { str: 18, dex: 10, con: 17, int: 11, wis: 14, cha: 16, hp: 97, ac: 17 },
    actions: [
      { name: "Toque maldito", desc: "Inflige daño necrótico y maldiciones." },
      { name: "Control de no muertos", desc: "Comanda a otros no muertos cercanos." }
    ],
    description: "Antiguo gobernante no muerto dotado de poderes divinos oscuros."
  }],
  "16": [ {
    name: "Dragón de bronce adulto",
    type: "Dragón",
    stats: { str: 25, dex: 10, con: 23, int: 16, wis: 15, cha: 19, hp: 212, ac: 19 },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento eléctrico", desc: "Línea de relámpago que inflige gran daño eléctrico." },
      { name: "Aliento repelente", desc: "Explosión que empuja y derriba a los enemigos." }
    ],
    description: "Dragón honorable que protege costas y rutas marítimas."
  },
  {
    name: "Dragón verde adulto",
    type: "Dragón",
    stats: { str: 23, dex: 12, con: 21, int: 18, wis: 15, cha: 17, hp: 207, ac: 19 },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento venenoso", desc: "Cono de gas venenoso letal." }
    ],
    description: "Dragón manipulador que domina bosques antiguos."
  },
  {
    name: "Gusano púrpura",
    type: "Monstruosidad",
    stats: { str: 28, dex: 7, con: 22, int: 1, wis: 8, cha: 4, hp: 247, ac: 18 },
    actions: [
      { name: "Mordisco", desc: "Ataque masivo que puede tragar al objetivo." },
      { name: "Aguijón", desc: "Ataque venenoso extremadamente letal." }
    ],
    description: "Colosal depredador subterráneo que devora todo a su paso."
  },
  {
    name: "Señor de las momias",
    type: "No muerto",
    stats: { str: 18, dex: 10, con: 17, int: 11, wis: 14, cha: 16, hp: 97, ac: 17 },
    actions: [
      { name: "Toque maldito", desc: "Inflige daño necrótico y maldiciones." },
      { name: "Control de no muertos", desc: "Comanda a otros no muertos cercanos." }
    ],
    description: "Antiguo gobernante no muerto dotado de poderes divinos oscuros."
  }],
  "17": [  {
    name: "Androesfinge",
    type: "Monstruosidad",
    stats: { str: 22, dex: 15, con: 20, int: 19, wis: 20, cha: 20, hp: 199, ac: 17 },
    actions: [
      { name: "Garras", desc: "Dos ataques cortantes muy potentes." },
      { name: "Rugido divino", desc: "Onda sagrada que aturde a los enemigos." }
    ],
    description: "Esfinge guerrera que protege lugares sagrados y antiguos juramentos."
  },
  {
    name: "Dragón de oro adulto",
    type: "Dragón",
    stats: { str: 27, dex: 14, con: 25, int: 18, wis: 17, cha: 21, hp: 256, ac: 19 },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento de fuego", desc: "Cono de fuego devastador." },
      { name: "Aliento debilitador", desc: "Cono que reduce la fuerza de los enemigos." }
    ],
    description: "Dragón legendario dedicado a la justicia y al orden."
  },
  {
    name: "Dragón rojo adulto",
    type: "Dragón",
    stats: { str: 27, dex: 10, con: 25, int: 16, wis: 13, cha: 21, hp: 256, ac: 19 },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento de fuego", desc: "Cono de fuego absolutamente devastador." }
    ],
    description: "Dragón tiránico y destructivo que domina volcanes y montañas."
  },
  {
    name: "Dragón tortuga",
    type: "Dragón",
    stats: { str: 25, dex: 10, con: 25, int: 10, wis: 12, cha: 12, hp: 341, ac: 20 },
    actions: [
      { name: "Mordisco", desc: "Ataque masivo capaz de aplastar barcos." },
      { name: "Aliento de vapor", desc: "Nube hirviente que inflige daño de fuego." }
    ],
    description: "Colosal dragón marino que acecha rutas oceánicas."
  }],
  "18": [  {
    name: "Androesfinge",
    type: "Monstruosidad",
    stats: { str: 22, dex: 15, con: 20, int: 19, wis: 20, cha: 20, hp: 199, ac: 17 },
    actions: [
      { name: "Garras", desc: "Dos ataques cortantes muy potentes." },
      { name: "Rugido divino", desc: "Onda sagrada que aturde a los enemigos." }
    ],
    description: "Esfinge guerrera que protege lugares sagrados y antiguos juramentos."
  },
  {
    name: "Dragón de oro adulto",
    type: "Dragón",
    stats: { str: 27, dex: 14, con: 25, int: 18, wis: 17, cha: 21, hp: 256, ac: 19 },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento de fuego", desc: "Cono de fuego devastador." },
      { name: "Aliento debilitador", desc: "Cono que reduce la fuerza de los enemigos." }
    ],
    description: "Dragón legendario dedicado a la justicia y al orden."
  },
  {
    name: "Dragón rojo adulto",
    type: "Dragón",
    stats: { str: 27, dex: 10, con: 25, int: 16, wis: 13, cha: 21, hp: 256, ac: 19 },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento de fuego", desc: "Cono de fuego absolutamente devastador." }
    ],
    description: "Dragón tiránico y destructivo que domina volcanes y montañas."
  },
  {
    name: "Dragón tortuga",
    type: "Dragón",
    stats: { str: 25, dex: 10, con: 25, int: 10, wis: 12, cha: 12, hp: 341, ac: 20 },
    actions: [
      { name: "Mordisco", desc: "Ataque masivo capaz de aplastar barcos." },
      { name: "Aliento de vapor", desc: "Nube hirviente que inflige daño de fuego." }
    ],
    description: "Colosal dragón marino que acecha rutas oceánicas."
  }],
  "19": [ {
    name: "Bálor",
    type: "Demonio",
    stats: {
      str: 26,
      dex: 15,
      con: 22,
      int: 20,
      wis: 16,
      cha: 22,
      hp: 262,
      ac: 19
    },
    actions: [
      {
        name: "Espada llameante",
        desc: "Ataque cuerpo a cuerpo devastador con daño cortante y de fuego."
      },
      {
        name: "Látigo ígneo",
        desc: "Ataque a distancia que atrae y daña al objetivo."
      },
      {
        name: "Explosión de muerte",
        desc: "Al morir, explota causando daño masivo de fuego a las criaturas cercanas."
      }
    ],
    description: "Señor demoníaco colosal, avatar de destrucción y caos absoluto."
  }],
  "20": [  {
    name: "Diablo de la sima",
    type: "Infernal",
    stats: {
      str: 26,
      dex: 14,
      con: 24,
      int: 22,
      wis: 18,
      cha: 24,
      hp: 300,
      ac: 19
    },
    actions: [
      {
        name: "Multiataque",
        desc: "Realiza varios ataques con mordisco, garras, maza y cola."
      },
      {
        name: "Maza infernal",
        desc: "Ataque cuerpo a cuerpo que inflige daño contundente y de fuego."
      },
      {
        name: "Hechicería innata",
        desc: "Lanza conjuros infernales de alto nivel."
      }
    ],
    description: "General supremo del infierno, estratega implacable y destructor."
  },
  {
    name: "Dragón blanco antiguo",
    type: "Dragón",
    stats: {
      str: 28,
      dex: 10,
      con: 26,
      int: 8,
      wis: 13,
      cha: 14,
      hp: 333,
      ac: 20
    },
    actions: [
      {
        name: "Multiataque",
        desc: "Mordisco y dos ataques de garra."
      },
      {
        name: "Aliento gélido",
        desc: "Cono de frío extremo que inflige daño masivo de frío."
      }
    ],
    description: "Depredador ancestral que reina sobre tundras y glaciares eternos."
  },
  {
    name: "Dragón de oropel antiguo",
    type: "Dragón",
    stats: {
      str: 30,
      dex: 10,
      con: 29,
      int: 18,
      wis: 17,
      cha: 28,
      hp: 350,
      ac: 22
    },
    actions: [
      {
        name: "Multiataque",
        desc: "Mordisco y dos ataques de garra."
      },
      {
        name: "Aliento debilitador",
        desc: "Cono que reduce la fuerza y capacidad ofensiva de los enemigos."
      },
      {
        name: "Aliento de fuego",
        desc: "Cono de fuego devastador de poder ancestral."
      }
    ],
    description: "Dragón ancestral majestuoso, símbolo viviente del bien y la justicia."
  }],
  "21": [ {
    name: "Dragón de cobre antiguo",
    type: "Dragón",
    stats: {
      str: 30,
      dex: 12,
      con: 29,
      int: 18,
      wis: 17,
      cha: 21,
      hp: 367,
      ac: 21
    },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento ácido", desc: "Línea de ácido extremadamente corrosivo." },
      { name: "Aliento ralentizador", desc: "Gas que ralentiza gravemente a los enemigos." }
    ],
    description: "Dragón ancestral ingenioso y burlón con siglos de experiencia."
  },
  {
    name: "Dragón negro antiguo",
    type: "Dragón",
    stats: {
      str: 27,
      dex: 14,
      con: 25,
      int: 16,
      wis: 15,
      cha: 19,
      hp: 367,
      ac: 22
    },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento ácido", desc: "Línea de ácido devastador que desintegra todo a su paso." }
    ],
    description: "Dragón ancestral cruel que reina sobre pantanos y ruinas corruptas."
  },
  {
    name: "Liche",
    type: "No muerto",
    stats: {
      str: 11,
      dex: 16,
      con: 16,
      int: 20,
      wis: 14,
      cha: 16,
      hp: 135,
      ac: 17
    },
    actions: [
      { name: "Hechicería arcana", desc: "Lanza conjuros arcanos de nivel legendario." },
      { name: "Toque paralizante", desc: "Ataque que inflige daño necrótico y paraliza." }
    ],
    description: "Hechicero inmortal que preserva su alma en un filacteria."
  },
  {
    name: "Solar",
    type: "Celestial",
    stats: {
      str: 26,
      dex: 22,
      con: 26,
      int: 25,
      wis: 25,
      cha: 30,
      hp: 243,
      ac: 21
    },
    actions: [
      { name: "Espada solar", desc: "Ataque radiante de poder divino abrumador." },
      { name: "Arco slayante", desc: "Disparo que inflige daño masivo y puede matar instantáneamente." }
    ],
    description: "El más poderoso de los ángeles, ejecutor directo de la voluntad divina."
  }],
  "22": [ {
    name: "Dragón de bronce antiguo",
    type: "Dragón",
    stats: {
      str: 30,
      dex: 10,
      con: 29,
      int: 18,
      wis: 17,
      cha: 21,
      hp: 444,
      ac: 22
    },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento eléctrico", desc: "Línea de relámpago de poder ancestral." },
      { name: "Aliento repelente", desc: "Explosión que empuja y derriba a los enemigos." }
    ],
    description: "Dragón ancestral honorable que protege mares y costas desde tiempos inmemoriales."
  },
  {
    name: "Dragón verde antiguo",
    type: "Dragón",
    stats: {
      str: 27,
      dex: 12,
      con: 25,
      int: 20,
      wis: 17,
      cha: 21,
      hp: 385,
      ac: 22
    },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento venenoso", desc: "Cono de gas venenoso extremadamente letal." }
    ],
    description: "Dragón ancestral manipulador que reina sobre bosques primigenios."
  }],
  "23": [  {
    name: "Dragón azul antiguo",
    type: "Dragón",
    stats: {
      str: 30,
      dex: 10,
      con: 29,
      int: 18,
      wis: 17,
      cha: 21,
      hp: 481,
      ac: 22
    },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento eléctrico", desc: "Línea de relámpago devastadora de poder ancestral." }
    ],
    description: "Dragón ancestral tiránico que domina desiertos y tormentas eternas."
  },
  {
    name: "Dragón de plata antiguo",
    type: "Dragón",
    stats: {
      str: 30,
      dex: 10,
      con: 29,
      int: 18,
      wis: 17,
      cha: 23,
      hp: 487,
      ac: 22
    },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento gélido", desc: "Cono de frío absoluto." },
      { name: "Aliento paralizante", desc: "Explosión que puede paralizar a múltiples enemigos." }
    ],
    description: "Dragón ancestral noble que protege reinos y civilizaciones enteras."
  },
  {
    name: "Kraken",
    type: "Monstruosidad",
    stats: {
      str: 30,
      dex: 11,
      con: 25,
      int: 22,
      wis: 18,
      cha: 20,
      hp: 472,
      ac: 18
    },
    actions: [
      { name: "Tentáculos", desc: "Ataques múltiples que golpean, agarran y aplastan." },
      { name: "Relámpago", desc: "Descarga eléctrica que daña a criaturas en el agua." },
      { name: "Lanzar presa", desc: "Arroja criaturas atrapadas a gran distancia." }
    ],
    description: "Colosal horror marino que reina sobre las profundidades del océano."
  }],
  "24": [ {
    name: "Dragón de oro antiguo",
    type: "Dragón",
    stats: {
      str: 30,
      dex: 14,
      con: 29,
      int: 20,
      wis: 19,
      cha: 28,
      hp: 546,
      ac: 22
    },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento de fuego", desc: "Cono de fuego de poder apocalíptico." },
      { name: "Aliento debilitador", desc: "Cono que reduce drásticamente la fuerza de los enemigos." }
    ],
    description: "Dragón ancestral supremo, paladín viviente de la justicia y el orden."
  },
  {
    name: "Dragón rojo antiguo",
    type: "Dragón",
    stats: {
      str: 30,
      dex: 10,
      con: 29,
      int: 18,
      wis: 15,
      cha: 25,
      hp: 546,
      ac: 22
    },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento de fuego", desc: "Cono de fuego cataclísmico capaz de arrasar ejércitos." }
    ],
    description: "Dragón ancestral tiránico, encarnación viviente de la destrucción ígnea."
  }],
  "25": [ {
    name: "Dragón de oro antiguo",
    type: "Dragón",
    stats: {
      str: 30,
      dex: 14,
      con: 29,
      int: 20,
      wis: 19,
      cha: 28,
      hp: 546,
      ac: 22
    },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento de fuego", desc: "Cono de fuego de poder apocalíptico." },
      { name: "Aliento debilitador", desc: "Cono que reduce drásticamente la fuerza de los enemigos." }
    ],
    description: "Dragón ancestral supremo, paladín viviente de la justicia y el orden."
  },
  {
    name: "Dragón rojo antiguo",
    type: "Dragón",
    stats: {
      str: 30,
      dex: 10,
      con: 29,
      int: 18,
      wis: 15,
      cha: 25,
      hp: 546,
      ac: 22
    },
    actions: [
      { name: "Multiataque", desc: "Mordisco y dos ataques de garra." },
      { name: "Aliento de fuego", desc: "Cono de fuego cataclísmico capaz de arrasar ejércitos." }
    ],
    description: "Dragón ancestral tiránico, encarnación viviente de la destrucción ígnea."
  }],
  "30": [ {
    name: "Tarasca",
    type: "Monstruosidad",
    stats: {
      str: 30,
      dex: 11,
      con: 30,
      int: 3,
      wis: 11,
      cha: 11,
      hp: 676,
      ac: 25
    },
    actions: [
      {
        name: "Multiataque",
        desc: "Mordisco, dos ataques de garra, un ataque con cuernos y un ataque con cola."
      },
      {
        name: "Mordisco",
        desc: "Ataque devastador que puede tragar a la criatura objetivo."
      },
      {
        name: "Cola",
        desc: "Ataque masivo que derriba y lanza a los enemigos."
      }
    ],
    description: "Monstruo apocalíptico casi indestructible, destinado a arrasar civilizaciones enteras."
  }]
};

// ==========================================
//  LISTAS DE JEFES POR CR (Rellenar aquí)
// ==========================================
export const bossesByCR: Record<string, Creature[]> = {
   "0": [
    {
      name: "Plebeyo — Fanático desesperado",
      type: "Humanoide",
      stats: { str: 11, dex: 11, con: 11, int: 10, wis: 10, cha: 10, hp: 12, ac: 11 },
      actions: [
        { name: "Ataque desesperado", desc: "Hace un ataque con ventaja si está herido." }
      ],
      description: "Un civil empujado al límite que lucha sin miedo a la muerte."
    },
    {
      name: "Rata — Reina de la cloaca",
      type: "Bestia",
      stats: { str: 4, dex: 14, con: 12, int: 2, wis: 10, cha: 4, hp: 18, ac: 12 },
      actions: [
        { name: "Mordisco infeccioso", desc: "Puede envenenar al objetivo." }
      ],
      description: "Una rata anormalmente grande que domina enjambres."
    },

{
  name: "Gato — Acechador urbano",
  type: "Bestia",
  stats: { str: 5, dex: 15, con: 10, int: 3, wis: 12, cha: 7, hp: 14, ac: 13 },
  actions: [
    { name: "Zarpazo rápido", desc: "Puede retirarse sin provocar ataques de oportunidad." }
  ],
  description: "Un felino extremadamente astuto que ataca desde las sombras."
},
{
  name: "Cuervo — Vigía siniestro",
  type: "Bestia",
  stats: { str: 4, dex: 14, con: 10, int: 3, wis: 13, cha: 6, hp: 13, ac: 12 },
  actions: [
    { name: "Graznido perturbador", desc: "Impone desventaja al siguiente ataque del objetivo." }
  ],
  description: "Un cuervo inquietante que anuncia desgracias."
},
{
  name: "Comadreja — Degolladora",
  type: "Bestia",
  stats: { str: 6, dex: 15, con: 11, int: 2, wis: 12, cha: 5, hp: 16, ac: 13 },
  actions: [
    { name: "Mordisco feroz", desc: "Inflige daño adicional si tiene ventaja." }
  ],
  description: "Pequeña, rápida y sorprendentemente letal."
}

  ],

  "1/8": [

  {
  name: "Bandido — Saqueador despiadado",
  type: "Humanoide",
  stats: { str: 12, dex: 14, con: 13, int: 10, wis: 11, cha: 10, hp: 35, ac: 14 },
  actions: [
    { name: "Golpe oportunista", desc: "Hace daño extra a enemigos heridos." }
  ],
  description: "Un criminal curtido que remata sin piedad."
},
{
  name: "Kobold — Fanático del dragón",
  type: "Humanoide",
  stats: { str: 7, dex: 15, con: 13, int: 9, wis: 9, cha: 8, hp: 28, ac: 13 },
  actions: [
    { name: "Fervor dracónico", desc: "Obtiene ventaja durante un turno al ser herido." }
  ],
  description: "Un kobold impulsado por una devoción irracional."
},
{
  name: "Goblin — Francotirador ruin",
  type: "Humanoide",
  stats: { str: 10, dex: 17, con: 12, int: 10, wis: 10, cha: 8, hp: 32, ac: 15 },
  actions: [
    { name: "Disparo preciso", desc: "Ignora cobertura parcial." }
  ],
  description: "Un goblin experto en ataques a distancia."
},

    {
      name: "Goblin — Hostigador alfa",
      type: "Humanoide",
      stats: { str: 10, dex: 16, con: 12, int: 10, wis: 10, cha: 8, hp: 30, ac: 15 },
      actions: [
        { name: "Ataque furtivo", desc: "Inflige daño adicional si tiene ventaja." }
      ],
      description: "Un goblin veterano experto en tácticas sucias."
    },
    {
      name: "Kobold — Ingeniero de trampas",
      type: "Humanoide",
      stats: { str: 7, dex: 15, con: 12, int: 10, wis: 8, cha: 8, hp: 22, ac: 13 },
      actions: [
        { name: "Trampa improvisada", desc: "Dificulta el terreno o daña a un enemigo." }
      ],
      description: "Un kobold brillante que convierte el campo de batalla en un infierno."
    }
  ],

  "1/4": [

{
  name: "Jabalí — Colmillo rabioso",
  type: "Bestia",
  stats: { str: 15, dex: 12, con: 16, int: 2, wis: 12, cha: 5, hp: 55, ac: 13 },
  actions: [
    { name: "Embestida salvaje", desc: "Puede derribar al objetivo." }
  ],
  description: "Un jabalí enorme impulsado por furia incontrolable."
},
{
  name: "Zombi — Resucitado tenaz",
  type: "No muerto",
  stats: { str: 14, dex: 8, con: 16, int: 3, wis: 6, cha: 5, hp: 50, ac: 12 },
  actions: [
    { name: "No muere aún", desc: "La primera vez que cae a 0 HP, queda a 1 HP." }
  ],
  description: "Un cadáver que se niega a caer definitivamente."
},
{
  name: "Pantera — Sombra cazadora",
  type: "Bestia",
  stats: { str: 14, dex: 16, con: 13, int: 3, wis: 14, cha: 8, hp: 48, ac: 14 },
  actions: [
    { name: "Salto letal", desc: "Daña y derriba si ataca con ventaja." }
  ],
  description: "Un depredador silencioso que ataca desde la oscuridad."
},

    {
      name: "Lobo — Alfa sanguinario",
      type: "Bestia",
      stats: { str: 14, dex: 15, con: 14, int: 3, wis: 13, cha: 7, hp: 45, ac: 14 },
      actions: [
        { name: "Mordisco coordinado", desc: "Derriba si el objetivo falla una salvación." }
      ],
      description: "Un depredador dominante que lidera la manada."
    },
    {
      name: "Esqueleto — Guardián maldito",
      type: "No muerto",
      stats: { str: 12, dex: 16, con: 15, int: 6, wis: 8, cha: 5, hp: 38, ac: 15 },
      actions: [
        { name: "Resistencia profana", desc: "Ignora el primer golpe recibido cada combate." }
      ],
      description: "Un no muerto reforzado con magia oscura."
    }
  ],

  "1/2": [

{
  name: "Hobgoblin — Capitán táctico",
  type: "Humanoide",
  stats: { str: 16, dex: 14, con: 16, int: 12, wis: 11, cha: 12, hp: 75, ac: 16 },
  actions: [
    { name: "Orden marcial", desc: "Un aliado puede atacar inmediatamente." }
  ],
  description: "Un líder disciplinado que coordina el combate."
},
{
  name: "Gnoll — Devora-hombres",
  type: "Humanoide",
  stats: { str: 18, dex: 12, con: 15, int: 6, wis: 10, cha: 8, hp: 80, ac: 14 },
  actions: [
    { name: "Frenesí sangriento", desc: "Ataca de nuevo si reduce a un enemigo a 0 HP." }
  ],
  description: "Un gnoll consumido por el hambre eterna."
},
{
  name: "Oso negro — Rompehuesos",
  type: "Bestia",
  stats: { str: 19, dex: 10, con: 16, int: 2, wis: 13, cha: 7, hp: 85, ac: 13 },
  actions: [
    { name: "Abrazo aplastante", desc: "Agarra e inflige daño automático." }
  ],
  description: "Un oso enorme con fuerza brutal."
},

    {
      name: "Orco — Campeón de guerra",
      type: "Humanoide",
      stats: { str: 18, dex: 13, con: 16, int: 8, wis: 11, cha: 10, hp: 60, ac: 14 },
      actions: [
        { name: "Carga brutal", desc: "Hace daño adicional al moverse antes de atacar." }
      ],
      description: "Un guerrero orco endurecido por innumerables batallas."
    },
    {
      name: "Sombra — Acechador de almas",
      type: "No muerto",
      stats: { str: 8, dex: 18, con: 14, int: 6, wis: 12, cha: 14, hp: 55, ac: 14 },
      actions: [
        { name: "Drenaje vital", desc: "Reduce Fuerza temporalmente." }
      ],
      description: "Una entidad oscura que se alimenta del miedo."
    }
  ],

  "1": [

    {
  name: "Hombre lobo — Alfa maldito",
  type: "Monstruosidad",
  stats: { str: 18, dex: 15, con: 17, int: 10, wis: 12, cha: 11, hp: 110, ac: 14 },
  actions: [
    { name: "Furia lunar", desc: "Hace daño extra mientras esté herido." }
  ],
  description: "Un licántropo dominante bajo la luna llena."
},
{
  name: "Espantapájaros — Terror del campo",
  type: "Constructo",
  stats: { str: 14, dex: 14, con: 16, int: 6, wis: 11, cha: 10, hp: 105, ac: 13 },
  actions: [
    { name: "Mirada del miedo", desc: "Puede asustar a criaturas cercanas." }
  ],
  description: "Una figura animada por magia oscura."
},
{
  name: "Cultista — Profeta del caos",
  type: "Humanoide",
  stats: { str: 12, dex: 14, con: 14, int: 12, wis: 11, cha: 14, hp: 95, ac: 13 },
  actions: [
    { name: "Invocación menor", desc: "Refuerza a aliados cercanos." }
  ],
  description: "Un fanático que inspira destrucción."
},


    {
      name: "Ogro — Tirano de la colina",
      type: "Gigante",
      stats: { str: 20, dex: 8, con: 18, int: 5, wis: 9, cha: 7, hp: 95, ac: 12 },
      actions: [
        { name: "Golpe aplastante", desc: "Daño extra y empuja al objetivo." }
      ],
      description: "Un ogro dominante que gobierna por pura fuerza."
    },
    {
      name: "Araña gigante — Matriarca venenosa",
      type: "Bestia",
      stats: { str: 14, dex: 16, con: 14, int: 2, wis: 11, cha: 4, hp: 70, ac: 15 },
      actions: [
        { name: "Veneno paralizante", desc: "Puede paralizar brevemente." }
      ],
      description: "Una araña ancestral con toxinas letales."
    }
  ],

  "2": [
    {
      name: "Ankheg — Devorador subterráneo",
      type: "Monstruosidad",
      stats: { str: 18, dex: 11, con: 16, int: 2, wis: 13, cha: 6, hp: 95, ac: 15 },
      actions: [
        { name: "Emboscada desde tierra", desc: "Sale del suelo con ventaja y daño extra." }
      ],
      description: "Un ankheg enorme que domina túneles enteros."
    },
    {
      name: "Cría de dragón blanco — Acechador glacial",
      type: "Dragón",
      stats: { str: 18, dex: 10, con: 17, int: 6, wis: 11, cha: 12, hp: 120, ac: 16 },
      actions: [
        { name: "Aliento congelante intensificado", desc: "Reduce la velocidad de los objetivos." }
      ],
      description: "Una cría más agresiva y territorial."
    }
  ],

  "3": [
    {
      name: "Mantícora — Reina del desierto",
      type: "Monstruosidad",
      stats: { str: 18, dex: 16, con: 17, int: 7, wis: 14, cha: 9, hp: 150, ac: 15 },
      actions: [
        { name: "Lluvia de púas", desc: "Ataca a múltiples enemigos a distancia." }
      ],
      description: "Una mantícora que domina vastos territorios áridos."
    },
    {
      name: "Oso lechuza — Terror del bosque",
      type: "Monstruosidad",
      stats: { str: 22, dex: 13, con: 18, int: 3, wis: 14, cha: 7, hp: 170, ac: 14 },
      actions: [
        { name: "Embate salvaje", desc: "Puede derribar y atacar de nuevo." }
      ],
      description: "Un depredador alfa de fuerza descomunal."
    }
  ],

  "4": [
    {
      name: "Ettin — Gemelos de la masacre",
      type: "Gigante",
      stats: { str: 22, dex: 10, con: 19, int: 8, wis: 10, cha: 9, hp: 200, ac: 13 },
      actions: [
        { name: "Ataque doble coordinado", desc: "Ataca dos objetivos distintos." }
      ],
      description: "Un ettin con coordinación brutal entre sus dos cabezas."
    },
    {
      name: "Fantasma — Señor del lamento",
      type: "No muerto",
      stats: { str: 7, dex: 16, con: 15, int: 10, wis: 14, cha: 17, hp: 150, ac: 14 },
      actions: [
        { name: "Aullido desgarrador", desc: "Puede asustar y debilitar." }
      ],
      description: "Un espíritu atormentado que gobierna ruinas malditas."
    }
  ],

  "5": [
    {
      name: "Troll — Regenerador alfa",
      type: "Gigante",
      stats: { str: 20, dex: 13, con: 20, int: 7, wis: 9, cha: 7, hp: 220, ac: 15 },
      actions: [
        { name: "Regeneración acelerada", desc: "Recupera más vida cada turno." }
      ],
      description: "Un troll casi imposible de matar."
    },
    {
      name: "Gigante de las colinas — Déspota brutal",
      type: "Gigante",
      stats: { str: 24, dex: 8, con: 21, int: 5, wis: 9, cha: 6, hp: 230, ac: 14 },
      actions: [
        { name: "Pisotón sísmico", desc: "Derriba a enemigos cercanos." }
      ],
      description: "Un tirano que gobierna por fuerza bruta."
    }
  ],

  "6": [
    {
      name: "Quimera — Engendro dominante",
      type: "Monstruosidad",
      stats: { str: 20, dex: 14, con: 19, int: 6, wis: 14, cha: 10, hp: 250, ac: 15 },
      actions: [
        { name: "Aliento combinado", desc: "Fuego más ataque inmediato." }
      ],
      description: "Una quimera más grande y letal."
    },
    {
      name: "Vrock — Heraldo del caos",
      type: "Demonio",
      stats: { str: 20, dex: 15, con: 18, int: 8, wis: 13, cha: 12, hp: 220, ac: 16 },
      actions: [
        { name: "Explosión de esporas", desc: "Daño persistente en área." }
      ],
      description: "Un demonio que lidera incursiones abisales."
    }
  ],

  "7": [
    {
      name: "Oni — Señor del engaño",
      type: "Gigante",
      stats: { str: 20, dex: 14, con: 18, int: 14, wis: 12, cha: 16, hp: 260, ac: 17 },
      actions: [
        { name: "Ilusión asesina", desc: "Confunde a los enemigos." }
      ],
      description: "Un oni estratega y manipulador."
    },
    {
      name: "Gigante de piedra — Guardián ancestral",
      type: "Gigante",
      stats: { str: 25, dex: 12, con: 22, int: 10, wis: 12, cha: 9, hp: 290, ac: 17 },
      actions: [
        { name: "Avalancha rocosa", desc: "Área de daño y derribo." }
      ],
      description: "Un coloso esculpido por el tiempo."
    }
  ],

  "8": [
    {
      name: "Hidra — Devoraejércitos",
      type: "Monstruosidad",
      stats: { str: 22, dex: 13, con: 21, int: 2, wis: 12, cha: 7, hp: 310, ac: 16 },
      actions: [
        { name: "Cabezas furiosas", desc: "Más ataques si recibe daño." }
      ],
      description: "Una hidra imposible de controlar."
    },
    {
      name: "Tyrannosaurus rex — Depredador alfa",
      type: "Bestia",
      stats: { str: 26, dex: 10, con: 22, int: 2, wis: 12, cha: 9, hp: 320, ac: 14 },
      actions: [
        { name: "Mordida aplastante", desc: "Agarra y daña cada turno." }
      ],
      description: "El cazador supremo de la era perdida."
    }
  ],

  "9": [
    {
      name: "Gigante de fuego — Señor de la forja",
      type: "Gigante",
      stats: { str: 27, dex: 10, con: 23, int: 10, wis: 14, cha: 13, hp: 350, ac: 18 },
      actions: [
        { name: "Martillo ígneo", desc: "Daño de fuego adicional." }
      ],
      description: "Un maestro de la guerra y el acero."
    },
    {
      name: "Gólem de arcilla — Guardián sagrado",
      type: "Constructo",
      stats: { str: 24, dex: 9, con: 22, int: 3, wis: 11, cha: 1, hp: 325, ac: 18 },
      actions: [
        { name: "Maldición debilitante", desc: "Reduce curación recibida." }
      ],
      description: "Un constructo bendecido por rituales antiguos."
    }
  ],
 "10": [
    {
      name: "Dragón rojo joven — Señor ígneo",
      type: "Dragón",
      stats: { str: 23, dex: 12, con: 21, int: 14, wis: 13, cha: 17, hp: 230, ac: 19 },
      actions: [
        { name: "Aliento infernal mejorado", desc: "Mayor alcance y daño persistente." },
        { name: "Ala abrasadora", desc: "Daña y derriba enemigos cercanos." }
      ],
      description: "Un dragón joven que ya gobierna su territorio con fuego absoluto."
    },
    {
      name: "Gólem de piedra — Guardián ancestral",
      type: "Constructo",
      stats: { str: 22, dex: 9, con: 20, int: 3, wis: 11, cha: 1, hp: 210, ac: 18 },
      actions: [
        { name: "Pulso petrificante", desc: "Puede ralentizar a todos los enemigos cercanos." }
      ],
      description: "Un gólem reforzado con runas antiguas."
    }
  ],
  "11": [
    {
      name: "Behir — Devoratormentas",
      type: "Monstruosidad",
      stats: { str: 24, dex: 16, con: 22, int: 7, wis: 14, cha: 12, hp: 250, ac: 18 },
      actions: [
        { name: "Rayo encadenado", desc: "El aliento eléctrico puede saltar a otro objetivo cercano." },
        { name: "Constricción brutal", desc: "Inflige daño automático a criaturas agarradas." }
      ],
      description: "Un behir que se alimenta de tormentas mágicas."
    },
    {
      name: "Roc — Señor de los cielos",
      type: "Bestia",
      stats: { str: 28, dex: 14, con: 24, int: 3, wis: 15, cha: 10, hp: 300, ac: 16 },
      actions: [
        { name: "Picado devastador", desc: "Inflige daño masivo al descender desde gran altura." }
      ],
      description: "Un roc legendario que domina montañas enteras."
    }
  ],

  "12": [
    {
      name: "Archimago — Maestro del círculo arcano",
      type: "Humanoide",
      stats: { str: 10, dex: 14, con: 16, int: 22, wis: 18, cha: 16, hp: 180, ac: 17 },
      actions: [
        { name: "Conjuro reflejado", desc: "Puede redirigir un conjuro enemigo una vez por combate." }
      ],
      description: "Un archimago que ha perfeccionado la guerra mágica."
    },
    {
      name: "Erinia — Ejecutora infernal",
      type: "Diablo",
      stats: { str: 22, dex: 16, con: 20, int: 14, wis: 16, cha: 18, hp: 230, ac: 18 },
      actions: [
        { name: "Cadenas del castigo", desc: "Restringe y daña cada turno." }
      ],
      description: "Una erinia encargada de castigos ejemplares."
    }
  ],

  "13": [
    {
      name: "Vampiro — Señor de la noche eterna",
      type: "No muerto",
      stats: { str: 22, dex: 18, con: 20, int: 16, wis: 15, cha: 20, hp: 260, ac: 18 },
      actions: [
        { name: "Dominación absoluta", desc: "Controla a una criatura debilitada." }
      ],
      description: "Un vampiro ancestral con dominio total sobre su territorio."
    },
    {
      name: "Dragón blanco adulto — Tirano glacial",
      type: "Dragón",
      stats: { str: 26, dex: 12, con: 24, int: 10, wis: 13, cha: 16, hp: 350, ac: 19 },
      actions: [
        { name: "Tormenta ártica", desc: "Zona persistente de frío extremo." }
      ],
      description: "Un dragón blanco que ha reclamado un reino helado."
    }
  ],

  "14": [
    {
      name: "Dragón negro adulto — Corruptor del pantano",
      type: "Dragón",
      stats: { str: 27, dex: 14, con: 24, int: 14, wis: 13, cha: 17, hp: 370, ac: 19 },
      actions: [
        { name: "Ácido corrosivo mejorado", desc: "Reduce AC temporalmente." }
      ],
      description: "Un dragón negro que disuelve todo a su paso."
    },
    {
      name: "Diablo gélido — Mariscal del Stygia",
      type: "Diablo",
      stats: { str: 23, dex: 14, con: 22, int: 18, wis: 16, cha: 18, hp: 300, ac: 18 },
      actions: [
        { name: "Congelación infernal", desc: "Inmoviliza a enemigos cercanos." }
      ],
      description: "Un estratega infernal del hielo eterno."
    }
  ],

  "15": [
    {
      name: "Dragón verde adulto — Emperador venenoso",
      type: "Dragón",
      stats: { str: 25, dex: 14, con: 23, int: 18, wis: 15, cha: 19, hp: 380, ac: 19 },
      actions: [
        { name: "Nube tóxica dominante", desc: "Área persistente de veneno." }
      ],
      description: "Un manipulador supremo cubierto de veneno."
    },
    {
      name: "Gusano púrpura — Devoramundos",
      type: "Monstruosidad",
      stats: { str: 28, dex: 7, con: 26, int: 1, wis: 12, cha: 5, hp: 400, ac: 18 },
      actions: [
        { name: "Excavación sísmica", desc: "Colapsa el terreno." }
      ],
      description: "Una aberración colosal bajo la tierra."
    }
  ],

  "16": [
    {
      name: "Marilith — General del abismo",
      type: "Demonio",
      stats: { str: 24, dex: 20, con: 22, int: 18, wis: 16, cha: 20, hp: 350, ac: 20 },
      actions: [
        { name: "Cadena de ataques", desc: "Ataca a múltiples enemigos sin reacción." }
      ],
      description: "Una comandante demoníaca temida incluso en el Abismo."
    },
    {
      name: "Dragón azul adulto — Señor de la tormenta",
      type: "Dragón",
      stats: { str: 27, dex: 12, con: 25, int: 16, wis: 15, cha: 19, hp: 420, ac: 20 },
      actions: [
        { name: "Tormenta eléctrica", desc: "Daño en área continuo." }
      ],
      description: "Un dragón que gobierna cielos y desiertos."
    }
  ],

  "17": [
    {
      name: "Dragón rojo adulto — Emperador ígneo",
      type: "Dragón",
      stats: { str: 30, dex: 14, con: 28, int: 18, wis: 17, cha: 23, hp: 500, ac: 21 },
      actions: [
        { name: "Dominio del fuego", desc: "Ignora resistencia al fuego." }
      ],
      description: "Un soberano absoluto de la destrucción."
    },
    {
      name: "Dragón tortuga — Destructor oceánico",
      type: "Dragón",
      stats: { str: 28, dex: 10, con: 26, int: 12, wis: 14, cha: 16, hp: 450, ac: 20 },
      actions: [
        { name: "Maremoto ancestral", desc: "Oleada que derriba barcos." }
      ],
      description: "Una fortaleza viviente de los mares."
    }
  ],

  "18": [
    {
      name: "Demiliche — Eco de la eternidad",
      type: "No muerto",
      stats: { str: 1, dex: 20, con: 20, int: 22, wis: 20, cha: 20, hp: 200, ac: 20 },
      actions: [
        { name: "Grito del alma", desc: "Daña y debilita a todas las criaturas." }
      ],
      description: "Un vestigio inmortal de poder arcano."
    },
    {
      name: "Diablo óseo — Mariscal infernal",
      type: "Diablo",
      stats: { str: 26, dex: 16, con: 24, int: 18, wis: 16, cha: 20, hp: 320, ac: 20 },
      actions: [
        { name: "Comando infernal", desc: "Aliados atacan inmediatamente." }
      ],
      description: "Un general del infierno en plena campaña."
    }
  ],

  "19": [
    {
      name: "Bálor — Destructor abisal",
      type: "Demonio",
      stats: { str: 30, dex: 16, con: 26, int: 20, wis: 18, cha: 22, hp: 450, ac: 21 },
      actions: [
        { name: "Explosión de muerte", desc: "Daño masivo al caer." }
      ],
      description: "Un señor demoníaco de devastación absoluta."
    },
    {
      name: "Bálor — Portador del fin",
      type: "Demonio",
      stats: { str: 30, dex: 16, con: 28, int: 20, wis: 18, cha: 22, hp: 500, ac: 22 },
      actions: [
        { name: "Látigo del apocalipsis", desc: "Arrastra y quema a múltiples enemigos." }
      ],
      description: "Una encarnación del caos puro."
    }
  ],

  "20": [
    {
      name: "Dragón blanco antiguo — Rey del invierno",
      type: "Dragón",
      stats: { str: 30, dex: 12, con: 28, int: 12, wis: 15, cha: 18, hp: 550, ac: 22 },
      actions: [
        { name: "Edad de hielo", desc: "Congela el terreno entero." }
      ],
      description: "El soberano absoluto del frío eterno."
    },
    {
      name: "Diablo de la sima — Carcelero infernal",
      type: "Diablo",
      stats: { str: 26, dex: 14, con: 24, int: 22, wis: 18, cha: 22, hp: 400, ac: 21 },
      actions: [
        { name: "Jaula infernal", desc: "Encierra a un enemigo." }
      ],
      description: "Un señor del Averno encargado de prisiones eternas."
    }
  ],

  "21": [
    {
      name: "Liche — Soberano de la no-muerte",
      type: "No muerto",
      stats: { str: 11, dex: 16, con: 20, int: 24, wis: 20, cha: 22, hp: 420, ac: 21 },
      actions: [
        { name: "Dominio necrótico", desc: "Los no muertos aliados obtienen ventaja en ataques." },
        { name: "Filacteria protegida", desc: "La primera vez que llega a 0 HP, revive con 150 HP." }
      ],
      description: "Un liche que ha perfeccionado la inmortalidad absoluta."
    },
    {
      name: "Solar — Ejecutor divino",
      type: "Celestial",
      stats: { str: 28, dex: 22, con: 26, int: 18, wis: 22, cha: 26, hp: 450, ac: 22 },
      actions: [
        { name: "Juicio celestial", desc: "Daño radiante masivo a criaturas malignas." }
      ],
      description: "Un avatar de la justicia de los dioses."
    }
  ],

  "22": [
    {
      name: "Dragón de bronce antiguo — Señor de la tempestad",
      type: "Dragón",
      stats: { str: 30, dex: 14, con: 28, int: 20, wis: 19, cha: 23, hp: 620, ac: 22 },
      actions: [
        { name: "Tormenta viviente", desc: "Rayos golpean enemigos cada ronda." }
      ],
      description: "Un dragón que encarna la furia del cielo."
    },
    {
      name: "Dragón verde antiguo — Emperador de las sombras",
      type: "Dragón",
      stats: { str: 28, dex: 16, con: 27, int: 22, wis: 19, cha: 25, hp: 600, ac: 22 },
      actions: [
        { name: "Dominio venenoso", desc: "Nube tóxica persistente en el campo." }
      ],
      description: "Un manipulador supremo envuelto en veneno y engaños."
    }
  ],

  "23": [
    {
      name: "Dragón azul antiguo — Tirano del desierto",
      type: "Dragón",
      stats: { str: 30, dex: 14, con: 29, int: 20, wis: 18, cha: 24, hp: 650, ac: 23 },
      actions: [
        { name: "Supertormenta eléctrica", desc: "Daño eléctrico continuo en gran área." }
      ],
      description: "Un dragón que gobierna tormentas eternas."
    },
    {
      name: "Kraken — Azote de los mares",
      type: "Monstruosidad",
      stats: { str: 30, dex: 11, con: 30, int: 22, wis: 18, cha: 20, hp: 700, ac: 22 },
      actions: [
        { name: "Abismo viviente", desc: "Agarra y arrastra múltiples enemigos." }
      ],
      description: "Una deidad primitiva de los océanos."
    }
  ],

  "24": [
    {
      name: "Dragón de oro antiguo — Avatar de la perfección",
      type: "Dragón",
      stats: { str: 30, dex: 16, con: 30, int: 22, wis: 21, cha: 26, hp: 700, ac: 24 },
      actions: [
        { name: "Aliento del juicio", desc: "Ignora resistencias y reduce salvaciones." }
      ],
      description: "La culminación del poder dracónico."
    },
    {
      name: "Dragón rojo antiguo — Emperador del apocalipsis",
      type: "Dragón",
      stats: { str: 30, dex: 14, con: 30, int: 20, wis: 19, cha: 25, hp: 720, ac: 24 },
      actions: [
        { name: "Infierno eterno", desc: "Fuego persistente que cubre el terreno." }
      ],
      description: "Un cataclismo con alas."
    }
  ],

  "25": [
    {
      name: "Solar — Portador del fin divino",
      type: "Celestial",
      stats: { str: 30, dex: 24, con: 28, int: 20, wis: 24, cha: 28, hp: 520, ac: 23 },
      actions: [
        { name: "Veredicto final", desc: "Puede eliminar instantáneamente a criaturas debilitadas." }
      ],
      description: "La manifestación final del juicio celestial."
    },
    {
      name: "Liche — Arconte de la eternidad",
      type: "No muerto",
      stats: { str: 12, dex: 18, con: 22, int: 26, wis: 22, cha: 24, hp: 480, ac: 22 },
      actions: [
        { name: "Ritual del fin", desc: "Invoca no muertos mayores durante el combate." }
      ],
      description: "Un liche que gobierna reinos enteros desde la muerte."
    }
  ],

  "30": [
    {
      name: "Tarasca — Devastación absoluta",
      type: "Monstruosidad",
      stats: { str: 30, dex: 12, con: 30, int: 3, wis: 15, cha: 15, hp: 900, ac: 26 },
      actions: [
        { name: "Extinción masiva", desc: "Destruye todo en un área colosal." }
      ],
      description: "El fin de civilizaciones enteras."
    },
    {
      name: "Tarasca — Juicio del mundo",
      type: "Monstruosidad",
      stats: { str: 30, dex: 12, con: 30, int: 3, wis: 15, cha: 15, hp: 1000, ac: 27 },
      actions: [
        { name: "Rugido del apocalipsis", desc: "Aturde y aterroriza a todas las criaturas." }
      ],
      description: "La sentencia final del mundo mortal."
    }
  ]
};


export const localOracleAnswers: string[] = [
  "SÍ. Las estrellas se alinean a tu favor.", "NO. Un viento frío sopla en contra de tus deseos.",
  "SÍ, PERO... el precio a pagar será alto.", "NO, Y ADEMÁS... algo empeora en tu situación.",
  "SÍ. El destino sonríe ante tu audacia.", "NO. Los dioses han decidido otro camino."
];

// ==========================================
//  LISTAS DE BOTÍN POR RANGO DE CR (Rellenar aquí)
// ==========================================
export const lootTablesByRange: Record<string, LootItem[]> = {
   "0-1": [
    {
      name: "Bolsa de monedas de cobre",
      type: "Monedas",
      rarity: "Común",
      value: "1d6 pc",
      description: "Un pequeño puñado de monedas de cobre gastadas por el uso."
    },
    {
      name: "Bolsa de monedas de cobre",
      type: "Monedas",
      rarity: "Común",
      value: "3d6 pc",
      description: "Varias monedas de cobre reunidas con esfuerzo."
    },
    {
      name: "Bolsa de monedas de cobre",
      type: "Monedas",
      rarity: "Común",
      value: "5d6 pc",
      description: "Un peso notable de monedas de cobre sucias."
    },
    {
      name: "Bolsa de monedas de plata",
      type: "Monedas",
      rarity: "Común",
      value: "4d6 pe",
      description: "Monedas de plata envueltas en un paño viejo."
    },
    {
      name: "Bolsa de monedas de plata",
      type: "Monedas",
      rarity: "Común",
      value: "3d6 pe",
      description: "Plata suficiente para una estancia modesta."
    },
    {
      name: "Bolsa de monedas de plata",
      type: "Monedas",
      rarity: "Común",
      value: "5d6 pe",
      description: "Un buen número de monedas de plata bien conservadas."
    },
    {
      name: "Bolsa de monedas de oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "3d6 po",
      description: "Un botín modesto de monedas de oro."
    },
    {
      name: "Bolsa de monedas de oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "1d6 pp",
      description: "Algunas monedas de platino, raras para gente común."
    },
    {
      name: "Gema pequeña",
      type: "Gema",
      rarity: "Poco común",
      value: "10 po",
      description: "Una gema pequeña pero bien tallada."
    },
    {
      name: "Par de gemas pequeñas",
      type: "Gema",
      rarity: "Poco común",
      value: "20 po",
      description: "Dos gemas pequeñas envueltas cuidadosamente."
    }
  ],
  "2-4": [
    {
      name: "Bolsa de monedas de plata",
      type: "Monedas",
      rarity: "Común",
      value: "4d6 pe",
      description: "Un buen número de monedas de plata, algo desgastadas."
    },
    {
      name: "Bolsa de monedas de plata",
      type: "Monedas",
      rarity: "Común",
      value: "5d6 pe",
      description: "Varias monedas de plata cuidadosamente guardadas."
    },
    {
      name: "Bolsa de monedas de plata",
      type: "Monedas",
      rarity: "Común",
      value: "3d6 pe",
      description: "Plata suficiente para pagar suministros y alojamiento."
    },
    {
      name: "Bolsa de monedas de oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "3d6 po",
      description: "Un botín modesto de monedas de oro."
    },
    {
      name: "Bolsa de monedas de oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "5d6 po",
      description: "Una cantidad respetable de monedas de oro."
    },
    {
      name: "Bolsa de monedas de oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "6d6 po",
      description: "Un peso considerable de monedas de oro bien acuñadas."
    },
    {
      name: "Bolsa de monedas de platino",
      type: "Monedas",
      rarity: "Raro",
      value: "1d6 pp",
      description: "Monedas de platino, raras y muy valiosas."
    },
    {
      name: "Bolsa de monedas de platino",
      type: "Monedas",
      rarity: "Raro",
      value: "2d6 pp",
      description: "Un botín significativo de monedas de platino."
    },
    {
      name: "Bolsa de monedas de platino",
      type: "Monedas",
      rarity: "Raro",
      value: "3d6 pp",
      description: "Una fortuna en monedas de platino para aventureros experimentados."
    },
    {
      name: "Conjunto de gemas finas",
      type: "Gema",
      rarity: "Raro",
      value: "1d6 gemas (50 po)",
      description: "Varias gemas finamente talladas, cada una de gran valor."
    }
  ],
  "5-7": [ {
      name: "Alijo mixto de cobre y plata",
      type: "Monedas",
      rarity: "Común",
      value: "1d10x10 pc, 1d6x5 pe",
      description: "Un pequeño alijo de cobre y plata reunido de múltiples fuentes."
    },
    {
      name: "Alijo mixto de cobre y plata",
      type: "Monedas",
      rarity: "Común",
      value: "4d6x100 pc, 1d6x10 pe",
      description: "Grandes sacos de cobre acompañados de algo de plata."
    },
    {
      name: "Alijo mixto de plata y oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "1d8x50 pe, 6d6 po",
      description: "Una combinación valiosa de plata en cantidad y monedas de oro."
    },
    {
      name: "Alijo mixto de plata y oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "1d10x50 pe, 1d6x10 po",
      description: "Plata acumulada junto a una buena cantidad de oro."
    },
    {
      name: "Alijo mixto de plata y oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "6d6x10 pe, 2d6x10 po",
      description: "Monedas de plata y oro listas para comercio a gran escala."
    },
    {
      name: "Alijo mixto de plata y oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "1d6x10 pe, 1d6x10 po",
      description: "Un botín equilibrado de plata y oro."
    },
    {
      name: "Alijo de oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "2d8x10 po",
      description: "Una bolsa pesada llena de monedas de oro."
    },
    {
      name: "Alijo de oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "1d10x20 po",
      description: "Monedas de oro acumuladas por enemigos poderosos."
    },
    {
      name: "Alijo de oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "4d6x10 po",
      description: "Un botín considerable solo en oro."
    },
    {
      name: "Alijo de oro y platino",
      type: "Monedas",
      rarity: "Raro",
      value: "2d6x10 po, 1d10 pp",
      description: "Oro acompañado de valiosas monedas de platino."
    },
    {
      name: "Alijo de oro y platino",
      type: "Monedas",
      rarity: "Raro",
      value: "3d8x10 po, 1d6x2 pp",
      description: "Un botín significativo que incluye platino."
    },
    {
      name: "Alijo de oro y platino",
      type: "Monedas",
      rarity: "Raro",
      value: "2d6x10 po, 3d6 pp",
      description: "Una fortuna notable en oro y platino."
    },
    {
      name: "Alijo de oro y gemas",
      type: "Monedas y gemas",
      rarity: "Raro",
      value: "2d8x10 po, 1d4 gemas (50 po)",
      description: "Oro acompañado de gemas finamente talladas."
    },
    {
      name: "Tesoro con gemas finas",
      type: "Monedas y gemas",
      rarity: "Raro",
      value: "3d6x50 po, 3d4 gemas (50 po)",
      description: "Un tesoro impresionante con numerosas gemas valiosas."
    },
    {
      name: "Tesoro con gemas finas",
      type: "Monedas y gemas",
      rarity: "Raro",
      value: "3d6x10 po, 1d6 gemas (50 po)",
      description: "Oro acompañado de varias gemas bien protegidas."
    }],
  "8-11": [ {
      name: "Tesoro de oro y platino",
      type: "Monedas",
      rarity: "Raro",
      value: "3d6x10 po, 2d6 pp",
      description: "Un botín valioso que combina oro y platino."
    },
    {
      name: "Tesoro de oro y platino",
      type: "Monedas",
      rarity: "Raro",
      value: "3d6x10 po, 2d10 pp",
      description: "Oro acompañado de una cantidad considerable de platino."
    },
    {
      name: "Tesoro de oro y platino",
      type: "Monedas",
      rarity: "Raro",
      value: "3d6x12 po, 4d6 pp",
      description: "Un alijo muy valioso en monedas nobles."
    },
    {
      name: "Tesoro de oro y platino",
      type: "Monedas",
      rarity: "Raro",
      value: "4d6x10 po, 3d10 pp",
      description: "Una fortuna impresionante en oro y platino."
    },
    {
      name: "Alijo de oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "6d6x10 po",
      description: "Una gran cantidad de monedas de oro bien acuñadas."
    },
    {
      name: "Alijo de oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "8d6x10 po",
      description: "Sacos llenos de oro procedente de conquistas pasadas."
    },
    {
      name: "Alijo de oro",
      type: "Monedas",
      rarity: "Poco común",
      value: "7d8x10 po",
      description: "Un botín pesado compuesto únicamente de oro."
    },
    {
      name: "Tesoro mixto con gemas",
      type: "Monedas y gemas",
      rarity: "Raro",
      value: "5d6x10 po, 3d6 pp, 1d4 gemas (50 po)",
      description: "Oro, platino y gemas guardadas con sumo cuidado."
    },
    {
      name: "Tesoro de oro y platino",
      type: "Monedas",
      rarity: "Raro",
      value: "2d8x10 po, 1d4x10 pp",
      description: "Un alijo equilibrado de monedas de alto valor."
    },
    {
      name: "Tesoro de platino",
      type: "Monedas",
      rarity: "Muy raro",
      value: "1d8x10 pp",
      description: "Una enorme cantidad de monedas de platino."
    },
    {
      name: "Tesoro de platino",
      type: "Monedas",
      rarity: "Muy raro",
      value: "1d10x10 pp",
      description: "Una fortuna excepcional en platino."
    },
    {
      name: "Tesoro de platino",
      type: "Monedas",
      rarity: "Muy raro",
      value: "4d10 pp, 1d4 gemas (100 po)",
      description: "Platino acompañado de gemas finamente talladas."
    },
    {
      name: "Tesoro de platino y gemas",
      type: "Monedas y gemas",
      rarity: "Muy raro",
      value: "6d10 pp, 1d10 gemas (50 po)",
      description: "Un tesoro extraordinario digno de grandes héroes."
    },
    {
      name: "Tesoro de platino y gemas",
      type: "Monedas y gemas",
      rarity: "Muy raro",
      value: "6d10 pp, 1d8 gemas (100 po)",
      description: "Un alijo legendario protegido celosamente."
    },
    {
      name: "Tesoro legendario",
      type: "Monedas y gemas",
      rarity: "Legendario",
      value: "1d100 pp, 1d8 gemas (100 po)",
      description: "Una riqueza colosal reservada para enemigos formidables."
    }],
  "12+": [ {
      name: "Tesoro de oro y platino",
      type: "Monedas",
      rarity: "Muy raro",
      value: "4d6x12 po, 1d8x5 pp",
      description: "Un botín considerable en oro acompañado de platino."
    },
    {
      name: "Tesoro de plata y oro",
      type: "Monedas",
      rarity: "Raro",
      value: "4d6x100 pe, 1d6x100 po",
      description: "Enormes cantidades de plata junto a oro en abundancia."
    },
    {
      name: "Tesoro de plata y oro",
      type: "Monedas",
      rarity: "Raro",
      value: "4d8x100 pe, 1d6x100 po",
      description: "Un alijo masivo de metales preciosos."
    },
    {
      name: "Tesoro de plata y oro",
      type: "Monedas",
      rarity: "Raro",
      value: "4d10x100 pe, 1d8x100 po",
      description: "Un tesoro descomunal propio de grandes amenazas."
    },
    {
      name: "Tesoro con gemas finas",
      type: "Monedas y gemas",
      rarity: "Muy raro",
      value: "1d6x50 po, 1d6x5 pp, 1d4 gemas (50 po)",
      description: "Oro, platino y gemas de buena calidad."
    },
    {
      name: "Tesoro de plata y oro",
      type: "Monedas",
      rarity: "Raro",
      value: "1d6x100 pe, 1d6x100 po",
      description: "Un botín abundante en plata y oro."
    },
    {
      name: "Tesoro de plata y oro",
      type: "Monedas",
      rarity: "Raro",
      value: "1d8x100 pe, 1d8x100 po",
      description: "Grandes cofres llenos de riqueza metálica."
    },
    {
      name: "Tesoro de platino y oro",
      type: "Monedas",
      rarity: "Muy raro",
      value: "1d10x10 pp, 1d10x100 po",
      description: "Una fortuna extraordinaria en platino y oro."
    },
    {
      name: "Tesoro de oro y platino",
      type: "Monedas",
      rarity: "Muy raro",
      value: "2d4x100 po, 1d6x12 pp",
      description: "Un alijo cuidadosamente protegido de gran valor."
    },
    {
      name: "Tesoro de oro y platino",
      type: "Monedas",
      rarity: "Muy raro",
      value: "2d6x100 po, 1d6x10 pp",
      description: "Riqueza acumulada durante años de conquistas."
    },
    {
      name: "Tesoro de oro y platino",
      type: "Monedas",
      rarity: "Muy raro",
      value: "2d8x100 po, 1d4x10 pp",
      description: "Un botín masivo digno de un señor de la guerra."
    },
    {
      name: "Tesoro colosal",
      type: "Monedas",
      rarity: "Legendario",
      value: "1d20x100 po, 1d4x10 pp",
      description: "Una riqueza colosal reservada a enemigos épicos."
    },
    {
      name: "Tesoro legendario con gemas",
      type: "Monedas y gemas",
      rarity: "Legendario",
      value: "1d100 pp, 1d10 gemas (100 po)",
      description: "Un tesoro mítico prácticamente sin igual."
    },
    {
      name: "Tesoro de oro y platino",
      type: "Monedas",
      rarity: "Muy raro",
      value: "2d6x100 po, 2d6x10 pp",
      description: "Un botín enorme protegido celosamente."
    },
    {
      name: "Tesoro de platino y gemas",
      type: "Monedas y gemas",
      rarity: "Legendario",
      value: "1d12x10 pp, 2d8 gemas (100 po)",
      description: "Platino y gemas de gran pureza y valor."
    },
    {
      name: "Tesoro épico",
      type: "Monedas y gemas",
      rarity: "Legendario",
      value: "1d20x10 pp, 1d10 gemas (100 po)",
      description: "Un tesoro épico digno de leyendas."
    }
  ]
};

// ==========================================
//  TABLAS DE SERVICIOS / MERCADERES
// ==========================================

export const merchantPresenceTable = [
  { name: "Posada / Taberna", cd: { "Aldea": 10, "Poblado": 8, "Villa": 6, "Ciudad": 4, "Metrópolis": 2 } },
  { name: "Suministros para Aventureros", cd: { "Aldea": 17, "Poblado": 14, "Villa": 10, "Ciudad": 5, "Metrópolis": 2 } },
  { name: "Animales y Monturas", cd: { "Aldea": 12, "Poblado": 11, "Villa": 9, "Ciudad": 7, "Metrópolis": 5 } },
  { name: "Libros y Mapas", cd: { "Aldea": 18, "Poblado": 17, "Villa": 15, "Ciudad": 13, "Metrópolis": 11 } },
  { name: "Joyería y Gemas", cd: { "Aldea": 20, "Poblado": 19, "Villa": 18, "Ciudad": 16, "Metrópolis": 14 } },
  { name: "Armero", cd: { "Aldea": 18, "Poblado": 16, "Villa": 14, "Ciudad": 12, "Metrópolis": 10 } },
  { name: "Banco", cd: { "Aldea": 17, "Poblado": 15, "Villa": 13, "Ciudad": 10, "Metrópolis": 8 } },
  { name: "Tinkero / Platero Fino", cd: { "Aldea": 18, "Poblado": 17, "Villa": 15, "Ciudad": 13, "Metrópolis": 11 } },
  { name: "Sastre", cd: { "Aldea": 15, "Poblado": 13, "Villa": 11, "Ciudad": 10, "Metrópolis": 8 } },
  { name: "Pociones, venenos, hierbas", cd: { "Aldea": 18, "Poblado": 17, "Villa": 16, "Ciudad": 14, "Metrópolis": 12 } },
  { name: "Ídolos religiosos & Bendiciones", cd: { "Aldea": 16, "Poblado": 15, "Villa": 13, "Ciudad": 11, "Metrópolis": 9 } },
  { name: "Vendedor de comida & bebida", cd: { "Aldea": 14, "Poblado": 12, "Villa": 10, "Ciudad": 8, "Metrópolis": 6 } },
  { name: "Templo", cd: { "Aldea": 16, "Poblado": 14, "Villa": 12, "Ciudad": 10, "Metrópolis": 8 } },
  { name: "Tomos y pergaminos de hechizos", cd: { "Aldea": 20, "Poblado": 19, "Villa": 17, "Ciudad": 15, "Metrópolis": 13 } },
  { name: "Suministros para ladrones", cd: { "Aldea": 19, "Poblado": 18, "Villa": 16, "Ciudad": 14, "Metrópolis": 12 } },
  { name: "Tienda de Armas", cd: { "Aldea": 17, "Poblado": 15, "Villa": 13, "Ciudad": 11, "Metrópolis": 9 } },
  { name: "Vehículos y transporte", cd: { "Aldea": 15, "Poblado": 12, "Villa": 13, "Ciudad": 10, "Metrópolis": 8 } },
  { name: "Gremio de Aventureros", cd: { "Aldea": 19, "Poblado": 18, "Villa": 16, "Ciudad": 14, "Metrópolis": 12 } },
  { name: "Objetos Mágicos", cd: { "Aldea": 25, "Poblado": 22, "Villa": 19, "Ciudad": 16, "Metrópolis": 15 } },
  { name: "Herrero", cd: { "Aldea": 12, "Poblado": 10, "Villa": 8, "Ciudad": 6, "Metrópolis": 4 } },
  { name: "Nigromancia / Resurrección", cd: { "Aldea": 20, "Poblado": 19, "Villa": 18, "Ciudad": 17, "Metrópolis": 16 } },
  { name: "Mensajeros", cd: { "Aldea": 19, "Poblado": 18, "Villa": 17, "Ciudad": 15, "Metrópolis": 13 } },
  { name: "Burdel", cd: { "Aldea": 17, "Poblado": 15, "Villa": 13, "Ciudad": 11, "Metrópolis": 9 } },
  { name: "Venta de Tierras", cd: { "Aldea": 16, "Poblado": 15, "Villa": 13, "Ciudad": 10, "Metrópolis": 8 } },
  { name: "Carpintero / Tonelero", cd: { "Aldea": 15, "Poblado": 13, "Villa": 10, "Ciudad": 8, "Metrópolis": 6 } },
  { name: "Gremio de Entretenedores", cd: { "Aldea": 20, "Poblado": 18, "Villa": 16, "Ciudad": 13, "Metrópolis": 11 } },
  { name: "Sanador / Médico", cd: { "Aldea": 18, "Poblado": 15, "Villa": 12, "Ciudad": 10, "Metrópolis": 7 } },
  { name: "Contratos de Envío / Barcos", cd: { "Aldea": 19, "Poblado": 18, "Villa": 16, "Ciudad": 14, "Metrópolis": 12 } },
  { name: "Sindicato de Trabajadores", cd: { "Aldea": 19, "Poblado": 18, "Villa": 16, "Ciudad": 11, "Metrópolis": 9 } },
  { name: "Piedrero", cd: { "Aldea": 18, "Poblado": 15, "Villa": 12, "Ciudad": 10, "Metrópolis": 7 } },
  { name: "Universidad", cd: { "Aldea": 99, "Poblado": 99, "Villa": 18, "Ciudad": 16, "Metrópolis": 14 } }, // 99 imposible
  { name: "Mercenarios", cd: { "Aldea": 19, "Poblado": 18, "Villa": 17, "Ciudad": 16, "Metrópolis": 14 } }
];

export const merchantQualityRanges = {
  "Aldea": [ { max: 7, q: "Atroz" }, { max: 11, q: "Pobre" }, { max: 15, q: "Media" }, { max: 18, q: "Buena" }, { max: 20, q: "Excelente" } ],
  "Poblado": [ { max: 5, q: "Atroz" }, { max: 9, q: "Pobre" }, { max: 13, q: "Media" }, { max: 17, q: "Buena" }, { max: 20, q: "Excelente" } ],
  "Villa": [ { max: 4, q: "Atroz" }, { max: 8, q: "Pobre" }, { max: 12, q: "Media" }, { max: 16, q: "Buena" }, { max: 20, q: "Excelente" } ],
  "Ciudad": [ { max: 3, q: "Atroz" }, { max: 7, q: "Pobre" }, { max: 11, q: "Media" }, { max: 15, q: "Buena" }, { max: 20, q: "Excelente" } ],
  "Metrópolis": [ { max: 2, q: "Atroz" }, { max: 5, q: "Pobre" }, { max: 12, q: "Media" }, { max: 17, q: "Buena" }, { max: 20, q: "Excelente" } ]
};

export const itemFindingDC = {
  "Atroz": { "Común": 14, "Poco Común": 18, "Raro": 20, "Legendario": "-" },
  "Pobre": { "Común": 12, "Poco Común": 17, "Raro": 19, "Legendario": "-" },
  "Media": { "Común": 10, "Poco Común": 15, "Raro": 18, "Legendario": 20 },
  "Buena": { "Común": 8, "Poco Común": 13, "Raro": 17, "Legendario": 19 },
  "Excelente": { "Común": 6, "Poco Común": 12, "Raro": 16, "Legendario": 18 }
};
