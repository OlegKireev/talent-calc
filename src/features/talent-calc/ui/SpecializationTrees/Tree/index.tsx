import { Fragment } from 'react';
import { HandleTalentChangeArgs } from 'features/talent-calc';
import { TalentsDataType } from 'features/talent-calc/lib/transform';
import {
  checkCanDecreaseByNextTier,
  checkIsTierAvailable, getDeepestTierWithValue, getTierTotal, getPreviousTiersTotal, getTreeTotal,
} from 'features/talent-calc/lib/utils';
import { TalentTierType, TalentType } from 'shared/constants/talentsData';
import { numberToArray } from 'shared/lib/transform';
import { CharacterSpecializationType } from 'shared/constants/global';
import { Talent } from './Talent';
import styles from './styles.module.scss';

export interface TreeProps {
  data: TalentsDataType,
  title: CharacterSpecializationType
  talents: TalentType[]
  backgroundImage?: string
  onTalentChange: (args: HandleTalentChangeArgs) => void
}

export const Tree = ({
  data,
  title,
  talents,
  backgroundImage,
  onTalentChange,
}: TreeProps) => {
  const maxRows = talents.sort((a, b) => b.tier - a.tier)[0].tier;
  const rows = numberToArray(maxRows) as TalentTierType[];

  const deepestTierWithValue = getDeepestTierWithValue(talents, data);
  const total = getTreeTotal(data);

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
            const tierTotal = getTierTotal(tier, talents, data);
            const hasNextTierValue = Boolean(
              getTierTotal(tier + 1 as TalentTierType, talents, data),
            );
            const canDecreaseByNextTier = checkCanDecreaseByNextTier(hasNextTierValue, tierTotal);
            const isTierAvailable = checkIsTierAvailable(total, tierTotal, tier);
            const previousTiersTotal = getPreviousTiersTotal(tier, talents, data);
            const getPreviousTotal = (prevTier: TalentTierType | number) => getPreviousTiersTotal(
              prevTier,
              talents,
              data,
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
                    const emplyCells = numberToArray(cellOffset);

                    return (
                      <Fragment key={`tier${tier}-${talent.title}`}>
                        {emplyCells.map((cell) => (
                          <td key={cell} className={styles.cell} />
                        ))}
                        <td className={styles.cell}>
                          <Talent
                            key={talent.title}
                            value={data[talent.id]}
                            title={talent.title}
                            description={talent.description}
                            max={talent.max}
                            id={talent.id}
                            icon={talent.icon}
                            specialization={title}
                            tier={tier}
                            tierTotal={tierTotal}
                            previousTiersTotal={previousTiersTotal}
                            deepestTierWithValue={deepestTierWithValue}
                            isAvailable={isTierAvailable}
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
