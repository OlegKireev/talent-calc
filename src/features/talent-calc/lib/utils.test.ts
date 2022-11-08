import { TALENTS_TEMPLATE } from 'mocks/talents';
import { mageTalentsState } from 'mocks/talentsState';
import { TalentsStateType } from './transform';
import {
  checkIsTalentsDataRefreshed,
  checkIsTierAvailable,
  getDeepestTierWithValue,
  getPreviousTiersTotal, getTierTotal, getTotalToUnblockNextTier, getTreeTotal,
} from './utils';

describe('features/talent-calc/lib/utils:getTotalToUnblockNextTier()', () => {
  it('should return "5" with input "1"', () => {
    expect(getTotalToUnblockNextTier(1)).toBe(5);
  });

  it('should return "15" with input "3"', () => {
    expect(getTotalToUnblockNextTier(3)).toBe(15);
  });

  it('should return "0" with a input "0"', () => {
    expect(getTotalToUnblockNextTier(0)).toBe(0);
  });

  it('should return "0" with a negative input ', () => {
    expect(getTotalToUnblockNextTier(-1)).toBe(0);
  });
});

describe('features/talent-calc/lib/utils:getTreeTotal()', () => {
  let mockFrostMageState: TalentsStateType = {};
  beforeEach(() => {
    mockFrostMageState = JSON.parse(JSON.stringify(mageTalentsState.frost));
  });

  it('should return "0" on initial', () => {
    expect(getTreeTotal(mockFrostMageState)).toBe(0);
  });

  it('should return "3" with total data equal 3', () => {
    mockFrostMageState.mage_frost_arctic_reach = 1;
    mockFrostMageState.mage_frost_arctic_winds = 1;
    mockFrostMageState.mage_frost_cold_snap = 1;
    expect(getTreeTotal(mockFrostMageState)).toBe(3);
  });

  it('should return "15" with total data equal 15', () => {
    mockFrostMageState.mage_frost_imporved_frostbolt = 5;
    mockFrostMageState.mage_frost_precision = 3;
    mockFrostMageState.mage_frost_permafrost = 3;
    mockFrostMageState.mage_frost_icy_veins = 1;
    mockFrostMageState.mage_frost_improved_blizzard = 3;
    expect(getTreeTotal(mockFrostMageState)).toBe(15);
  });
});

describe('features/talent-calc/lib/utils:getTierTotal()', () => {
  const frostMageTalents = TALENTS_TEMPLATE.mage[2].talents;
  let mockFrostMageState: TalentsStateType = {};
  beforeEach(() => {
    mockFrostMageState = JSON.parse(JSON.stringify(mageTalentsState.frost));
  });

  it('should return 0 on initial state', () => {
    expect(getTierTotal(1, frostMageTalents, mockFrostMageState)).toBe(0);
  });

  it('should count talents only in a selected tier', () => {
    mockFrostMageState.mage_frost_imporved_frostbolt = 5;
    mockFrostMageState.mage_frost_precision = 3;
    mockFrostMageState.mage_frost_permafrost = 3;
    expect(getTierTotal(1, frostMageTalents, mockFrostMageState)).toBe(5);
    mockFrostMageState.mage_frost_frostbite = 3;
    expect(getTierTotal(1, frostMageTalents, mockFrostMageState)).toBe(8);
    expect(getTierTotal(2, frostMageTalents, mockFrostMageState)).toBe(6);
    expect(getTierTotal(3, frostMageTalents, mockFrostMageState)).toBe(0);
  });

  it('should return 0 on input a not existed tier value', () => {
    expect(getTierTotal(15, frostMageTalents, mockFrostMageState)).toBe(0);
  });

  it('should return 0 on input a negative tier value', () => {
    expect(getTierTotal(-1, frostMageTalents, mockFrostMageState)).toBe(0);
  });
});

