import { TALENTS_TEMPLATE } from 'mocks/talents';
import { mageTalentsState } from 'mocks/talentsState';
import { TalentsDataType } from './transform';
import {
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
  let mockFrostMageState: TalentsDataType = {};
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
  let mockFrostMageState: TalentsDataType = {};
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
  let mockFrostMageState: TalentsDataType = {};
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
