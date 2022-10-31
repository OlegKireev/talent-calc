export const characterClasses = [
  'warrior',
  'hunter',
  'rogue',
  'mage',
  'warlock',
  'paladin',
  'shaman',
  'deathknight',
  'priest',
  'druid',
] as const;
export type CharacterClassUnion = typeof characterClasses[number];
