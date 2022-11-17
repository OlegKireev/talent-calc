const DEATHKNIGHT_TALENT_IDS = [
  'deathknight_blood_butchery',
  'deathknight_blood_butchery',
  'deathknight_blood_subversion',
  'deathknight_blood_blade_barrier',
  'deathknight_blood_bladed_armor',
  'deathknight_blood_scent_of_blood',
  'deathknight_blood_two_handed_weapon_specialization',
  'deathknight_blood_rune_tap',
  'deathknight_blood_dark_conviction',
  'deathknight_blood_death_rune_mastery',
  'deathknight_blood_improved_rune_tap',
  'deathknight_blood_spell_deflection',
  'deathknight_blood_vendetta',
  'deathknight_blood_bloody_strikes',
  'deathknight_blood_veteran_of_the_third_war',
  'deathknight_blood_mark_of_blood',
  'deathknight_blood_bloody_vengeance',
  'deathknight_blood_abominations_might',
  'deathknight_blood_bloodworms',
  'deathknight_blood_unholy_frenzy',
  'deathknight_blood_improved_blood_presence',
  'deathknight_blood_improved_death_strike',
  'deathknight_blood_sudden_doom',
  'deathknight_blood_vampiric_blood',
  'deathknight_blood_will_of_the_necropolis',
  'deathknight_blood_heart_strike',
  'deathknight_blood_might_of_mograine',
  'deathknight_blood_blood_gorged',
  'deathknight_blood_dancing_rune_weapon',

  'deathknight_frost_improved_icy_touch',
  'deathknight_unholy_vicious_strikes',
] as const;

const DRUID_TALENT_IDS = [
  'druid_balance_starlight_wrath',
  'druid_feral_ferocity',
  'druid_restoration_improved_mark_of_the_wild',
] as const;

const HUNTER_TALENT_IDS = [
  'hunter_beast_mastery_improved_aspect_of_the_hawk',
  'hunter_marksmanship_improved_concussive_shot',
  'hunter_survival_improved_tracking',
] as const;

const MAGE_TALENT_IDS = [
  'mage_arcane_arcane_subtlety',
  'mage_arcane_arcane_focus',
  'mage_arcane_arcane_stability',
  'mage_arcane_arcane_fortitude',
  'mage_arcane_magic_absorption',
  'mage_arcane_arcane_concentration',
  'mage_arcane_magic_attunement',
  'mage_arcane_spell_impact',
  'mage_arcane_student_of_the_mind',
  'mage_arcane_focus_magic',
  'mage_arcane_arcane_shielding',
  'mage_arcane_improved_counterspell',
  'mage_arcane_arcane_meditation',
  'mage_arcane_torment_the_weak',
  'mage_arcane_improved_blink',
  'mage_arcane_presence_of_mind',
  'mage_arcane_arcane_mind',
  'mage_arcane_prismatic_cloak',
  'mage_arcane_arcane_instability',
  'mage_arcane_arcane_potency',
  'mage_arcane_arcane_empowerment',
  'mage_arcane_arcane_power',
  'mage_arcane_incanters_absorption',
  'mage_arcane_arcane_flows',
  'mage_arcane_mind_mastery',
  'mage_arcane_slow',
  'mage_arcane_missile_barrage',
  'mage_arcane_netherwind_presence',
  'mage_arcane_spell_power',
  'mage_arcane_arcane_barrage',

  'mage_fire_incineration',
  'mage_fire_improved_fireball',
  'mage_fire_ignite',
  'mage_fire_burning_determination',
  'mage_fire_world_in_flames',
  'mage_fire_flame_throwing',
  'mage_fire_impact',
  'mage_fire_pyroblast',
  'mage_fire_burning_soul',
  'mage_fire_improved_scorch',
  'mage_fire_molten_shields',
  'mage_fire_master_of_elements',
  'mage_fire_playing_with_fire',
  'mage_fire_critical_mass',
  'mage_fire_blast_wave',
  'mage_fire_blazing_speed',
  'mage_fire_fire_power',
  'mage_fire_pyromaniac',
  'mage_fire_combustion',
  'mage_fire_molten_fury',
  'mage_fire_fiery_payback',
  'mage_fire_empowered_fire',
  'mage_fire_firestarter',
  'mage_fire_dragons_breath',
  'mage_fire_hot_streak',
  'mage_fire_burnout',
  'mage_fire_living_bomb',
  'mage_fire_improved_fire_blast',

  'mage_frost_frostbite',
  'mage_frost_improved_frostbolt',
  'mage_frost_ice_floes',
  'mage_frost_ice_shards',
  'mage_frost_fronst_warding',
  'mage_frost_precision',
  'mage_frost_permafrost',
  'mage_frost_piercing_ice',
  'mage_frost_icy_veins',
  'mage_frost_improved_blizzard',
  'mage_frost_arctic_reach',
  'mage_frost_frost_channeling',
  'mage_frost_shatter',
  'mage_frost_cold_snap',
  'mage_frost_improved_cone_of_cold',
  'mage_frost_frozen_core',
  'mage_frost_cold_as_ice',
  'mage_frost_winters_chill',
  'mage_frost_shattered_barrier',
  'mage_frost_ice_barrier',
  'mage_frost_arctic_winds',
  'mage_frost_emprowered_frostbolt',
  'mage_frost_fingers_of_frost',
  'mage_frost_brainfreeze',
  'mage_frost_summon_water_elemental',
  'mage_frost_enduring_winter',
  'mage_frost_chilled_to_the_bone',
  'mage_frost_deep_freeze',
] as const;

