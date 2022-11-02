import { useEffect, useState } from 'react';
import { TALENTS_TEMPLATE } from 'shared/constants/talentsData';
import { ClassChoser } from './ui/ClassChoser';
import { Controls } from './ui/Controls';
import { SpecializationTrees } from './ui/SpecializationTrees';
import { createTalentsState, TalentsDataReturn } from './lib/transform';
import styles from './styles.module.scss';
import { useTalentCalcContext } from './model/context';
import { checkIsTalentsDataRefreshed } from './lib/utils';

export type HandleTalentChangeArgs = {
  specialization: string,
  id: string,
  value: number,
};

export const TalentCalc = () => {
  const { currentClass, onClassChange } = useTalentCalcContext();
  const [talents, setTalents] = useState<TalentsDataReturn>({});

  useEffect(() => {
    if (!currentClass || !TALENTS_TEMPLATE[currentClass]) {
      return;
    }
    setTalents(createTalentsState(TALENTS_TEMPLATE[currentClass]));
  }, [currentClass]);

  const handleTalentChange = ({
    specialization,
    id,
    value,
  }: HandleTalentChangeArgs) => {
    setTalents((prev: { [key: typeof specialization]: any }) => ({
      ...prev,
      [specialization]: {
        ...prev[specialization],
        [id]: value,
      },
    }));
  };

  const isDataRefreshed = checkIsTalentsDataRefreshed(currentClass, talents);

  return (
    <div className={styles.wrapper}>
      <ClassChoser
        currentClass={currentClass}
        onClassChange={onClassChange}
      />
      {currentClass && TALENTS_TEMPLATE[currentClass] && isDataRefreshed && (
        <SpecializationTrees
          currentClass={currentClass}
          data={talents}
          talentsByClass={TALENTS_TEMPLATE[currentClass]}
          onTalentChange={handleTalentChange}
        />
      )}
      <Controls />
    </div>
  );
};
