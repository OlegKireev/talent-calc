import { useTalentCalc } from './model/useTalentCalc';
import { ClassChoser } from './ui/ClassChoser';
import { Controls } from './ui/Controls';
import { SpecializationTrees } from './ui/SpecializationTrees';
import styles from './styles.module.scss';

export const TalentCalc = () => {
  const { currentClass, onClassChange } = useTalentCalc();

  return (
    <div className={styles.wrapper}>
      <ClassChoser
        currentClass={currentClass}
        onClassChange={onClassChange}
      />
      <SpecializationTrees
        currentClass={currentClass}
      />
      <Controls />
    </div>
  );
};
