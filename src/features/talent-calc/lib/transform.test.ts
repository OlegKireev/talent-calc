import { TALENTS_TEMPLATE } from 'mocks/talents';
import { mageTalentsState } from 'mocks/talentsState';
import { type CharacterClassType } from 'shared/constants/global';
import { generateTalentsState } from './transform';

describe('features/talent-calc/lib/transform/generateTalentsState()', () => {
  it('should create correct an empty mage talentsData', () => {
    const selectedClass: CharacterClassType = 'mage';
    expect(generateTalentsState(TALENTS_TEMPLATE[selectedClass])).toStrictEqual(mageTalentsState);
  });
});
