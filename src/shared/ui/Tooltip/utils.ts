import { RefObject } from 'react';
import { TooltipCoordsType } from './types';

export const getTooltipCoords = (
  targetCoords: TooltipCoordsType,
  ref: RefObject<HTMLElement>,
) => {
  const DEFAULT_MARGIN = 10;

  const { x } = targetCoords;
  let { y } = targetCoords;

  if (ref.current) {
    const { height: tooltipHeight } = ref.current.getBoundingClientRect();
    const { innerHeight: windowHeight } = window;

    y -= tooltipHeight;

    // Overflow logic
    if (y + tooltipHeight > windowHeight) {
      y = windowHeight - tooltipHeight - DEFAULT_MARGIN;
    } else if (y < DEFAULT_MARGIN) {
      y = DEFAULT_MARGIN;
    }
  }

  return {
    x,
    y,
  };
};
