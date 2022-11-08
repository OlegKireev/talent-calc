import { checkIsTierAvailable } from 'features/talent-calc/lib/utils';
import { TalentTierType } from 'shared/constants/talentsData';

interface UseTalentPermissionsArgs {
  tier: TalentTierType,
  value: number
  max: number
  isTierAvailable: boolean
  deepestTierWithValue: TalentTierType
  getPreviousTotal: (tier: TalentTierType | number) => number,
}

export const useTalentPermissions = ({
  tier,
  value,
  max,
  isTierAvailable,
  deepestTierWithValue,
  getPreviousTotal,
}: UseTalentPermissionsArgs) => {
  const preDeepestTierTotal = getPreviousTotal(deepestTierWithValue);

  const willNextTierBeAvailable = checkIsTierAvailable(
    deepestTierWithValue,
    preDeepestTierTotal - 1,
  );

  const canDecrease = Boolean(
    isTierAvailable && (
      willNextTierBeAvailable || tier === deepestTierWithValue)
    && value > 0,
  );
  const canIncrease = isTierAvailable && value < max;

  return {
    canIncrease,
    canDecrease,
  };
};
