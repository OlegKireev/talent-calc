import { Fragment } from 'react';
import { HandleTalentChangeArgs } from 'features/talent-calc';
import { TalentsStateType } from 'features/talent-calc/lib/transform';
import {
  checkIsTierAvailable,
  checkRequiredTalent,
  getDeepestTierWithValue,
  getPreviousTiersTotal,
  getRequiredTalantPositions,
  getTreeTotal,
} from 'features/talent-calc/lib/utils';
import { TalentTierType, TalentType } from 'shared/constants/talentsData';
import { numberToArray } from 'shared/lib/transform';
import { CharacterSpecializationType } from 'shared/constants/global';
import { Talent } from './Talent';
import styles from './styles.module.scss';
import { Arrow } from './Arrow';

export interface TreeProps {
  state: TalentsStateType,
  title: CharacterSpecializationType
  talents: TalentType[]
  backgroundImage?: string
  onTalentChange: (args: HandleTalentChangeArgs) => void
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
            const previousTiersTotal = getPreviousTiersTotal(tier, talents, state);
            const isTierAvailable = checkIsTierAvailable(tier, previousTiersTotal);
            const getPreviousTotal = (prevTier: TalentTierType | number) => getPreviousTiersTotal(
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
                    const arrowPosition = getRequiredTalantPositions(
                      talent.id,
                      talent.required,
                      talents,
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
                              isAvailable={isRequiredTalentHasValue}
                            />
                          )}
                          <Talent
                            key={talent.title}
                            value={state[talent.id]}
                            title={talent.title}
                            description={talent.description}
                            max={talent.max}
                            id={talent.id}
                            icon={talent.icon}
                            specialization={title}
                            tier={tier}
                            deepestTierWithValue={deepestTierWithValue}
                            isAvailable={isTierAvailable && isRequiredTalentHasValue}
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
