export const getTooltipCoords = (target: HTMLElement) => {
  const targetRect = target.getBoundingClientRect();
  return {
    x: targetRect.left + targetRect.width + 5,
    y: targetRect.top + 1,
  };
};
