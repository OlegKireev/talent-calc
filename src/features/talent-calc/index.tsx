import { useTalentCalc } from './model/useTalentCalc';
import { ClassChoser } from './ui/ClassChoser';
import { Controls } from './ui/Controls';
import { SpecializationTrees } from './ui/SpecializationTrees';

export const TalentCalc = () => {
  const { currentClass, onClassChange } = useTalentCalc();
  return (
    <div>
      <ClassChoser
        currentClass={currentClass}
        onClassChange={onClassChange}
      />
      <SpecializationTrees />
      <Controls />
    </div>
  );
};
