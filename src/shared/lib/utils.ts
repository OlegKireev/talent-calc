export const getTooltipCoords = (target: HTMLElement) => {
  const targetRect = target.getBoundingClientRect();
  return {
    x: targetRect.left + targetRect.width,
    y: targetRect.top - 5,
  };
};
