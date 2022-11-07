import { CharacterTalentIdType } from './talents';
import { CharacterClassType, CharacterSpecializationType } from './global';

export type TalentTierType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type TalentColumnType = 1 | 2 | 3 | 4;
export type TalentMaxValueType = 1 | 2 | 3 | 4 | 5;
export type TalentDescription = {
  1: string,
  2?: string,
  3?: string,
  4?: string,
  5?: string,
};
export type AbilityCastDuration = number | 'instant' | 'chanelled';
export type AbilityCooldown = number;
export type AbilityCosts = string;
export type AbilityRange = number;

export type TalentType = {
  title: string,
  id: CharacterTalentIdType,
  // TODO: make dependence of 'max'
  description: TalentDescription,
  icon: string,
  tier: TalentTierType,
  column: TalentColumnType,
  max: TalentMaxValueType,
  castDuration?: AbilityCastDuration,
  cooldown?: AbilityCooldown,
  costs?: AbilityCosts,
  range?: AbilityRange,
};

export type TaletsOfClassType = {
  title: CharacterSpecializationType,
  backgroundImage: string,
  talents: TalentType[]
};

export type TalentsType = {
  [key in CharacterClassType]: TaletsOfClassType[]
};
