import { checkIsTierAvailable } from 'features/talent-calc/lib/utils';
import { MAX_TALENTS_POINTS } from 'shared/constants/global';
import { type TalentTierType } from 'shared/constants/talentsData';
import { type GetPreviousTotal } from '../types';

interface UseTalentPermissionsArgs {
  tier: TalentTierType
  value: number
  max: number
  total: number
  deepestTierWithValue: TalentTierType
  includeTierTotal: number
  isAvailable: boolean
  isChildrenTalentsEmpty: boolean
  getPreviousTotal: GetPreviousTotal
}

export const useTalentPermissions = ({
  tier,
  value,
  max,
  total,
  deepestTierWithValue,
  includeTierTotal,
  isAvailable,
  isChildrenTalentsEmpty,
  getPreviousTotal,
}: UseTalentPermissionsArgs) => {
  const preDeepestTierTotal = getPreviousTotal(deepestTierWithValue);

  const willCurrentTierBeAvailable = checkIsTierAvailable(
    tier + 1 as TalentTierType,
    includeTierTotal - 1,
  );

  const willNextTierBeAvailable = checkIsTierAvailable(
    deepestTierWithValue,
    preDeepestTierTotal - 1,
  );

  const canDecrease = Boolean(
    isAvailable
      && isChildrenTalentsEmpty
      && ((willNextTierBeAvailable && willCurrentTierBeAvailable) || tier === deepestTierWithValue)
      && value > 0,
  );
  const canIncrease = isAvailable && value < max && total < MAX_TALENTS_POINTS;

  return {
    canIncrease,
    canDecrease,
  };
};
