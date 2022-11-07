import { TALENTS_TEMPLATE } from 'mocks/talents';
import { mageTalentsState } from 'mocks/talentsState';
import { CharacterClassType } from 'shared/constants/global';
import { createTalentsState } from './transform';

describe('features/talent-calc/lib/transform/createTalentsState()', () => {
  it('should create correct an empty mage talentsData', () => {
    const selectedClass: CharacterClassType = 'mage';
    expect(createTalentsState(TALENTS_TEMPLATE[selectedClass])).toStrictEqual(mageTalentsState);
  });
});
