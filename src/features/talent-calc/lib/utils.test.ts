import { mageTalentsState } from 'mocks/talentsState';
import { TalentsDataType } from './transform';
import { getTotalToUnblockNextTier, getTreeTotal } from './utils';

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
