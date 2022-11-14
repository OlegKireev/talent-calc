import { CharacterClassType, type CharacterSpecializationType } from 'shared/constants/global';
import { type CharacterTalentIdType } from 'shared/constants/talents';
import { TalentsType, type TaletsOfClassType } from 'shared/constants/talentsData';

export const generateTalentsState = (
  talents: TaletsOfClassType[],
  stateFromParams?: string,
): CreateTaletsStateReturn => {
  const states = stateFromParams?.split('-') || [];
  return talents.reduce((acc, cur, specIndex) => {
    const state = states[specIndex];
    return {
      ...acc,
      [cur.title]: cur.talents
        .sort((a, b) => a.tier - b.tier)
        .reduce((innerAcc, innerCur, talentIndex) => ({
          ...innerAcc,
          [innerCur.id]: state ? Number(state[talentIndex]) : 0,
        }), {}),
    };
  }, {});
};

export type TalentsStateType = { [key in CharacterTalentIdType]?: number };
export type CreateTaletsStateReturn = {
  [key in CharacterSpecializationType]?: TalentsStateType
};

// TODO: add tests
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
