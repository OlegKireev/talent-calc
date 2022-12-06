import { AbilityCastDurationType } from 'shared/constants/talentsData';

export const getTargetCoords = (target: HTMLElement) => {
  const { top, left, width } = target.getBoundingClientRect();
  return {
    x: left + width,
    y: top,
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
