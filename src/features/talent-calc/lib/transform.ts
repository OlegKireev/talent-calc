import { TaletsOfClassType } from 'shared/constants/talentsData';

export const createTalentsState = (obj: TaletsOfClassType[]) => obj.reduce((acc, cur) => ({
  ...acc,
  [cur.title]: cur.talents.reduce((innerAcc, innerCur) => ({
    ...innerAcc,
    [innerCur.id]: 0,
  }), {}),
}), {});