const PALADIN_TALENT_IDS = [
  'paladin_holy_spiritual_focus',
  'paladin_protection_divinity',
  'paladin_retribution_deflection',
] as const;

const PRIEST_TALENT_IDS = [
  'priest_discipline_unbreakable_will',
  'priest_holy_healing_focus',
  'priest_shadow_spirit_tap',
] as const;

const ROGUE_TALENT_IDS = [
  'rogue_assasination_improved_eviscerate',
  'rogue_combat_improved_gouge',
  'rogue_subtlety_spirit_tap',
] as const;

const SHAMAN_TALENT_IDS = [
  'shaman_elemental_convection',
  'shaman_enhancement_enhancing_totems',
  'shaman_restoration_improved_healing_wave',
] as const;

const WARLOCK_TALENT_IDS = [
  'warlock_affliction_improved_curse_of_agony',
  'warlock_demonology_improved_healthstone',
  'warlock_destruction_improved_shadow_bolt',
] as const;

const WARRIOR_TALENT_IDS = [
  'warrior_arms_improved_heroic_strike',
  'warrior_fury_armored_to_the_teeth',
  'warrior_protection_improved_bloodrage',
] as const;

export type DeathKnightTalentIdType = typeof DEATHKNIGHT_TALENT_IDS[number];
export type DruidTalentIdType = typeof DRUID_TALENT_IDS[number];
export type HunterTalentIdType = typeof HUNTER_TALENT_IDS[number];
export type MageTalentIdType = typeof MAGE_TALENT_IDS[number];
export type PaladinTalentIdType = typeof PALADIN_TALENT_IDS[number];
export type PriestTalentIdType = typeof PRIEST_TALENT_IDS[number];
export type ShamanTalentIdType = typeof ROGUE_TALENT_IDS[number];
export type RogueTalentIdType = typeof SHAMAN_TALENT_IDS[number];
export type WarlockTalentIdType = typeof WARLOCK_TALENT_IDS[number];
export type WarriorTalentIdType = typeof WARRIOR_TALENT_IDS[number];

export type CharacterTalentIdType = DeathKnightTalentIdType
| DruidTalentIdType
| HunterTalentIdType
| MageTalentIdType
| PaladinTalentIdType
| PriestTalentIdType
| RogueTalentIdType
| ShamanTalentIdType
| WarlockTalentIdType
| WarriorTalentIdType;
