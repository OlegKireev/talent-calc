import { specs, CharacterClassType, TALENTS_TO_NEXT_TIER } from 'shared/constants/global';
import { CharacterTalentIdType } from 'shared/constants/talents';
import { TalentTierType, TalentType } from 'shared/constants/talentsData';
import { numberToArray } from 'shared/lib/transform';
import { CreateTaletsStateReturn, TalentsStateType } from './transform';

export const getTotalToUnblockNextTier = (
  tier: TalentTierType | number,
) => Math.max(tier, 0) * TALENTS_TO_NEXT_TIER;

export const getTreeTotal = (
  state: TalentsStateType,
) => Object
  .values(state)
  .reduce((acc, cur) => acc + cur, 0);

export const getTierTotal = (
  tier: TalentTierType | number,
  talents: TalentType[],
  state: TalentsStateType,
): number => {
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
    if (tierTalentKeys.includes(key) && Object.hasOwn(state, key)) {
      return acc + (state?.[key] || 0);
    }
    return acc;
  }, 0);
};

export const getPreviousTiersTotal = (
  tier: TalentTierType | number,
  talents: TalentType[],
  state: TalentsStateType,
) => numberToArray(tier - 1)
  .reduce((acc, cur) => getTierTotal(cur, talents, state) + acc, 0);

export const checkIsTalentsDataRefreshed = (
  characterClass: CharacterClassType | null,
  talentsData: CreateTaletsStateReturn,
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
  talents: TalentType[],
  state: TalentsStateType,
): TalentTierType => {
  const talentKeys = Object.keys(state) as CharacterTalentIdType[];
  const talentKeysWithValue = talentKeys.filter((key) => Boolean(state[key]));

  const talentsWithValue = talents
    .filter(({ id }) => talentKeysWithValue.includes(id));

  return talentsWithValue.sort((a, b) => b.tier - a.tier)[0]?.tier || 0;
};

export const checkIsTierAvailable = (
  tier: TalentTierType,
  previousTiersTotal: number,
) => previousTiersTotal >= getTotalToUnblockNextTier(tier - 1);
