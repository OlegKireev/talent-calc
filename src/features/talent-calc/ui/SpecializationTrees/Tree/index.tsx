import { Fragment } from 'react';
import { TalentsStateType } from 'features/talent-calc/lib/transform';
import {
  checkHasChildrenTalentsNoValue,
  checkIsTierAvailable,
  checkRequiredTalent,
  getDeepestTierWithValue,
  getPreviousTiersTotal,
  gerArrowPosition,
  getTreeTotal,
  getTierTotal,
} from 'features/talent-calc/lib/utils';
import { numberToArray } from 'shared/lib/transform';
import { CharacterSpecializationType, MAX_TALENTS_POINTS } from 'shared/constants/global';
import type { TalentTierType, TalentType } from 'shared/constants/talentsData';
import { HandleTreeReset, type HandleTalentChange } from 'features/talent-calc/types';
import { useTalentCalcContext } from 'features/talent-calc/model/context';
import { type GetPreviousTotal } from './types';
import { Header } from './Header';
import { Talent } from './Talent';
import { Arrow } from './Arrow';
import styles from './styles.module.scss';
import { Footer } from './Footer';

export interface TreeProps {
  state: TalentsStateType,
  title: CharacterSpecializationType
  icon: string
  talents: TalentType[]
  backgroundImage?: string
  onTalentChange: HandleTalentChange
  onTreeReset: HandleTreeReset
}

export const Tree = ({
  state,
  title,
  icon,
  talents,
  backgroundImage,
  onTalentChange,
  onTreeReset,
}: TreeProps) => {
  const { total } = useTalentCalcContext();

  const maxRows = talents.sort((a, b) => b.tier - a.tier)[0].tier;
  const rows = numberToArray(maxRows) as TalentTierType[];

  const deepestTierWithValue = getDeepestTierWithValue(talents, state);
  const treeTotal = getTreeTotal(state);

  const handleTreeReset = () => onTreeReset(title);

  return (
    <div
      className={styles.wrapper}
    >
      <Header title={title} total={treeTotal} icon={icon} />
      <div
        className={styles.tree}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <table className={styles.table}>
          <tbody>
            {rows.map((tier) => {
              let spaceBetweenCells = 0;
              const currentTierTotal = getTierTotal(tier, talents, state);
              const previousTiersTotal = getPreviousTiersTotal(tier, talents, state);
              const isTierAvailable = checkIsTierAvailable(tier, previousTiersTotal);

              const getPreviousTotal: GetPreviousTotal = (prevTier) => getPreviousTiersTotal(
                prevTier,
                talents,
                state,
              );

              return (
                <tr key={`row-${tier}`}>
                  {talents
                    .filter((talent) => talent.tier === tier)
                    .map((talent, i) => {
                      const cellOffset = talent.column - (i + 1 + spaceBetweenCells);
                      if (cellOffset > 0) {
                        spaceBetweenCells += 1;
                      }
                      const emptyCells = numberToArray(cellOffset);
                      const isRequiredTalentHasValue = checkRequiredTalent(
                        talent.required,
                        state,
                        talents,
                      );
                      const arrowPosition = gerArrowPosition(
                        talent.id,
                        talent.required,
                        talents,
                      );

                      const isChildrenTalentsEmpty = checkHasChildrenTalentsNoValue(
                        talent.id,
                        talents,
                        state,
                      );

                      const isTotalLimitReached = total === MAX_TALENTS_POINTS;
                      const shouldHighlight = !isTotalLimitReached
                        || (isTotalLimitReached && Boolean(state[talent.id]));

                      return (
                        <Fragment key={`tier${tier}-${talent.title}`}>
                          {emptyCells.map((cell) => (
                            <td key={cell} className={styles.cell} />
                          ))}
                          <td className={styles.cell}>
                            {arrowPosition !== false && (
                              <Arrow
                                from={arrowPosition.from}
                                to={arrowPosition.to}
                                isAvailable={isTierAvailable
                                  && isRequiredTalentHasValue
                                  && shouldHighlight}
                              />
                            )}
                            <Talent
                              key={talent.title}
                              data={talent}
                              value={state[talent.id]}
                              specialization={title}
                              deepestTierWithValue={deepestTierWithValue}
                              includeTierTotal={previousTiersTotal + currentTierTotal}
                              isTierAvailable={isTierAvailable}
                              isRequiredTalentHasValue={isRequiredTalentHasValue}
                              isChildrenTalentsEmpty={isChildrenTalentsEmpty}
                              shouldHighlight={shouldHighlight}
                              getPreviousTotal={getPreviousTotal}
                              onChange={onTalentChange}
                            />
                          </td>
                        </Fragment>
                      );
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer treeTotal={treeTotal} onTreeReset={handleTreeReset} />
    </div>
  );
};
