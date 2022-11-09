import {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import { useDisclosure } from 'shared/hooks/useDisclosure';
import { TooltipType } from 'shared/ui/Tooltip/types';

type TooltipContextType = {
  isOpen: boolean,
  data: TooltipType,
  openTooltip: (args: TooltipType) => void,
  closeTooltip: () => void,
};

const initalData: TooltipType = {
  type: 'default',
  title: '',
};

const initialState: TooltipContextType = {
  isOpen: false,
  data: initalData,
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

  const openTooltip = useCallback((args: TooltipType) => {
    setData(args);
    onOpen();
  }, [onOpen]);

  const closeTooltip = useCallback(
    () => onClose(),
    [onClose],
  );

  const value = useMemo(() => ({
    isOpen,
    data,
    openTooltip,
    closeTooltip,
  }), [closeTooltip, data, isOpen, openTooltip]);

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
