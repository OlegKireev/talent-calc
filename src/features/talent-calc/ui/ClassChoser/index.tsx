import { characterClasses, CharacterClassUnion } from 'shared/constants/global';
import { AbilityButton } from 'shared/ui/AbilityButton';
import styles from './styles.module.scss';

interface ClassChoserProps {
  currentClass: CharacterClassUnion | null,
  onClassChange: (newClass: CharacterClassUnion) => void,
}

export const ClassChoser = ({
  currentClass,
  onClassChange,
}: ClassChoserProps) => (
  <div className={styles.wrapper}>
    {characterClasses.map((characterClass) => (
      <AbilityButton
        key={characterClass}
        isActive={characterClass === currentClass}
        isDisabled={false}
        background={`https://wow.zamimg.com/images/wow/icons/medium/class_${characterClass}.jpg`}
        onClick={() => onClassChange(characterClass)}
      >
        {characterClass}
      </AbilityButton>
    ))}
  </div>
);
