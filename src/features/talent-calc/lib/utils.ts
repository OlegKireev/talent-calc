import { specs, CharacterClassType } from 'shared/constants/global';
import { CharacterTalentIdType } from 'shared/constants/talents';
import { TalentTierType, TalentType } from 'shared/constants/talentsData';
import { TalentsDataReturn, TalentsDataType } from './transform';

export const getTierTotal = (
  tier: TalentTierType,
  talents: TalentType[],
  data: TalentsDataType,
) => {
  const tierTalentKeys = talents.reduce((acc: CharacterTalentIdType[], cur) => {
    if (cur.tier === tier) {
      return [...acc, cur.id];
    }
    return acc;
  }, []);
  return tierTalentKeys.reduce((
    acc,
    key,
  ) => {
    if (tierTalentKeys.includes(key) && Object.hasOwn(data, key)) {
      return acc + (data?.[key] || 0);
    }
    return acc;
  }, 0);
};

export const checkIsTalentsDataRefreshed = (
  characterClass: CharacterClassType | null,
  talentsData: TalentsDataReturn,
) => {
  if (!characterClass) {
    return false;
  }
  const currentDataKeys = Object.keys(talentsData);

  return currentDataKeys.every(
    (key: any) => specs[characterClass].includes(key),
  );
};
