import { HandleTalentChangeArgs } from 'features/talent-calc';
import { TalentMaxValueType } from 'shared/constants/talentsData';
import { AbilityButton } from 'shared/ui/AbilityButton';

export interface TalentProps {
  title: string;
  description: string
  icon?: string
  max: TalentMaxValueType,
  id: string,
  value?: number,
  specialization: string,
  onChange: ({ specialization, id, value }: HandleTalentChangeArgs) => void
}

export const Talent = ({
  title,
  icon,
  id,
  value = 0,
  max,
  specialization,
  onChange,
}: TalentProps) => {
  const handleClick = () => {
    if (value < max) {
      onChange({
        specialization,
        id,
        value: value + 1,
      });
    }
  };
  return (
    <AbilityButton
      background={icon}
      onClick={handleClick}
    >
      {value}
    </AbilityButton>
  );
};
