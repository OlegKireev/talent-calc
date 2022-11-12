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
  <>
    {!currentClass && (
    <h2 className={styles.title}>Choose a class:</h2>
    )}
    <div className={styles.classList}>
      {characterClasses.map((characterClass) => (
        <Link to={`/${characterClass}`} key={characterClass}>
          <AbilityButton
            isSelected={characterClass === currentClass}
            isDimmed={characterClass !== currentClass}
            background={`${RESOURCE_URI}/icons/large/class_${characterClass}.jpg`}
          />
        </Link>
      ))}
    </div>
  </>
);
