export const characterClasses = [
  'warrion',
  'hunter',
  'rogue',
  'mage',
  'warlock',
  'paladin',
  'shaman',
  'death knight',
  'priest',
  'druid',
] as const;
export type CharacterClassUnion = typeof characterClasses[number];
