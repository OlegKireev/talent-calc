import { useTalentPermissions } from './useTalentPermissions';

const TOTAL_TO_UNBLOCK_ALL_TIERS = 50;

describe('features/talent-calc/ui/SpecializationTrees/Tree/Talent/useTalentPermissions', () => {
  const mockGetPreviousTotal = (tier: number) => TOTAL_TO_UNBLOCK_ALL_TIERS;

  it('should be able to increase with an initial talent state', () => {
    const { canIncrease } = useTalentPermissions({
      tier: 1,
      max: 5,
      value: 0,
      deepestTierWithValue: 1,
      isAvailable: true,
      isChildrenTalentsEmpty: true,
      getPreviousTotal: mockGetPreviousTotal,
    });
    expect(canIncrease).toBe(true);
  });

  it('shouldn\'t be able to increase when "value" and "max" are equal', () => {
    const { canIncrease } = useTalentPermissions({
      tier: 1,
      max: 5,
      value: 5,
      deepestTierWithValue: 1,
      isAvailable: true,
      isChildrenTalentsEmpty: true,
      getPreviousTotal: mockGetPreviousTotal,
    });
    expect(canIncrease).toBe(false);
  });

  it('shouldn\'t be able to increase/decrease when "isAvailable" is "false"', () => {
    const { canIncrease, canDecrease } = useTalentPermissions({
      tier: 1,
      max: 5,
      value: 0,
      deepestTierWithValue: 1,
      isAvailable: false,
      isChildrenTalentsEmpty: true,
      getPreviousTotal: mockGetPreviousTotal,
    });
    expect(canIncrease).toBe(false);
    expect(canDecrease).toBe(false);
  });

  it('should be able to decrease if a value > 0', () => {
    const { canDecrease } = useTalentPermissions({
      tier: 2,
      max: 3,
      value: 1,
      deepestTierWithValue: 4,
      isAvailable: true,
      isChildrenTalentsEmpty: true,
      getPreviousTotal: mockGetPreviousTotal,
    });
    expect(canDecrease).toBe(true);
  });

  it('shouldn\'t be able to decrease if a value === 0', () => {
    const { canDecrease } = useTalentPermissions({
      tier: 2,
      max: 3,
      value: 0,
      deepestTierWithValue: 4,
      isAvailable: true,
      isChildrenTalentsEmpty: true,
      getPreviousTotal: mockGetPreviousTotal,
    });
    expect(canDecrease).toBe(false);
  });

  it('should be able to decrease if this is a deepest tier with value', () => {
    const { canDecrease } = useTalentPermissions({
      tier: 5,
      max: 3,
      value: 2,
      deepestTierWithValue: 5,
      isAvailable: true,
      isChildrenTalentsEmpty: true,
      getPreviousTotal: mockGetPreviousTotal,
    });
    expect(canDecrease).toBe(true);
  });

  it('shouldn\'t be able to decrease if a deepest talent with value won\'t be available by previous tiers total', () => {
    const mockGetPreviousTotalNotEnough = (tier: number) => 15;

    const { canDecrease } = useTalentPermissions({
      tier: 2,
      max: 3,
      value: 1,
      deepestTierWithValue: 4,
      isAvailable: true,
      isChildrenTalentsEmpty: true,
      getPreviousTotal: mockGetPreviousTotalNotEnough,
    });
    expect(canDecrease).toBe(false);
  });

  it('should be able to decrease if a deepest talent with value will be available by previous tiers total', () => {
    const mockGetPreviousTotalEnough = (tier: number) => 16;

    const { canDecrease } = useTalentPermissions({
      tier: 2,
      max: 3,
      value: 1,
      deepestTierWithValue: 4,
      isAvailable: true,
      isChildrenTalentsEmpty: true,
      getPreviousTotal: mockGetPreviousTotalEnough,
    });
    expect(canDecrease).toBe(true);
  });
});
