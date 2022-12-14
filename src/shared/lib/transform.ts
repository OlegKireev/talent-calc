export const numberToArray = (
  number: number,
) => new Array(Math.max(number, 0))
  .fill(0)
  .map((_, i) => i + 1);

export const snakeCaseToString = (string: string) => string.replaceAll('_', ' ');
