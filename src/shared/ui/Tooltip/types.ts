export type TooltipType = TooltipDefaultType | TooltipTalentType;

type TooltipDefaultType = {
  type: 'default',
  title: string,
};

type TooltipTalentType = {
  type: 'talent',
  title: string,
  description: string,
  rank: number,
};

export type TooltipCoordsType = {
  x: number,
  y: number,
};
