import { specs, CharacterClassType, TALENTS_TO_NEXT_TIER } from 'shared/constants/global';
import { CharacterTalentIdType } from 'shared/constants/talents';
import { TalentTierType, TalentType } from 'shared/constants/talentsData';
import { numberToArray } from 'shared/lib/transform';
import { TalentsDataReturn, TalentsDataType } from './transform';

export const getTreeTotal = (
  data: TalentsDataType,
) => Object
  .values(data)
  .reduce((acc, cur) => acc + cur, 0);

export const getTierTotal = (
  tier: TalentTierType | number,
  template: TalentType[],
  data: TalentsDataType,
): number => {
  const tierTalentKeys = template.reduce((acc: CharacterTalentIdType[], cur) => {
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

export const getPreviousTiersTotal = (
  tier: TalentTierType | number,
  template: TalentType[],
  data: TalentsDataType,
) => numberToArray(tier - 1)
  .reduce((acc, cur) => getTierTotal(cur, template, data) + acc, 0);

export const checkIsTalentsDataRefreshed = (
  characterClass: CharacterClassType | null,
  talentsData: TalentsDataReturn,
): boolean => {
  if (!characterClass) {
    return false;
  }
  const currentDataKeys = Object.keys(talentsData);

  return currentDataKeys.every(
    (key: any) => specs[characterClass].includes(key),
  );
};

export const getDeepestTierWithValue = (
  template: TalentType[],
  data: TalentsDataType,
): TalentTierType => {
  const talentKeys = Object.keys(data) as CharacterTalentIdType[];
  const talentKeysWithValue = talentKeys.filter((key) => Boolean(data[key]));

  const talentsWithValue = template
    .filter(({ id }) => talentKeysWithValue.includes(id));

  return talentsWithValue.sort((a, b) => b.tier - a.tier)[0]?.tier || 0;
};

export const checkCanDecreaseByPreviousTiersTotal = (
  deepestTier: number,
  previousTiersTotal: number,
): boolean => previousTiersTotal <= deepestTier * TALENTS_TO_NEXT_TIER;

export const checkIsTierAvailable = (
  total: number,
  tierTotal: number,
  tier: TalentTierType,
) => total - tierTotal >= (tier - 1) * TALENTS_TO_NEXT_TIER;
