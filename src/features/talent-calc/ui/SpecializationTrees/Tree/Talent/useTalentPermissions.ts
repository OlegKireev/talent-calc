import { checkIsTierAvailable } from 'features/talent-calc/lib/utils';
import { TalentTierType } from 'shared/constants/talentsData';

interface UseTalentPermissionsArgs {
  tier: TalentTierType,
  value: number
  max: number
  deepestTierWithValue: TalentTierType
  includeTierTotal: number
  isAvailable: boolean
  isChildrenTalentsEmpty: boolean
  getPreviousTotal: (tier: TalentTierType | number) => number,
}

export const useTalentPermissions = ({
  tier,
  value,
  max,
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
  const canIncrease = isAvailable && value < max;

  return {
    canIncrease,
    canDecrease,
  };
};
