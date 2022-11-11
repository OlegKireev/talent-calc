import { TalentDescriptionType } from 'shared/constants/talentsData';

export type TooltipType = TooltipDefaultType | TooltipTalentType;

type TooltipDefaultType = {
  type: 'default',
  title: string,
};

type TooltipTalentType = {
  type: 'talent',
  title: string,
  description: TalentDescriptionType,
  rank: number,
  canIncrease: boolean,
  canDecrease: boolean,
};

export type TooltipCoordsType = {
  x: number,
  y: number,
};
