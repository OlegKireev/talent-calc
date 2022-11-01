import { CharacterTalentId } from 'shared/constants/talents';
import { TalentTierType, TalentType } from 'shared/constants/talentsData';
import { TalentsDataType } from './transform';

export const getTierTotal = (
  tier: TalentTierType,
  talents: TalentType[],
  data: TalentsDataType,
) => {
  const tierTalentKeys = talents.reduce((acc: CharacterTalentId[], cur) => {
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
