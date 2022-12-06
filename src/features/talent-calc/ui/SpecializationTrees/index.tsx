import { CreateTaletsStateReturn } from 'features/talent-calc/lib/transform';
import { type CharacterClassType } from 'shared/constants/global';
import { type TaletsOfClassType } from 'shared/constants/talentsData';
import { HandleTreeReset, type HandleTalentChange } from 'features/talent-calc/types';
import { Tree } from './Tree';
import styles from './styles.module.scss';

interface SpecializationTreesProps {
  currentClass: CharacterClassType | null
  talentsByClass: TaletsOfClassType[],
  state: CreateTaletsStateReturn,
  onTalentChange: HandleTalentChange
  onTreeReset: HandleTreeReset
}
export const SpecializationTrees = ({
  currentClass,
  talentsByClass,
  state,
  onTalentChange,
  onTreeReset,
}: SpecializationTreesProps) => {
  if (!currentClass) {
    return null;
  }

  if (!state || !Object.keys(state).length || !talentsByClass?.length) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      {talentsByClass.map((specializationData) => (
        <Tree
          state={state[specializationData.title]!}
          title={specializationData.title}
          icon={specializationData.icon}
          talents={specializationData.talents}
          backgroundImage={specializationData.backgroundImage}
          key={specializationData.title}
          onTalentChange={onTalentChange}
          onTreeReset={onTreeReset}
        />
      ))}
    </div>
  );
};
