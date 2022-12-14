import { ReactNode } from 'react';
import type {
  AbilityCastDurationType,
  AbilityCooldownType,
  AbilityCostsType,
  AbilityRangeType,
  TalentDescriptionType,
} from 'shared/constants/talentsData';

export type TooltipType = TooltipDefaultType | TooltipTalentType;

type TooltipBaseType = {
  type: 'default' | 'talent',
  isOpen: boolean;
  title?: ReactNode,
};

type TooltipDefaultType = TooltipBaseType & {
  type: 'default',
};

type TooltipTalentType = TooltipBaseType & {
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
  shouldDisplayNextRank: boolean,
  errors: TooltipErrorsType,
};

export type TooltipCoordsType = {
  left: number,
  bottom: number,
};

export type TooltipErrorsType = {
  isDisabledByTotal: string,
  isDisabledByParent: string,
};
