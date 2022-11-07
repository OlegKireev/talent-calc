import { checkCanDecreaseByPreviousTiersTotal, checkWillCurrentTierAvailble, checkWillNextTierAvailable } from 'features/talent-calc/lib/utils';
import { TalentTierType } from 'shared/constants/talentsData';

interface UseTalentPermissionsArgs {
  tier: number | TalentTierType,
  tierTotal: number
  value: number
  max: number
  isTierAvailable: boolean
  deepestTierWithValue: TalentTierType | number
  previousTiersTotal: number,
  getPreviousTotal: (tier: TalentTierType | number) => number,
}

export const useTalentPermissions = ({
  tier,
  value,
  max,
  tierTotal,
  isTierAvailable,
  deepestTierWithValue,
  previousTiersTotal,
  getPreviousTotal,
}: UseTalentPermissionsArgs) => {
  const canDecreaseByPreviousTierTotal = checkCanDecreaseByPreviousTiersTotal(
    deepestTierWithValue,
    previousTiersTotal,
  );
  const preDeepestTierTotal = getPreviousTotal(deepestTierWithValue);

  const willNextTierAvailable = checkWillNextTierAvailable(
    preDeepestTierTotal,
    deepestTierWithValue,
  );
  const willCurrentTierAvailble = checkWillCurrentTierAvailble(previousTiersTotal, tierTotal, tier);

  const canDecrease = Boolean(
    isTierAvailable && (
      (canDecreaseByPreviousTierTotal && willNextTierAvailable && willCurrentTierAvailble)
      || tier === deepestTierWithValue)
    && value > 0,
  );
  const canIncrease = isTierAvailable && value < max;

  return {
    canIncrease,
    canDecrease,
  };
};
