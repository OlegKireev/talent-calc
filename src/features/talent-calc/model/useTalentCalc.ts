import { useState } from 'react';

type TalentKeyUnion = 'a' | 'b' | 'c';

type TalentState = {
  class: string,
  talents: {
    [key in TalentKeyUnion]: string
  }
};

const initialState: TalentState = {
  class: 'rogue',
  talents: {
    a: '',
    b: '',
    c: '',
  },
};

export const useTalentCalc = () => {
  const [state, setState] = useState<TalentState | null>(initialState);

  return {
    state,
    setState,
  };
};
