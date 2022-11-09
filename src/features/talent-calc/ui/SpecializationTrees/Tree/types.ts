import { TalentTierType } from 'shared/constants/talentsData';

export type GetPreviousTotal = (prevTier: TalentTierType | number) => number;
