import { AbilityCastDurationType } from 'shared/constants/talentsData';

export const getTooltipCoords = (target: HTMLElement) => {
  const targetRect = target.getBoundingClientRect();
  return {
    x: targetRect.left + targetRect.width + 5,
    y: targetRect.top + 1,
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
