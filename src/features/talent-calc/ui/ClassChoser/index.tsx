import { Link } from 'react-router-dom';
import { characterClasses, RESOURCE_URI, type CharacterClassType } from 'shared/constants/global';
import { AbilityButton } from 'shared/ui/AbilityButton';
import styles from './styles.module.scss';

interface ClassChoserProps {
  currentClass: CharacterClassType | null,
}

export const ClassChoser = ({
  currentClass,
}: ClassChoserProps) => (
  <div className={styles.wrapper}>
    {characterClasses.map((characterClass) => (
      <Link to={`/${characterClass}`}>
        <AbilityButton
          key={characterClass}
          isSelected={characterClass === currentClass}
          isDimmed={characterClass !== currentClass}
          background={`${RESOURCE_URI}/icons/large/class_${characterClass}.jpg`}
        />
      </Link>
    ))}
  </div>
);
