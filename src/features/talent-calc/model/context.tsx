import {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import { CharacterTalentIdType } from 'shared/constants/talents';
import type { TalentType, TalentsType } from 'shared/constants/talentsData';
import { generateAllTalentsMap, type CreateTaletsStateReturn } from '../lib/transform';

type AllTalentsMapType = { [key in CharacterTalentIdType]?: TalentType };

type TalentCalcContextType = {
  state: CreateTaletsStateReturn,
  talentsByClass: TalentsType,
  allTalents: AllTalentsMapType,
  setState: (newState: CreateTaletsStateReturn) => void,
  setTalents: (newTalents: TalentsType) => void
};

const initialState: TalentCalcContextType = {
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
  allTalents: {},
  setState: () => {},
  setTalents: () => {},
};

const TalentCalcContext = createContext<TalentCalcContextType | undefined>(
  initialState,
);

export type TalentState = {
  state: CreateTaletsStateReturn,
  talentsByClass: TalentsType,
  allTalents: AllTalentsMapType
};

export const TalentCalcProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [state, setState] = useState<CreateTaletsStateReturn>(initialState.state);
  const [talentsByClass, setTalentsByClass] = useState<TalentsType>(initialState.talentsByClass);
  const [allTalents, setAllTalents] = useState<AllTalentsMapType>(initialState.allTalents);

  const handleStateUpdate = useCallback((newState: CreateTaletsStateReturn) => {
    setState(newState);
  }, [setState]);

  const handleTalentsUpdate = useCallback((newTalents: TalentsType) => {
    setTalentsByClass(newTalents);
    setAllTalents(generateAllTalentsMap(newTalents));
  }, [setTalentsByClass, setAllTalents]);

  const value = useMemo(() => ({
    state,
    talentsByClass,
    allTalents,
    setState: handleStateUpdate,
    setTalents: handleTalentsUpdate,
  }), [
    state,
    talentsByClass,
    allTalents,
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
