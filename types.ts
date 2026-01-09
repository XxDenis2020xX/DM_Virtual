
export enum LogType {
  STORY = 'STORY',
  DICE = 'DICE',
  NPC = 'NPC',
  QUEST = 'QUEST',
  ORACLE = 'ORACLE',
  CITY = 'CITY',
  ENCOUNTER = 'ENCOUNTER',
  LOOT = 'LOOT',
  DUNGEON = 'DUNGEON',
  SERVICES = 'SERVICES',
  ERROR = 'ERROR'
}
export type NarrativeEncounter = string | (() => string);

export interface LogEntry {
  id: string;
  type: LogType;
  content: string;
  timestamp: Date;
  metadata?: any;
}

export interface Stats {
  str: number; dex: number; con: number;
  int: number; wis: number; cha: number;
  hp: number; ac: number;
}

export interface NPC {
  name: string;
  race: string;
  classOrOccupation: string;
  trait: string;
  motivation: string;
  hook: string;
  stats: Stats;
}

export interface Quest {
  title: string;
  objective: string;
  reward: string;
  twist: string;
  source: string;
}

export interface City {
  name: string;
  type: string;
  atmosphere: string;
  notablePlace: string;
  rumor: string;
  population: number;
  density: string;
  timeOfDay: string;
}

export interface Creature {
  
  name: string;
  type: string;
  stats: Stats;
  actions: { name: string, desc: string }[];
  description: string;
}

export interface LootItem {
  name: string;
  type: string;
  rarity: string;
  value: string;
  description: string;
}

export interface DungeonMetadata {
  type: string;
  size: string;
  roomCount: string;
  activity: string;
  rollsPerHour: number;
  level: number;
}

export interface MerchantService {
  name: string;
  exists: boolean;
  quality?: string;
  itemCDs?: Record<string, number | string>;
}

export type OracleProbability = 'Muy Improbable' | 'Poco Probable' | 'Equilibrado' | 'Probable' | 'Muy Probable';

export type DieType = 4 | 6 | 8 | 10 | 12 | 20 | 100;
