import { checkIsTierAvailable } from 'features/talent-calc/lib/utils';
import { TalentTierType } from 'shared/constants/talentsData';

interface UseTalentPermissionsArgs {
  tier: TalentTierType,
  value: number
  max: number
  isAvailable: boolean
  deepestTierWithValue: TalentTierType
  getPreviousTotal: (tier: TalentTierType | number) => number,
}

export const useTalentPermissions = ({
  tier,
  value,
  max,
  isAvailable,
  deepestTierWithValue,
  getPreviousTotal,
}: UseTalentPermissionsArgs) => {
  const preDeepestTierTotal = getPreviousTotal(deepestTierWithValue);

  const willNextTierBeAvailable = checkIsTierAvailable(
    deepestTierWithValue,
    preDeepestTierTotal - 1,
  );

  const canDecrease = Boolean(
    isAvailable && (
      willNextTierBeAvailable || tier === deepestTierWithValue
    ) && value > 0,
  );
  const canIncrease = isAvailable && value < max;

  return {
    canIncrease,
    canDecrease,
  };
};
