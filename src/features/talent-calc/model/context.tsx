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
  total: number,
  setState: (newState: CreateTaletsStateReturn) => void,
  setTalents: (newTalents: TalentsType) => void
  setTotal: (newTotal: number) => void
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
  total: 0,
  setState: () => {},
  setTalents: () => {},
  setTotal: () => {},
};

const TalentCalcContext = createContext<TalentCalcContextType | undefined>(
  initialState,
);

export type TalentState = {
  state: CreateTaletsStateReturn,
  talentsByClass: TalentsType,
  total: number,
  allTalents: AllTalentsMapType
};

export const TalentCalcProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [state, setState] = useState<CreateTaletsStateReturn>(initialState.state);
  const [talentsByClass, setTalentsByClass] = useState<TalentsType>(initialState.talentsByClass);
  const [allTalents, setAllTalents] = useState<AllTalentsMapType>(initialState.allTalents);
  const [total, setTotal] = useState<number>(initialState.total);

  const handleStateUpdate = useCallback((newState: CreateTaletsStateReturn) => {
    setState(newState);
  }, [setState]);

  const handleTalentsUpdate = useCallback((newTalents: TalentsType) => {
    setTalentsByClass(newTalents);
    setAllTalents(generateAllTalentsMap(newTalents));
  }, [setTalentsByClass, setAllTalents]);

  const handleTotalUpdate = useCallback((newTotal: number) => {
    setTotal(newTotal);
  }, [setTotal]);

  const value = useMemo(() => ({
    state,
    talentsByClass,
    allTalents,
    total,
    setState: handleStateUpdate,
    setTalents: handleTalentsUpdate,
    setTotal: handleTotalUpdate,
  }), [
    state,
    talentsByClass,
    allTalents,
    total,
    handleStateUpdate,
    handleTalentsUpdate,
    handleTotalUpdate,
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
