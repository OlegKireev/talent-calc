import { CharacterTalentId } from 'shared/constants/talents';
import { TaletsOfClassType } from 'shared/constants/talentsData';

export const createTalentsState = (
  obj: TaletsOfClassType[],
): TalentsDataReturn => obj.reduce((acc, cur) => ({
  ...acc,
  [cur.title]: cur.talents.reduce((innerAcc, innerCur) => ({
    ...innerAcc,
    [innerCur.id]: 0,
  }), {}),
}), {});

export type TalentsDataType = { [key in CharacterTalentId]?: number };
export type TalentsDataReturn = {
  [key: string]: TalentsDataType
};
