import {
  createContext, MouseEvent, useCallback, useContext, useMemo, useState,
} from 'react';
import { useDisclosure } from 'shared/hooks/useDisclosure';
import { getTooltipCoords } from 'shared/lib/utils';
import { TooltipCoordsType, TooltipType } from 'shared/ui/Tooltip/types';

type TooltipContextType = {
  isOpen: boolean,
  data: TooltipType,
  coords: TooltipCoordsType,
  openTooltip: (tooltipData: TooltipType, event: MouseEvent<HTMLElement>) => void,
  closeTooltip: () => void,
};

const initalData: TooltipType = {
  type: 'default',
  title: '',
};

const initialCoords: TooltipCoordsType = {
  x: 0,
  y: 0,
};

const initialState: TooltipContextType = {
  isOpen: false,
  data: initalData,
  coords: initialCoords,
  openTooltip: () => {},
  closeTooltip: () => {},
};

const TooltipContext = createContext<TooltipContextType | undefined>(
  initialState,
);

export const TooltipProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [data, setData] = useState<TooltipType>(initalData);
  const [coords, setCoords] = useState<TooltipCoordsType>(initialCoords);

  const openTooltip = useCallback((
    tooltipData: TooltipType,
    event: MouseEvent<HTMLElement>,
  ) => {
    setCoords(getTooltipCoords(event.currentTarget));
    setData(tooltipData);
    onOpen();
  }, [onOpen]);

  const closeTooltip = useCallback(
    () => onClose(),
    [onClose],
  );

  const value = useMemo(() => ({
    isOpen,
    data,
    coords: { x: coords.x, y: coords.y },
    openTooltip,
    closeTooltip,
  }), [closeTooltip, data, isOpen, openTooltip, coords]);

  return (
    <TooltipContext.Provider value={value}>
      {children}
    </TooltipContext.Provider>
  );
};

export const useTooltipContext = () => {
  const value = useContext(TooltipContext);
  if (!value) {
    throw new Error('useTooltipContext is not inside TooltipProvider');
  }
  return value;
};
