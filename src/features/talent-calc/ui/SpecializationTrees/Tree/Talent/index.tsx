import { HandleTalentChangeArgs } from 'features/talent-calc';
import {
  createSearchParams, useNavigate,
} from 'react-router-dom';
import { TalentMaxValueType } from 'shared/constants/talentsData';
import { AbilityButton } from 'shared/ui/AbilityButton';

export interface TalentProps {
  title: string;
  description: string
  icon?: string
  max: TalentMaxValueType,
  id: string,
  specialization: string,
  onChange: ({ specialization, id, value }: HandleTalentChangeArgs) => void
  // required?: string; // row/column (4/3)
}

export const Talent = ({
  title,
  icon,
  id,
  max,
  specialization,
  onChange,
}: TalentProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onChange({
      specialization,
      id,
      value: 2,
    });
    // navigate({
    //   pathname: '/',
    //   search: `?${createSearchParams({
    //     l: '1',
    //   })}`,
    // });
  };
  return (
    <AbilityButton
      background={icon}
      onClick={handleClick}
    >
      {title}
    </AbilityButton>
  );
};
