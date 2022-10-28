import { useState } from 'react';
import { CharacterClassUnion } from 'shared/constants/global';

type TalentKeyUnion = 'a' | 'b' | 'c';

type TalentState = {
  class: CharacterClassUnion | null,
  talents: {
    [key in TalentKeyUnion]: string
  }
};

const initialState: TalentState = {
  class: null,
  talents: {
    a: '',
    b: '',
    c: '',
  },
};

export const useTalentCalc = () => {
  const [state, setState] = useState<TalentState>(initialState);

  const handleClassChange = (newClass: CharacterClassUnion) => {
    setState((prev) => ({
      ...prev,
      class: newClass,
    }));
  };

  return {
    currentClass: state.class,
    onClassChange: handleClassChange,
  };
};
