import {
  createContext, useContext, useMemo, useState,
} from 'react';
import { CharacterClassUnion } from 'shared/constants/global';

// Что возвращает контекс
type TalentCalcContextType = {
  currentClass: CharacterClassUnion | null,
  onClassChange: (newClass: CharacterClassUnion) => void,
};

const initialState = {
  currentClass: null,
  onClassChange: () => {},
};

const TalentCalcContext = createContext<TalentCalcContextType | undefined>(
  initialState,
);

export type TalentState = {
  class: CharacterClassUnion | null,
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

  const handleClassChange = (newClass: CharacterClassUnion) => {
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