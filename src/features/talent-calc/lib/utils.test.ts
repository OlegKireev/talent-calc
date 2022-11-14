import { TALENTS_TEMPLATE } from 'mocks/talents';
import { mageTalentsState, MockMageTalentType } from 'mocks/talentsState';
import { type ArrowPositionType } from '../types';
import { type TalentsStateType } from './transform';
import {
  checkHasChildrenTalentsNoValue,
  checkIsTalentsDataRefreshed,
  checkIsTierAvailable,
  checkRequiredTalent,
  generateArrowClass,
  getDeepestTierWithValue,
  getPreviousTiersTotal,
  gerArrowPosition,
  getTierTotal,
  getTotalToUnblockNextTier,
  getTreeTotal,
  generateStateString,
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

describe('features/talent-calc/lib/utils:checkRequiredTalent()', () => {
  let mockFrostMageState: TalentsStateType = {};
  beforeEach(() => {
    mockFrostMageState = JSON.parse(JSON.stringify(mageTalentsState.frost));
  });

  it('should a child to be disabled if a parent has "0" value', () => {
    expect(checkRequiredTalent('mage_frost_cold_snap', mockFrostMageState)).toBe(false);
  });

  it('should a child to be available if a parent has "1" value', () => {
    mockFrostMageState.mage_frost_cold_snap = 1;
    expect(checkRequiredTalent('mage_frost_cold_snap', mockFrostMageState)).toBe(true);
  });

  it('should a talent to be available if it doesn\'t have a "required" param', () => {
    expect(checkRequiredTalent(undefined, mockFrostMageState)).toBe(true);
  });
});

describe('features/talent-calc/lib/utils:getRequiredTalantPositions', () => {
  const frostMageTalents = TALENTS_TEMPLATE.mage[2].talents;

  it('should return coords for a talent with a required talent', () => {
    const expectedArrowCoords = { from: { column: 2, tier: 5 }, to: { column: 1, tier: 6 } };
    const talentWithRequiredTalent = 'mage_frost_cold_as_ice';
    const requiredTalent = 'mage_frost_cold_snap';

    expect(gerArrowPosition(
      talentWithRequiredTalent,
      requiredTalent,
      frostMageTalents,
    )).toEqual(expectedArrowCoords);
  });

  it('should return "false" for a talent without a required talent', () => {
    const talentWithoutRequiredTalent = 'mage_frost_fronst_warding';
    const someRequredTalent = 'mage_frost_cold_snap';

    expect(gerArrowPosition(
      talentWithoutRequiredTalent,
      someRequredTalent,
      frostMageTalents,
    )).toEqual(false);
  });

  it('should return "false" for an another class\' talent', () => {
    const talentWithoutRequiredTalent = 'deathknight_blood_butchery';
    const someRequredTalent = 'mage_frost_ice_barrier';

    expect(gerArrowPosition(
      talentWithoutRequiredTalent,
      someRequredTalent,
      frostMageTalents,
    )).toEqual(false);
  });
});

describe('features/talent-calc/lib/utils:generateArrowClass', () => {
  it('should generate "down" correct', () => {
    const downArrowCoords: {
      from: ArrowPositionType,
      to: ArrowPositionType
    } = {
      from: {
        column: 2,
        tier: 5,
      },
      to: {
        column: 2,
        tier: 6,
      },
    };

    expect(generateArrowClass(downArrowCoords)).toBe('down');
  });

  it('should generate "left" correct', () => {
    const leftArrowCoords: {
      from: ArrowPositionType,
      to: ArrowPositionType
    } = {
      from: {
        column: 2,
        tier: 5,
      },
      to: {
        column: 1,
        tier: 5,
      },
    };

    expect(generateArrowClass(leftArrowCoords)).toBe('left');
  });

  it('should generate "right" correct', () => {
    const rightArrowCoords: {
      from: ArrowPositionType,
      to: ArrowPositionType
    } = {
      from: {
        column: 2,
        tier: 5,
      },
      to: {
        column: 3,
        tier: 5,
      },
    };

    expect(generateArrowClass(rightArrowCoords)).toBe('right');
  });

  it('should generate "left-down" correct', () => {
    const leftDownArrowCoords: {
      from: ArrowPositionType,
      to: ArrowPositionType
    } = {
      from: {
        column: 2,
        tier: 5,
      },
      to: {
        column: 1,
        tier: 6,
      },
    };

    expect(generateArrowClass(leftDownArrowCoords)).toBe('left-down');
  });

  it('should generate "right-down" correct', () => {
    const rightDownArrowCoords: {
      from: ArrowPositionType,
      to: ArrowPositionType
    } = {
      from: {
        column: 2,
        tier: 5,
      },
      to: {
        column: 3,
        tier: 6,
      },
    };

    expect(generateArrowClass(rightDownArrowCoords)).toBe('right-down');
  });

  it('should generate correct values with more than one tier differnce', () => {
    const downArrowCoords: {
      from: ArrowPositionType,
      to: ArrowPositionType
    } = {
      from: {
        column: 3,
        tier: 2,
      },
      to: {
        column: 3,
        tier: 5,
      },
    };

    expect(generateArrowClass(downArrowCoords)).toBe('down');

    const rightDownArrowCoords: {
      from: ArrowPositionType,
      to: ArrowPositionType
    } = {
      from: {
        column: 2,
        tier: 2,
      },
      to: {
        column: 3,
        tier: 5,
      },
    };

    expect(generateArrowClass(rightDownArrowCoords)).toBe('right-down');

    const leftDownArrowCoords: {
      from: ArrowPositionType,
      to: ArrowPositionType
    } = {
      from: {
        column: 2,
        tier: 2,
      },
      to: {
        column: 1,
        tier: 5,
      },
    };

    expect(generateArrowClass(leftDownArrowCoords)).toBe('left-down');
  });
});

describe('features/talent-calc/lib/utils:checkHasChildrenTalentsNoValue', () => {
  const frostMageTalents = TALENTS_TEMPLATE.mage[2].talents;
  let mockFrostMageState: TalentsStateType = {};
  beforeEach(() => {
    mockFrostMageState = JSON.parse(JSON.stringify(mageTalentsState.frost));
  });

  it('should return "true" on an initial state', () => {
    expect(checkHasChildrenTalentsNoValue(
      'mage_frost_cold_snap',
      frostMageTalents,
      mockFrostMageState,
    )).toBe(true);
  });

  it('should return "true" if only the current talent has value', () => {
    mockFrostMageState.mage_frost_cold_snap = 1;

    expect(checkHasChildrenTalentsNoValue(
      'mage_frost_cold_snap',
      frostMageTalents,
      mockFrostMageState,
    )).toBe(true);
  });

  it('should return "false" if a parent and a child has value ', () => {
    mockFrostMageState.mage_frost_cold_snap = 1;
    mockFrostMageState.mage_frost_cold_as_ice = 1;

    expect(checkHasChildrenTalentsNoValue(
      'mage_frost_cold_snap',
      frostMageTalents,
      mockFrostMageState,
    )).toBe(false);
  });

  it('should return "false" if only a child has value', () => {
    mockFrostMageState.mage_frost_cold_as_ice = 1;

    expect(checkHasChildrenTalentsNoValue(
      'mage_frost_cold_snap',
      frostMageTalents,
      mockFrostMageState,
    )).toBe(false);
  });

  it('should return "false" if two children has value', () => {
    mockFrostMageState.mage_frost_cold_as_ice = 2;
    mockFrostMageState.mage_frost_ice_barrier = 1;

    expect(checkHasChildrenTalentsNoValue(
      'mage_frost_cold_snap',
      frostMageTalents,
      mockFrostMageState,
    )).toBe(false);
  });
});

describe('features/talent-calc/lib/utils:generateStateString', () => {
  let mockMageState: MockMageTalentType;

  beforeEach(() => {
    mockMageState = JSON.parse(JSON.stringify(mageTalentsState));
  });

  it('should return an empty string on inital state', () => {
    expect(generateStateString(mockMageState)).toBe('');
  });

  it('should return "1--" if only first tree has value', () => {
    mockMageState.arcane.mage_arcane_arcance_subtlety = 1;
    expect(generateStateString(mockMageState)).toBe('1--');
  });

  it('should return "-1-" if only second tree has value', () => {
    mockMageState.fire.mage_fire_improved_fire_blast = 1;
    expect(generateStateString(mockMageState)).toBe('-1-');
  });

  it('should return "--1" if only third tree has value', () => {
    mockMageState.frost.mage_frost_frostbite = 1;
    expect(generateStateString(mockMageState)).toBe('--1');
  });

  it('should return correct string for the only one detailed tree', () => {
    mockMageState.frost.mage_frost_frostbite = 2;
    mockMageState.frost.mage_frost_imporved_frostbolt = 5;
    mockMageState.frost.mage_frost_ice_shards = 3;
    mockMageState.frost.mage_frost_icy_veins = 1;

    expect(generateStateString(mockMageState)).toBe('--250300001');
  });

  it('should return correct string for the only one detailed tree', () => {
    mockMageState.frost.mage_frost_frostbite = 2;
    mockMageState.frost.mage_frost_imporved_frostbolt = 5;
    mockMageState.frost.mage_frost_ice_shards = 3;
    mockMageState.frost.mage_frost_icy_veins = 1;

    expect(generateStateString(mockMageState)).toBe('--250300001');
  });

  it('should return correct string for first and third trees has value', () => {
    mockMageState.arcane.mage_arcane_arcance_subtlety = 1;
    mockMageState.frost.mage_frost_frostbite = 2;

    expect(generateStateString(mockMageState)).toBe('1--2');
  });

  it('should return correct string for an every tree has value', () => {
    mockMageState.arcane.mage_arcane_arcance_subtlety = 3;
    mockMageState.fire.mage_fire_improved_fire_blast = 2;
    mockMageState.frost.mage_frost_frostbite = 1;

    expect(generateStateString(mockMageState)).toBe('3-2-1');
  });
});
