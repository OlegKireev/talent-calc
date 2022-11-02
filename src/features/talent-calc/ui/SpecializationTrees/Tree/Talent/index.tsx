import { MouseEvent } from 'react';
import { HandleTalentChangeArgs } from 'features/talent-calc';
import { checkCanDecrease } from 'features/talent-calc/lib/utils';
import { CharacterSpecializationType } from 'shared/constants/global';
import { CharacterTalentIdType } from 'shared/constants/talents';
import { TalentDescription, TalentMaxValueType, TalentTierType } from 'shared/constants/talentsData';
import { AbilityButton } from 'shared/ui/AbilityButton';

export interface TalentProps {
  title: string;
  icon: string
  id: CharacterTalentIdType
  value?: number
  max: TalentMaxValueType
  specialization: CharacterSpecializationType
  tier: TalentTierType
  description: TalentDescription
  deepestTierWithValue: number
  total: number
  isAvailable: boolean
  onChange: (args: HandleTalentChangeArgs) => void
}

export const Talent = ({
  title,
  icon,
  id,
  value = 0,
  max,
  specialization,
  tier,
  deepestTierWithValue,
  total,
  isAvailable,
  onChange,
}: TalentProps) => {
  const handleClick = () => {
    if (isAvailable && value < max) {
      onChange({
        specialization,
        id,
        value: value + 1,
      });
    }
  };
  const handleRightClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const canDecrease = checkCanDecrease(deepestTierWithValue, total, tier);

    if (isAvailable && canDecrease && value > 0) {
      onChange({
        specialization,
        id,
        value: value - 1,
      });
    }
  };
  return (
    <AbilityButton
      background={icon}
      isDisabled={!isAvailable}
      onClick={handleClick}
      onRightClick={handleRightClick}
    >
      {`${value}/${max}`}
    </AbilityButton>
  );
};
