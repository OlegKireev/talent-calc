import type {
  AbilityCastDurationType,
  AbilityCooldownType,
  AbilityCostsType,
  AbilityRangeType,
  TalentDescriptionType,
} from 'shared/constants/talentsData';

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
  cooldown?: AbilityCooldownType,
  castDuration?: AbilityCastDurationType,
  range?: AbilityRangeType,
  costs?: AbilityCostsType,
  canIncrease: boolean,
  canDecrease: boolean,
  errors: TooltipErrorsType,
};

export type TooltipCoordsType = {
  x: number,
  y: number,
};

export type TooltipErrorsType = {
  isDisabledByTotal: string,
  isDisabledByParent: string,
};