describe('features/talent-calc/lib/utils:getPreviousTiersTotal()', () => {
  const frostMageTalents = TALENTS_TEMPLATE.mage[2].talents;
  let mockFrostMageState: TalentsStateType = {};
  beforeEach(() => {
    mockFrostMageState = JSON.parse(JSON.stringify(mageTalentsState.frost));
  });

  it('should return 0 on initial state', () => {
    expect(getPreviousTiersTotal(1, frostMageTalents, mockFrostMageState)).toBe(0);
  });

  it('should count talents only in a previous tiers', () => {
    mockFrostMageState.mage_frost_imporved_frostbolt = 5;
    mockFrostMageState.mage_frost_precision = 3;
    mockFrostMageState.mage_frost_permafrost = 3;
    expect(getPreviousTiersTotal(1, frostMageTalents, mockFrostMageState)).toBe(0);
    expect(getPreviousTiersTotal(2, frostMageTalents, mockFrostMageState)).toBe(5);
    mockFrostMageState.mage_frost_frostbite = 3;
    expect(getPreviousTiersTotal(2, frostMageTalents, mockFrostMageState)).toBe(8);
    mockFrostMageState.mage_frost_arctic_reach = 2;
    expect(getPreviousTiersTotal(3, frostMageTalents, mockFrostMageState)).toBe(14);
    expect(getPreviousTiersTotal(11, frostMageTalents, mockFrostMageState)).toBe(16);
  });

  it('should return 0 on input a not existed tier value', () => {
    expect(getPreviousTiersTotal(-1, frostMageTalents, mockFrostMageState)).toBe(0);
  });

  it('should return 0 on input a negative tier value', () => {
    expect(getPreviousTiersTotal(-1, frostMageTalents, mockFrostMageState)).toBe(0);
  });
});

describe('features/talent-calc/lib/utils:checkIsTalentsDataRefreshed()', () => {
  it('should process "null" value', () => {
    expect(checkIsTalentsDataRefreshed(null, mageTalentsState)).toBe(false);
  });

  it('should return "true" if currentClass and talentState has the same data keys', () => {
    expect(checkIsTalentsDataRefreshed('mage', mageTalentsState)).toBe(true);
  });

  it('should return "false" if currentClass and talentState has the different data keys', () => {
    expect(checkIsTalentsDataRefreshed('mage', mageTalentsState)).toBe(true);
  });
});

describe('features/talent-calc/lib/utils:getDeepestTierWithValue()', () => {
  const frostMageTalents = TALENTS_TEMPLATE.mage[2].talents;
  let mockFrostMageState: TalentsStateType = {};
  beforeEach(() => {
    mockFrostMageState = JSON.parse(JSON.stringify(mageTalentsState.frost));
  });

  it('should return 0 on initial state', () => {
    expect(getDeepestTierWithValue(frostMageTalents, mockFrostMageState)).toBe(0);
  });

  it('should find the deepest talant correctly', () => {
    mockFrostMageState.mage_frost_imporved_frostbolt = 5;
    expect(getDeepestTierWithValue(frostMageTalents, mockFrostMageState)).toBe(1);
    mockFrostMageState.mage_frost_precision = 3;
    mockFrostMageState.mage_frost_permafrost = 3;
    expect(getDeepestTierWithValue(frostMageTalents, mockFrostMageState)).toBe(2);
    mockFrostMageState.mage_frost_improved_blizzard = 3;
    expect(getDeepestTierWithValue(frostMageTalents, mockFrostMageState)).toBe(3);
    mockFrostMageState.mage_frost_arctic_reach = 2;
    expect(getDeepestTierWithValue(frostMageTalents, mockFrostMageState)).toBe(4);
  });
});

describe('features/talent-calc/lib/utils:checkIsTierAvailable()', () => {
  it('should the first tier is available on initial', () => {
    expect(checkIsTierAvailable(1, 0)).toBe(true);
  });

  it('should the second tier isn\'t available with a zero total value', () => {
    expect(checkIsTierAvailable(2, 0)).toBe(false);
  });

  it('should the second tier isn\'t available with total value equals "4"', () => {
    expect(checkIsTierAvailable(2, 4)).toBe(false);
  });

  it('should the second tier is available with total value equals "5"', () => {
    expect(checkIsTierAvailable(2, 5)).toBe(true);
  });

  it('should the third tier is available with total value >= "10"', () => {
    expect(checkIsTierAvailable(3, 10)).toBe(true);
    expect(checkIsTierAvailable(3, 20)).toBe(true);
    expect(checkIsTierAvailable(3, 30)).toBe(true);
    expect(checkIsTierAvailable(3, 40)).toBe(true);
  });

  it('should the last tier is available with total value >= "50"', () => {
    expect(checkIsTierAvailable(11, 49)).toBe(false);
    expect(checkIsTierAvailable(11, 50)).toBe(true);
  });
});
