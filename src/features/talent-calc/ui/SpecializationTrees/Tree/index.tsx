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
import { CharacterSpecializationType } from 'shared/constants/global';
import type { TalentTierType, TalentType } from 'shared/constants/talentsData';
import { type HandleTalentChange } from 'features/talent-calc/types';
import { type GetPreviousTotal } from './types';
import { Talent } from './Talent';
import { Arrow } from './Arrow';
import styles from './styles.module.scss';

export interface TreeProps {
  state: TalentsStateType,
  title: CharacterSpecializationType
  talents: TalentType[]
  backgroundImage?: string
  onTalentChange: HandleTalentChange
}

export const Tree = ({
  state,
  title,
  talents,
  backgroundImage,
  onTalentChange,
}: TreeProps) => {
  const maxRows = talents.sort((a, b) => b.tier - a.tier)[0].tier;
  const rows = numberToArray(maxRows) as TalentTierType[];

  const deepestTierWithValue = getDeepestTierWithValue(talents, state);
  const total = getTreeTotal(state);

  return (
    <div
      className={styles.wrapper}
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
                    const isRequiredTalentHasValue = checkRequiredTalent(talent.required, state);
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
                              isAvailable={isTierAvailable && isRequiredTalentHasValue}
                            />
                          )}
                          <Talent
                            key={talent.title}
                            value={state[talent.id]}
                            title={talent.title}
                            description={talent.description}
                            max={talent.max}
                            id={talent.id}
                            requiredTalentId={talent.required}
                            icon={talent.icon}
                            specialization={title}
                            tier={tier}
                            deepestTierWithValue={deepestTierWithValue}
                            includeTierTotal={previousTiersTotal + currentTierTotal}
                            isTierAvailable={isTierAvailable}
                            isRequiredTalentHasValue={isRequiredTalentHasValue}
                            isChildrenTalentsEmpty={isChildrenTalentsEmpty}
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
      <h4>
        {`${title} (${total})`}
      </h4>
    </div>
  );
};
