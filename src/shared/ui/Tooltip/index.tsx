import { createPortal } from 'react-dom';
import styles from './styles.module.scss';
import { TooltipCoordsType, TooltipType } from './types';

interface TooltipProps {
  data: TooltipType,
  coords: TooltipCoordsType,
}

export const Tooltip = ({
  data,
  coords,
}: TooltipProps) => {
  const { title } = data;

  const { x, y } = coords;
  return createPortal(
    (
      <div
        className={styles.wrapper}
        style={{
          top: y,
          left: x,
        }}
      >
        {title}
      </div>
    ),
    document.body,
  );
};
