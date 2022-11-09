import type { TalentColumnType, TalentTierType } from 'shared/constants/talentsData';
import { type CharacterSpecializationType } from 'shared/constants/global';
import { type CharacterTalentIdType } from 'shared/constants/talents';

export type ArrowPositionType = {
  tier: TalentTierType,
  column: TalentColumnType,
};

export type HandleTalentChange = (args: {
  specialization: CharacterSpecializationType,
  id: CharacterTalentIdType,
  value: number,
}) => void;
