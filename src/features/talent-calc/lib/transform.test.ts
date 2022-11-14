import { TALENTS_TEMPLATE } from 'mocks/talents';
import { mageTalentsState, MockMageTalentType } from 'mocks/talentsState';
import { type CharacterClassType } from 'shared/constants/global';
import { generateAllTalentsMap, generateStateString, generateTalentsState } from './transform';

describe('features/talent-calc/lib/transform/generateTalentsState()', () => {
  const selectedClass: CharacterClassType = 'mage';
  const talents = TALENTS_TEMPLATE[selectedClass];
  let state: MockMageTalentType;

  beforeEach(() => {
    state = JSON.parse(JSON.stringify(mageTalentsState));
  });

  it('should create correct an empty mage talentsData', () => {
    expect(generateTalentsState(talents)).toStrictEqual(state);
  });

  it('should load talents from the state in first tree', () => {
    state.arcane.mage_arcane_arcance_subtlety = 1;
    expect(generateTalentsState(talents, '1-0-0')).toStrictEqual(state);
  });

  it('should load talents from the state in second tree', () => {
    state.fire.mage_fire_improved_fire_blast = 1;
    expect(generateTalentsState(talents, '0-1-0')).toStrictEqual(state);
  });

  it('should load talents from the state in third tree', () => {
    state.frost.mage_frost_frostbite = 1;
    expect(generateTalentsState(talents, '0-0-1')).toStrictEqual(state);
  });

  it('should load talents from the state in first and second tree', () => {
    state.arcane.mage_arcane_arcance_subtlety = 1;
    state.fire.mage_fire_improved_fire_blast = 1;
    expect(generateTalentsState(talents, '1-1-0')).toStrictEqual(state);
  });

  it('should load talents from the state in second and third tree', () => {
    state.fire.mage_fire_improved_fire_blast = 1;
    state.frost.mage_frost_frostbite = 1;
    expect(generateTalentsState(talents, '0-1-1')).toStrictEqual(state);
  });

  it('should load talents from the state in first and third tree', () => {
    state.arcane.mage_arcane_arcance_subtlety = 1;
    state.frost.mage_frost_frostbite = 1;
    expect(generateTalentsState(talents, '1-0-1')).toStrictEqual(state);
  });

  it('should load talents from the state in every trees', () => {
    state.arcane.mage_arcane_arcance_subtlety = 1;
    state.fire.mage_fire_improved_fire_blast = 1;
    state.frost.mage_frost_frostbite = 1;
    expect(generateTalentsState(talents, '1-1-1')).toStrictEqual(state);
  });

  it('should load talents from the only one detailed tree', () => {
    state.frost.mage_frost_frostbite = 2;
    state.frost.mage_frost_imporved_frostbolt = 5;
    state.frost.mage_frost_ice_shards = 3;
    state.frost.mage_frost_icy_veins = 1;

    expect(generateTalentsState(talents, '--250300001')).toStrictEqual(state);
  });
});

describe('features/talent-calc/lib/transform/generateAllTalentsMap()', () => {
  it('should create keys with a talent id', () => {
    expect(generateAllTalentsMap(TALENTS_TEMPLATE)).toHaveProperty('deathknight_blood_butchery');
    expect(generateAllTalentsMap(TALENTS_TEMPLATE)).toHaveProperty('mage_frost_frostbite');
    expect(generateAllTalentsMap(TALENTS_TEMPLATE)).toHaveProperty('warrior_protection_improved_bloodrage');
  });
});

describe('features/talent-calc/lib/transform:generateStateString', () => {
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
