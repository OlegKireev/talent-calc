import { HandleTalentChangeArgs } from 'features/talent-calc';
import { MouseEvent } from 'react';
import { TalentMaxValueType } from 'shared/constants/talentsData';
import { AbilityButton } from 'shared/ui/AbilityButton';

export interface TalentProps {
  title: string;
  description: string
  icon?: string
  max: TalentMaxValueType
  id: string
  value?: number
  specialization: string
  isDisabled?: boolean
  onChange: ({ specialization, id, value }: HandleTalentChangeArgs) => void
}

export const Talent = ({
  title,
  icon,
  id,
  value = 0,
  max,
  specialization,
  isDisabled,
  onChange,
}: TalentProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (value < max) {
      onChange({
        specialization,
        id,
        value: value + 1,
      });
    }
  };
  const handleRightClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (value > 0) {
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
      isDisabled={isDisabled}
      onClick={handleClick}
      onRightClick={handleRightClick}
    >
      {`${value}/${max}`}
    </AbilityButton>
  );
};
