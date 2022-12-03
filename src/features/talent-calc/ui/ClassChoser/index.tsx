import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  characterClasses, CHARACTER_COLORS, RESOURCE_URI, type CharacterClassType,
} from 'shared/constants/global';
import { useTooltipContext } from 'shared/context/tooltip';
import { AbilityButton } from 'shared/ui/AbilityButton';
import styles from './styles.module.scss';

interface ClassChoserProps {
  currentClass: CharacterClassType | null,
}

export const ClassChoser = ({
  currentClass,
}: ClassChoserProps) => {
  const { openTooltip, closeTooltip, isOpen } = useTooltipContext();
  const handleMouseOver = (
    characterClass: CharacterClassType,
  ) => (e: MouseEvent<HTMLElement>) => openTooltip(
    {
      type: 'default',
      isOpen,
      title: (
        <span style={{
          color: CHARACTER_COLORS[characterClass],
          textTransform: 'capitalize',
        }}
        >
          {characterClass}
        </span>
      ),
    },
    e,
  );
  const handleMouseOut = () => closeTooltip();

  return (
    <>
      {!currentClass && (
      <h2 className={styles.title}>Choose a class:</h2>
      )}
      <div className={styles.classList}>
        {characterClasses.map((characterClass) => (
          <Link
            to={`/${characterClass}`}
            key={characterClass}
            onMouseOver={handleMouseOver(characterClass)}
            onMouseOut={handleMouseOut}
            aria-label={characterClass}
          >
            <AbilityButton
              background={`${RESOURCE_URI}/icons/large/class_${characterClass}.jpg`}
              isSelected={characterClass === currentClass}
              isDimmed={characterClass !== currentClass}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
