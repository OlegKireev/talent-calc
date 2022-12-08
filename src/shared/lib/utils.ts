import { AbilityCastDurationType } from 'shared/constants/talentsData';
import { TooltipCoordsType } from 'shared/ui/Tooltip/types';

export const getTargetCoords = (target: HTMLElement): TooltipCoordsType => {
  const { top, left, width } = target.getBoundingClientRect();

  return {
    left: left + width,
    bottom: window.innerHeight - top,
  };
};

export const getDuration = (duration: AbilityCastDurationType): string => {
  if (typeof duration === 'string') {
    return duration;
  }
  if (duration === 0) {
    return 'instant';
  }

  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  if (seconds && minutes) {
    return `${minutes} min ${seconds} sec`;
  }
  if (seconds && !minutes) {
    return `${seconds} sec`;
  }

  return `${minutes} min`;
};
