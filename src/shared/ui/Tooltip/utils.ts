import { RefObject } from 'react';
import { TooltipCoordsType } from './types';

export const getTooltipCoords = (
  targetCoords: TooltipCoordsType,
  ref: RefObject<HTMLElement>,
) => {
  const DEFAULT_MARGIN = 10;

  const { left } = targetCoords;
  let { bottom } = targetCoords;

  if (ref.current) {
    const { height: tooltipHeight } = ref.current.getBoundingClientRect();
    const { innerHeight: windowHeight } = window;

    // Overflow logic
    if (bottom + tooltipHeight > windowHeight) {
      bottom = windowHeight - tooltipHeight - DEFAULT_MARGIN;
    } else if (bottom < DEFAULT_MARGIN) {
      bottom = DEFAULT_MARGIN;
    }
  }

  return {
    left,
    bottom,
  };
};
