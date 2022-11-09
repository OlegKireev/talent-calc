import { type CharacterTalentIdType } from './talents';
import type { CharacterClassType, CharacterSpecializationType } from './global';

export type TalentTierType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type TalentColumnType = 1 | 2 | 3 | 4;
export type TalentMaxValueType = 1 | 2 | 3 | 4 | 5;
export type TalentDescriptionType = {
  1: string,
  2?: string,
  3?: string,
  4?: string,
  5?: string,
};
export type AbilityCastDurationType = number | 'instant' | 'chanelled';
export type AbilityCooldownType = number;
export type AbilityCostsType = string;
export type AbilityRangeType = number;

export type TalentType = {
  title: string,
  id: CharacterTalentIdType,
  // TODO: make dependence of 'max'
  description: TalentDescriptionType,
  icon: string,
  tier: TalentTierType,
  column: TalentColumnType,
  max: TalentMaxValueType,
  castDuration?: AbilityCastDurationType,
  cooldown?: AbilityCooldownType,
  costs?: AbilityCostsType,
  range?: AbilityRangeType,
  required?: CharacterTalentIdType,
};

export type TaletsOfClassType = {
  title: CharacterSpecializationType,
  backgroundImage: string,
  talents: TalentType[]
};

export type TalentsType = {
  [key in CharacterClassType]: TaletsOfClassType[]
};
