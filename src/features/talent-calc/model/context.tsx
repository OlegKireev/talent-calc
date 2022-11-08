import {
  createContext, useContext, useMemo, useState,
} from 'react';
import { CharacterClassType } from 'shared/constants/global';

type TalentCalcContextType = {
  currentClass: CharacterClassType | null,
  onClassChange: (newClass: CharacterClassType) => void,
};

const initialState = {
  currentClass: null,
  onClassChange: () => {},
};

const TalentCalcContext = createContext<TalentCalcContextType | undefined>(
  initialState,
);

export type TalentState = {
  class: CharacterClassType | null,
  talents: {
    [key in string]?: string
  }
};

export const TalentCalcProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [state, setState] = useState<TalentState>({
    class: null,
    talents: {},
  });

  const handleClassChange = (newClass: CharacterClassType) => {
    setState((prev) => ({
      ...prev,
      class: newClass,
    }));
  };

  const value = useMemo(() => ({
    currentClass: state.class,
    onClassChange: handleClassChange,
  }), [state.class]);

  return (
    <TalentCalcContext.Provider value={value}>
      {children}
    </TalentCalcContext.Provider>
  );
};

export const useTalentCalcContext = () => {
  const value = useContext(TalentCalcContext);
  if (!value) {
    throw new Error('useTalentCalcContext is not inside TalentCalcProvider');
  }
  return value;
};
