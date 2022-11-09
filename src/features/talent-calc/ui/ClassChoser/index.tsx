import { characterClasses, RESOURCE_URI, type CharacterClassType } from 'shared/constants/global';
import { AbilityButton } from 'shared/ui/AbilityButton';
import styles from './styles.module.scss';

interface ClassChoserProps {
  currentClass: CharacterClassType | null,
  onClassChange: (newClass: CharacterClassType) => void,
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
        background={`${RESOURCE_URI}/icons/large/class_${characterClass}.jpg`}
        onClick={() => onClassChange(characterClass)}
      />
    ))}
  </div>
);
