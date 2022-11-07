import { useEffect, useState } from 'react';
import { TALENTS_TEMPLATE } from 'mocks/talents';
import { CharacterSpecializationType } from 'shared/constants/global';
import { CharacterTalentIdType } from 'shared/constants/talents';
import { ClassChoser } from './ui/ClassChoser';
import { Controls } from './ui/Controls';
import { SpecializationTrees } from './ui/SpecializationTrees';
import { createTalentsState, CreateTaletsStateReturn } from './lib/transform';
import { useTalentCalcContext } from './model/context';
import { checkIsTalentsDataRefreshed } from './lib/utils';
import styles from './styles.module.scss';

export type HandleTalentChangeArgs = {
  specialization: CharacterSpecializationType,
  id: CharacterTalentIdType,
  value: number,
};

export const TalentCalc = () => {
  const { currentClass, onClassChange } = useTalentCalcContext();
  const [state, setState] = useState<CreateTaletsStateReturn>({});

  useEffect(() => {
    if (!currentClass || !TALENTS_TEMPLATE[currentClass]) {
      return;
    }
    setState(createTalentsState(TALENTS_TEMPLATE[currentClass]));
  }, [currentClass]);

  const handleTalentChange = ({
    specialization,
    id,
    value,
  }: HandleTalentChangeArgs) => {
    setState((prev) => ({
      ...prev,
      [specialization]: {
        ...prev[specialization],
        [id]: value,
      },
    }));
  };

  const isDataRefreshed = checkIsTalentsDataRefreshed(currentClass, state);

  return (
    <div className={styles.wrapper}>
      <ClassChoser
        currentClass={currentClass}
        onClassChange={onClassChange}
      />
      {currentClass && TALENTS_TEMPLATE[currentClass] && isDataRefreshed ? (
        <SpecializationTrees
          currentClass={currentClass}
          state={state}
          talentsByClass={TALENTS_TEMPLATE[currentClass]}
          onTalentChange={handleTalentChange}
        />
      ) : <div className={styles.placeholder} />}
      <Controls />
    </div>
  );
};
