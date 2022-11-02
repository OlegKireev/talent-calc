export const characterClasses = [
  'deathknight',
  'druid',
  'hunter',
  'mage',
  'paladin',
  'priest',
  'rogue',
  'shaman',
  'warlock',
  'warrior',
] as const;
export type CharacterClassType = typeof characterClasses[number];

export const characteSpecs = [
  'blood', 'frost', 'unholy', 'balance', 'feral', 'restoration', 'beast_mastery', 'marksmanship', 'survival', 'arcane', 'fire', 'frost', 'holy', 'protection', 'retribution', 'discipline', 'holy', 'shadow', 'assasination', 'combat', 'subtlety', 'elemental', 'enhancement', 'restoration', 'affliction', 'demonology', 'destruction', 'arms', 'fury', 'protection',
] as const;
export type CharacterSpecsType = typeof characteSpecs[number];

export const specs: {
  [key in CharacterClassType]: [CharacterSpecsType, CharacterSpecsType, CharacterSpecsType]
} = {
  deathknight: ['blood', 'frost', 'unholy'],
  druid: ['balance', 'feral', 'restoration'],
  hunter: ['beast_mastery', 'marksmanship', 'survival'],
  mage: ['arcane', 'fire', 'frost'],
  paladin: ['holy', 'protection', 'retribution'],
  priest: ['discipline', 'holy', 'shadow'],
  rogue: ['assasination', 'combat', 'subtlety'],
  shaman: ['elemental', 'enhancement', 'restoration'],
  warlock: ['affliction', 'demonology', 'destruction'],
  warrior: ['arms', 'fury', 'protection'],
};
