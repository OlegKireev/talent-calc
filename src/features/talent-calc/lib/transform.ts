import { type CharacterSpecializationType } from 'shared/constants/global';
import { type CharacterTalentIdType } from 'shared/constants/talents';
import { type TaletsOfClassType } from 'shared/constants/talentsData';

export const createTalentsState = (
  obj: TaletsOfClassType[],
): CreateTaletsStateReturn => obj.reduce((acc, cur) => ({
  ...acc,
  [cur.title]: cur.talents.reduce((innerAcc, innerCur) => ({
    ...innerAcc,
    [innerCur.id]: 0,
  }), {}),
}), {});

export type TalentsStateType = { [key in CharacterTalentIdType]?: number };
export type CreateTaletsStateReturn = {
  [key in CharacterSpecializationType]?: TalentsStateType
};
