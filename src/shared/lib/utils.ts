export const getTooltipCoords = (target: HTMLElement) => {
  const targetRect = target.getBoundingClientRect();
  return {
    x: targetRect.left + 50,
    y: targetRect.top,
  };
};
