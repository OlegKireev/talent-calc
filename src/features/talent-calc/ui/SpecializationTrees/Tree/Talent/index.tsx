import { TalentMaxValueType } from 'shared/constants/talentsData';
import { AbilityButton } from 'shared/ui/AbilityButton';

export interface TalentProps {
  title: string;
  description: string
  icon?: string
  max: TalentMaxValueType,
  // required?: string; // row/column (4/3)
}

export const Talent = ({
  title,
  icon,
}: TalentProps) => (
  <AbilityButton
    background={icon}
  >
    {title}
  </AbilityButton>
);
