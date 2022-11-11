import {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import { type CharacterClassType } from 'shared/constants/global';
import type { TalentType, TalentsType } from 'shared/constants/talentsData';
import { generateAllTalents, type CreateTaletsStateReturn } from '../lib/transform';

type TalentCalcContextType = {
  currentClass: CharacterClassType | null,
  state: CreateTaletsStateReturn,
  talentsByClass: TalentsType,
  allTalents: TalentType[],
  setClass: (newClass: CharacterClassType) => void,
  setState: (newState: CreateTaletsStateReturn) => void,
  setTalents: (newTalents: TalentsType) => void
};

const initialState: TalentCalcContextType = {
  currentClass: null,
  state: {},
  talentsByClass: {
    deathknight: [],
    druid: [],
    hunter: [],
    mage: [],
    paladin: [],
    priest: [],
    rogue: [],
    shaman: [],
    warlock: [],
    warrior: [],
  },
  allTalents: [],
  setClass: () => {},
  setState: () => {},
  setTalents: () => {},
};

const TalentCalcContext = createContext<TalentCalcContextType | undefined>(
  initialState,
);

export type TalentState = {
  class: CharacterClassType | null,
  state: CreateTaletsStateReturn,
  talentsByClass: TalentsType,
  allTalents: TalentType[]
};

export const TalentCalcProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [currentClass, setCurrentClass] = useState<CharacterClassType | null>(
    initialState.currentClass,
  );
  const [state, setState] = useState<CreateTaletsStateReturn>(initialState.state);
  const [talentsByClass, setTalentsByClass] = useState<TalentsType>(initialState.talentsByClass);
  const [allTalents, setAllTalents] = useState<TalentType[]>(initialState.allTalents);

  const handleClassUpdate = useCallback((newClass: CharacterClassType) => {
    setCurrentClass(newClass);
  }, [setCurrentClass]);

  const handleStateUpdate = useCallback((newState: CreateTaletsStateReturn) => {
    setState(newState);
  }, [setState]);

  const handleTalentsUpdate = useCallback((newTalents: TalentsType) => {
    setTalentsByClass(newTalents);
    setAllTalents(generateAllTalents(newTalents));
  }, [setTalentsByClass, setAllTalents]);

  const value = useMemo(() => ({
    currentClass,
    state,
    talentsByClass,
    allTalents,
    setClass: handleClassUpdate,
    setState: handleStateUpdate,
    setTalents: handleTalentsUpdate,
  }), [
    currentClass,
    state,
    talentsByClass,
    allTalents,
    handleClassUpdate,
    handleStateUpdate,
    handleTalentsUpdate,
  ]);

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
