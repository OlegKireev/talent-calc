import {
  createContext, MouseEvent, useCallback, useContext, useMemo, useState,
} from 'react';
import { useDisclosure } from 'shared/hooks/useDisclosure';
import { getTargetCoords } from 'shared/lib/utils';
import { TooltipCoordsType, TooltipType } from 'shared/ui/Tooltip/types';

type TooltipContextType = {
  data: TooltipType,
  coords: TooltipCoordsType,
  isOpen: boolean,
  openTooltip: (tooltipData: TooltipType, event: MouseEvent<HTMLElement>) => void,
  closeTooltip: () => void,
  refreshLastTooltip: (tooltipData: TooltipType) => void,
};

const initalData: TooltipType = {
  type: 'default',
  isOpen: false,
  title: '',
};

const initialCoords: TooltipCoordsType = {
  x: 0,
  y: 0,
};

const initialState: TooltipContextType = {
  data: initalData,
  coords: initialCoords,
  isOpen: false,
  openTooltip: () => {},
  closeTooltip: () => {},
  refreshLastTooltip: () => {},
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
    setCoords(getTargetCoords(event.currentTarget));
    setData(tooltipData);
    onOpen();
  }, [onOpen]);

  const closeTooltip = useCallback(
    () => onClose(),
    [onClose],
  );

  const refreshLastTooltip = useCallback(
    (tooltipData: TooltipType) => {
      setData(tooltipData);
    },
    [],
  );

  const value = useMemo(() => ({
    isOpen,
    data,
    coords: { x: coords.x, y: coords.y },
    openTooltip,
    closeTooltip,
    refreshLastTooltip,
  }), [data, coords, isOpen, openTooltip, closeTooltip, refreshLastTooltip]);

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
