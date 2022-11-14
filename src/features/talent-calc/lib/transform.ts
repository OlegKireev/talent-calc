import { CharacterClassType, type CharacterSpecializationType } from 'shared/constants/global';
import { type CharacterTalentIdType } from 'shared/constants/talents';
import { TalentsType, type TaletsOfClassType } from 'shared/constants/talentsData';

const SPEC_SEPARATOR = '-';

export const generateTalentsState = (
  talents: TaletsOfClassType[],
  stateFromParams?: string,
): CreateTaletsStateReturn => {
  const DEFAULT_VALUE = 0;
  const states = stateFromParams?.split(SPEC_SEPARATOR) || [];
  return talents.reduce((acc, cur, specIndex) => {
    const state = states[specIndex];
    return {
      ...acc,
      [cur.title]: cur.talents
        .sort((a, b) => a.tier - b.tier)
        .reduce((innerAcc, innerCur, talentIndex) => ({
          ...innerAcc,
          [innerCur.id]: state ? Number(state[talentIndex]) || DEFAULT_VALUE : DEFAULT_VALUE,
        }), {}),
    };
  }, {});
};

export type TalentsStateType = { [key in CharacterTalentIdType]?: number };
export type CreateTaletsStateReturn = {
  [key in CharacterSpecializationType]?: TalentsStateType
};

export const generateAllTalentsMap = (talents: TalentsType) => {
  const classes = Object.keys(talents) as CharacterClassType[];

  return classes
    .map((characterClass) => talents[characterClass])
    .flat()
    .map((t) => t.talents)
    .flat()
    .reduce((acc, cur) => ({
      ...acc,
      [cur.id]: cur,
    }), {});
};

export const generateStateString = (state: CreateTaletsStateReturn) => {
  const specs = Object.keys(state) as CharacterSpecializationType[];
  const statesBySpec = specs.map((spec) => state[spec]);

  const classTalentsString = statesBySpec
    .reduce(
      (acc, specState, i) => {
        const specString = Object
          .values(specState || [])
          .join('')
          .replace(/0*$/, '');
        return `${acc}${i ? SPEC_SEPARATOR : ''}${specString}`;
      },
      '',
    );

  return classTalentsString === `${SPEC_SEPARATOR}${SPEC_SEPARATOR}`
    ? ''
    : classTalentsString;
};
