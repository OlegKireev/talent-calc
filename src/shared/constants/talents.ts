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
  'deathknight_frost_improved_icy_touch',
  'deathknight_frost_runic_power_mastery',
  'deathknight_frost_toughness',
  'deathknight_frost_icy_reach',
  'deathknight_frost_black_ice',
  'deathknight_frost_nerves_of_cold_steel',
  'deathknight_frost_icy_talons',
  'deathknight_frost_lichborne',
  'deathknight_frost_annihilation',
  'deathknight_frost_killing_machine',
  'deathknight_frost_chill_of_the_grave',
  'deathknight_frost_endless_winter',
  'deathknight_frost_frigid_dreadplate',
  'deathknight_frost_glacier_rot',
  'deathknight_frost_deathchill',
  'deathknight_frost_improved_icy_talons',
  'deathknight_frost_merciless_combat',
  'deathknight_frost_rime',
  'deathknight_frost_chilblains',
  'deathknight_frost_hungering_cold',
  'deathknight_frost_improved_frost_presence',
  'deathknight_frost_threat_of_thassarian',
  'deathknight_frost_blood_of_the_north',
  'deathknight_frost_unbreakable_armor',
  'deathknight_frost_acclimation',
  'deathknight_frost_frost_strike',
  'deathknight_frost_guile_of_gorefiend',
  'deathknight_frost_tundra_stalker',
  'deathknight_frost_howling_blast',

  'deathknight_unholy_vicious_strikes',
  'deathknight_unholy_virulence',
  'deathknight_unholy_anticipation',
  'deathknight_unholy_epidemic',
  'deathknight_unholy_morbidity',
  'deathknight_unholy_unholy_command',
  'deathknight_unholy_ravenous_dead',
  'deathknight_unholy_outbreak',
  'deathknight_unholy_necrosis',
  'deathknight_unholy_corpse_explosion',
  'deathknight_unholy_on_a_pale_horse',
  'deathknight_unholy_blood_caked_blade',
  'deathknight_unholy_night_of_the_dead',
  'deathknight_unholy_unholy_blight',
  'deathknight_unholy_impurity',
  'deathknight_unholy_dirge',
  'deathknight_unholy_desecration',
  'deathknight_unholy_magic_suppression',
  'deathknight_unholy_reaping',
  'deathknight_unholy_master_of_ghouls',
  'deathknight_unholy_desolation',
  'deathknight_unholy_anti_magic_zone',
  'deathknight_unholy_improved_unholy_presence',
  'deathknight_unholy_ghoul_frenzy',
  'deathknight_unholy_crypt_fever',
  'deathknight_unholy_bone_shield',
  'deathknight_unholy_wandering_plague',
  'deathknight_unholy_ebon_plaguebringer',
  'deathknight_unholy_scourge_strike',
  'deathknight_unholy_rage_of_rivendare',
  'deathknight_unholy_summon_gargoyle',
] as const;

const DRUID_TALENT_IDS = [
  'druid_balance_starlight_wrath',
  'druid_balance_genesis',
  'druid_balance_moonglow',
  'druid_balance_natures_majesty',
  'druid_balance_improved_moonfire',
  'druid_balance_brambles',
  'druid_balance_natures_grace',
  'druid_balance_natures_splendor',
  'druid_balance_natures_reach',
  'druid_balance_vengeance',
  'druid_balance_celestial_focus',
  'druid_balance_lunar_guidance',
  'druid_balance_insect_swarm',
  'druid_balance_improved_insect_swarm',
  'druid_balance_dreamstate',
  'druid_balance_moonfury',
  'druid_balance_balance_of_power',
  'druid_balance_moonkin_form',
  'druid_balance_improved_moonkin_form',
  'druid_balance_improved_faerie_fire',
  'druid_balance_owlkin_frenzy',
  'druid_balance_wrath_of_cenarius',
  'druid_balance_eclipse',
  'druid_balance_typhoon',
  'druid_balance_force_of_nature',
  'druid_balance_gale_winds',
  'druid_balance_earth_and_moon',
  'druid_balance_starfall',

  'druid_feral_ferocity',
  'druid_feral_feral_aggression',
  'druid_feral_feral_instinct',
  'druid_feral_savage_fury',
  'druid_feral_thick_hide',
  'druid_feral_feral_swiftness',
  'druid_feral_survival_instincts',
  'druid_feral_sharpened_claws',
  'druid_feral_shredding_attacks',
  'druid_feral_predatory_strikes',
  'druid_feral_primal_fury',
  'druid_feral_primal_precision',
  'druid_feral_brutal_impact',
  'druid_feral_feral_charge',
  'druid_feral_nurturing_instinct',
  'druid_feral_natural_reaction',
  'druid_feral_heart_of_the_wild',
  'druid_feral_survival_of_the_fittest',
  'druid_feral_leader_of_the_pack',
  'druid_feral_improved_leader_of_the_pack',
  'druid_feral_primal_tenacity',
  'druid_feral_protector_of_the_pack',
  'druid_feral_predatory_instincts',
  'druid_feral_infected_wounds',
  'druid_feral_king_of_the_jungle',
  'druid_feral_mangle',
  'druid_feral_improved_mangle',
  'druid_feral_rend_and_tear',
  'druid_feral_primal_gore',
  'druid_feral_berserk',

  'druid_restoration_improved_mark_of_the_wild',
  'druid_restoration_natures_focus',
  'druid_restoration_furor',
  'druid_restoration_naturalist',
  'druid_restoration_subtlety',
  'druid_restoration_natural_shapeshifter',
  'druid_restoration_intensity',
  'druid_restoration_omen_of_clarity',
  'druid_restoration_master_shapeshifter',
  'druid_restoration_tranquil_spirit',
  'druid_restoration_improved_rejuvenation',
  'druid_restoration_natures_swiftness',
  'druid_restoration_gift_of_nature',
  'druid_restoration_improved_tranquility',
  'druid_restoration_empowered_touch',
  'druid_restoration_natures_bounty',
  'druid_restoration_living_spirit',
  'druid_restoration_swiftmend',
  'druid_restoration_natural_erfection',
  'druid_restoration_empowered_rejuvenation',
  'druid_restoration_living_seed',
  'druid_restoration_revitalize',
  'druid_restoration_tree_of_life',
  'druid_restoration_improved_tree_of_life',
  'druid_restoration_improved_barkskin',
  'druid_restoration_gift_of_the_earthmother',
  'druid_restoration_wild_growth',
] as const;

const HUNTER_TALENT_IDS = [
  'hunter_beast_mastery_improved_aspect_of_the_hawk',
  'hunter_beast_mastery_endurance_training',
  'hunter_beast_mastery_focused_fire',
  'hunter_beast_mastery_improved_aspect_of_the_monkey',
  'hunter_beast_mastery_thick_hide',
  'hunter_beast_mastery_improved_revive_pet',
  'hunter_beast_mastery_pathfinding',
  'hunter_beast_mastery_aspect_mastery',
  'hunter_beast_mastery_unleashed_fury',
  'hunter_beast_mastery_improved_mend_pet',
  'hunter_beast_mastery_ferocity',
  'hunter_beast_mastery_spirit_bond',
  'hunter_beast_mastery_intimidation',
  'hunter_beast_mastery_bestial_discipline',
  'hunter_beast_mastery_animal_handler',
  'hunter_beast_mastery_frenzy',
  'hunter_beast_mastery_ferocious_inspiration',
  'hunter_beast_mastery_bestial_wrath',
  'hunter_beast_mastery_catlike_reflexes',
  'hunter_beast_mastery_invigoration',
  'hunter_beast_mastery_serpents_swiftness',
  'hunter_beast_mastery_longevity',
  'hunter_beast_mastery_the_beast_within',
  'hunter_beast_mastery_cobra_strikes',
  'hunter_beast_mastery_kindred_spirits',
  'hunter_beast_mastery_beast_mastery',

  'hunter_marksmanship_improved_concussive_shot',
  'hunter_marksmanship_focused_aim',
  'hunter_marksmanship_lethal_shots',
  'hunter_marksmanship_careful_aim',
  'hunter_marksmanship_improved_hunters_mark',
  'hunter_marksmanship_mortal_shots',
  'hunter_marksmanship_go_for_the_throat',
  'hunter_marksmanship_improved_arcane_shot',
  'hunter_marksmanship_aimed_shot',
  'hunter_marksmanship_rapid_killing',
  'hunter_marksmanship_improved_stings',
  'hunter_marksmanship_efficiency',
  'hunter_marksmanship_concussive_barrage',
  'hunter_marksmanship_readiness',
  'hunter_marksmanship_barrage',
  'hunter_marksmanship_combat_experience',
  'hunter_marksmanship_ranged_weapon_specialization',
  'hunter_marksmanship_piercing_shots',
  'hunter_marksmanship_trueshot_aura',
  'hunter_marksmanship_improved_barrage',
  'hunter_marksmanship_master_marksman',
  'hunter_marksmanship_rapid_recuperation',
  'hunter_marksmanship_wild_quiver',
  'hunter_marksmanship_silencing_shot',
  'hunter_marksmanship_improved_steady_shot',
  'hunter_marksmanship_marked_for_death',
  'hunter_marksmanship_chimera_shot',

  'hunter_survival_improved_tracking',
  'hunter_survival_hawk_eye',
  'hunter_survival_savage_strikes',
  'hunter_survival_surefooted',
  'hunter_survival_entrapment',
  'hunter_survival_trap_mastery',
  'hunter_survival_survival_instincts',
  'hunter_survival_survivalist',
  'hunter_survival_scatter_shot',
  'hunter_survival_deflection',
  'hunter_survival_survival_tactics',
  'hunter_survival_tnt',
  'hunter_survival_lock_and_load',
  'hunter_survival_hunter_vs_wild',
  'hunter_survival_killer_instinct',
  'hunter_survival_counterattack',
  'hunter_survival_lightning_reflexes',
  'hunter_survival_resourcefulness',
  'hunter_survival_expose_weakness',
  'hunter_survival_wyvern_sting',
  'hunter_survival_thrill_of_the_hunt',
  'hunter_survival_master_tactician',
  'hunter_survival_noxious_stings',
  'hunter_survival_point_of_no_escape',
  'hunter_survival_black_arrow',
  'hunter_survival_sniper_training',
  'hunter_survival_hunting_party',
  'hunter_survival_explosive_shot',
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
  'paladin_holy_seals_of_the_pure',
  'paladin_holy_healing_light',
  'paladin_holy_divine_intellect',
  'paladin_holy_unyielding_faith',
  'paladin_holy_aura_mastery',
  'paladin_holy_illumination',
  'paladin_holy_improved_lay_on_hands',
  'paladin_holy_improved_concentration_aura',
  'paladin_holy_improved_blessing_of_wisdom',
  'paladin_holy_blessed_hands',
  'paladin_holy_pure_of_heart',
  'paladin_holy_divine_favor',
  'paladin_holy_sanctified_light',
  'paladin_holy_purifying_power',
  'paladin_holy_holy_power',
  'paladin_holy_lights_grace',
  'paladin_holy_holy_shock',
  'paladin_holy_blessed_life',
  'paladin_holy_sacred_cleansing',
  'paladin_holy_holy_guidance',
  'paladin_holy_divine_illumination',
  'paladin_holy_judgements_of_the_pure',
  'paladin_holy_infusion_of_light',
  'paladin_holy_enlightened_judgements',
  'paladin_holy_beacon_of_light',

  'paladin_protection_divinity',
  'paladin_protection_divine_strength',
  'paladin_protection_stoicism',
  'paladin_protection_guardians_favor',
  'paladin_protection_anticipation',
  'paladin_protection_divine_sacrifice',
  'paladin_protection_improved_righteous_fury',
  'paladin_protection_toughness',
  'paladin_protection_divine_guardian',
  'paladin_protection_improved_hammer_of_justice',
  'paladin_protection_improved_devotion_aura',
  'paladin_protection_blessing_of_sanctuary',
  'paladin_protection_reckoning',
  'paladin_protection_sacred_duty',
  'paladin_protection_one_handed_weapon_specialization',
  'paladin_protection_spiritual_attunement',
  'paladin_protection_holy_shield',
  'paladin_protection_ardent_defender',
  'paladin_protection_redoubt',
  'paladin_protection_combat_expertise',
  'paladin_protection_touched_by_the_light',
  'paladin_protection_avengers_shield',
  'paladin_protection_guarded_by_the_light',
  'paladin_protection_shield_of_the_templar',
  'paladin_protection_judgements_of_the_just',
  'paladin_protection_hammer_of_the_righteous',

  'paladin_retribution_deflection',
  'paladin_retribution_benediction',
  'paladin_retribution_improved_judgements',
  'paladin_retribution_heart_of_the_crusader',
  'paladin_retribution_improved_blessing_of_might',
  'paladin_retribution_vindication',
  'paladin_retribution_conviction',
  'paladin_retribution_seal_of_command',
  'paladin_retribution_pursuit_of_justice',
  'paladin_retribution_eye_for_an_eye',
  'paladin_retribution_sanctity_of_battle',
  'paladin_retribution_crusade',
  'paladin_retribution_two_handed_weapon_specialization',
  'paladin_retribution_sanctified_retribution',
  'paladin_retribution_vengeance',
  'paladin_retribution_divine_purpose',
  'paladin_retribution_the_art_of_war',
  'paladin_retribution_repentance',
  'paladin_retribution_judgements_of_the_wise',
  'paladin_retribution_fanaticism',
  'paladin_retribution_sanctified_wrath',
  'paladin_retribution_swift_retribution',
  'paladin_retribution_crusader_strike',
  'paladin_retribution_sheath_of_light',
  'paladin_retribution_righteous_vengeance',
  'paladin_retribution_divine_storm',
] as const;

const PRIEST_TALENT_IDS = [
  'priest_discipline_unbreakable_will',
  'priest_discipline_twin_disciplines',
  'priest_discipline_silent_resolve',
  'priest_discipline_improved_inner_fire',
  'priest_discipline_improved_power_word_fortitude',
  'priest_discipline_martyrdom',
  'priest_discipline_meditation',
  'priest_discipline_inner_focus',
  'priest_discipline_improved_power_word_shield',
  'priest_discipline_absolution',
  'priest_discipline_mental_agility',
  'priest_discipline_improved_mana_burn',
  'priest_discipline_reflective_shield',
  'priest_discipline_mental_strength',
  'priest_discipline_soul_warding',
  'priest_discipline_focused_power',
  'priest_discipline_enlightenment',
  'priest_discipline_focused_will',
  'priest_discipline_power_infusion',
  'priest_discipline_improved_flash_heal',
  'priest_discipline_renewed_hope',
  'priest_discipline_rapture',
  'priest_discipline_aspiration',
  'priest_discipline_divine_aegis',
  'priest_discipline_pain_suppression',
  'priest_discipline_grace',
  'priest_discipline_borrowed_time',
  'priest_discipline_penance',

  'priest_holy_healing_focus',
  'priest_holy_improved_renew',
  'priest_holy_holy_specialization',
  'priest_holy_spell_warding',
  'priest_holy_divine_fury',
  'priest_holy_desperate_prayer',
  'priest_holy_blessed_recovery',
  'priest_holy_inspiration',
  'priest_holy_holy_reach',
  'priest_holy_improved_healing',
  'priest_holy_searing_light',
  'priest_holy_healing_prayers',
  'priest_holy_spirit_of_redemption',
  'priest_holy_spiritual_guidance',
  'priest_holy_surge_of_light',
  'priest_holy_spiritual_healing',
  'priest_holy_holy_concentration',
  'priest_holy_lightwell',
  'priest_holy_blessed_resilience',
  'priest_holy_body_and_soul',
  'priest_holy_empowered_healing',
  'priest_holy_serendipity',
  'priest_holy_empowered_renew',
  'priest_holy_circle_of_healing',
  'priest_holy_test_of_faith',
  'priest_holy_divine_providence',
  'priest_holy_guardian_spirit',

  'priest_shadow_spirit_tap',
  'priest_shadow_improved_spirit_tap',
  'priest_shadow_darkness',
  'priest_shadow_shadow_affinity',
  'priest_shadow_improved_shadow_word_pain',
  'priest_shadow_shadow_focus',
  'priest_shadow_improved_psychic_scream',
  'priest_shadow_improved_mind_blast',
  'priest_shadow_mind_flay',
  'priest_shadow_veiled_shadows',
  'priest_shadow_shadow_reach',
  'priest_shadow_shadow_weaving',
  'priest_shadow_silence',
  'priest_shadow_vampiric_embrace',
  'priest_shadow_improved_vampiric_embrace',
  'priest_shadow_focused_mind',
  'priest_shadow_mind_melt',
  'priest_shadow_improved_devouring_plague',
  'priest_shadow_shadowform',
  'priest_shadow_shadow_power',
  'priest_shadow_improved_shadowform',
  'priest_shadow_misery',
  'priest_shadow_psychic_horror',
  'priest_shadow_vampiric_touch',
  'priest_shadow_pain_and_suffering',
  'priest_shadow_twisted_faith',
  'priest_shadow_dispersion',
] as const;

const ROGUE_TALENT_IDS = [
  'rogue_assasination_improved_eviscerate',
  'rogue_assasination_remorseless_attacks',
  'rogue_assasination_malice',
  'rogue_assasination_ruthlessness',
  'rogue_assasination_blood_spatter',
  'rogue_assasination_puncturing_wounds',
  'rogue_assasination_vigor',
  'rogue_assasination_improved_expose_armor',
  'rogue_assasination_lethality',
  'rogue_assasination_vile_poisons',
  'rogue_assasination_improved_poisons',
  'rogue_assasination_fleet_footed',
  'rogue_assasination_cold_blood',
  'rogue_assasination_improved_kidney_shot',
  'rogue_assasination_quick_recovery',
  'rogue_assasination_seal_fate',
  'rogue_assasination_murder',
  'rogue_assasination_deadly_brew',
  'rogue_assasination_overkill',
  'rogue_assasination_deadened_nerves',
  'rogue_assasination_focused_attacks',
  'rogue_assasination_find_weakness',
  'rogue_assasination_master_poisoner',
  'rogue_assasination_mutilate',
  'rogue_assasination_turn_the_bables',
  'rogue_assasination_cut_to_the_chase',
  'rogue_assasination_hunger_for_blood',

  'rogue_combat_improved_gouge',
  'rogue_combat_improved_sinister_strike',
  'rogue_combat_dual_wield_specialization',
  'rogue_combat_improved_slice_and_dice',
  'rogue_combat_deflection',
  'rogue_combat_precision',
  'rogue_combat_endurance',
  'rogue_combat_riposte',
  'rogue_combat_close_quarters_combat',
  'rogue_combat_improved_kick',
  'rogue_combat_improved_sprint',
  'rogue_combat_lightning_reflexes',
  'rogue_combat_aggression',
  'rogue_combat_mace_specialization',
  'rogue_combat_blade_flurry',
  'rogue_combat_hack_and_slash',
  'rogue_combat_weapon_expertise',
  'rogue_combat_blade_twisting',
  'rogue_combat_vitality',
  'rogue_combat_adrenaline_rush',
  'rogue_combat_nerves_of_steel',
  'rogue_combat_throwing_specialization',
  'rogue_combat_combat_potency',
  'rogue_combat_unfair_advantage',
  'rogue_combat_surprise_attacks',
  'rogue_combat_savage_combat',
  'rogue_combat_prey_on_the_weak',
  'rogue_combat_killing_spree',

  'rogue_subtlety_spirit_tap',
  'rogue_subtlety_master_of_deception',
  'rogue_subtlety_opportunity',
  'rogue_subtlety_sleight_of_hand',
  'rogue_subtlety_dirty_tricks',
  'rogue_subtlety_camouflage',
  'rogue_subtlety_elusiveness',
  'rogue_subtlety_ghostly_strike',
  'rogue_subtlety_serrated_blades',
  'rogue_subtlety_setup',
  'rogue_subtlety_initiative',
  'rogue_subtlety_improved_ambush',
  'rogue_subtlety_heightened_senses',
  'rogue_subtlety_preparation',
  'rogue_subtlety_dirty_deeds',
  'rogue_subtlety_hemorrhage',
  'rogue_subtlety_master_of_subtlety',
  'rogue_subtlety_deadliness',
  'rogue_subtlety_enveloping_shadows',
  'rogue_subtlety_premeditation',
  'rogue_subtlety_cheat_death',
  'rogue_subtlety_sinister_calling',
  'rogue_subtlety_waylay',
  'rogue_subtlety_honor_among_thieves',
  'rogue_subtlety_shadowstep',
  'rogue_subtlety_filthy_tricks',
  'rogue_subtlety_slaughter_from_the_shadows',
  'rogue_subtlety_shadow_dance',
] as const;

const SHAMAN_TALENT_IDS = [
  'shaman_elemental_convection',
  'shaman_elemental_concussion',
  'shaman_elemental_call_of_flame',
  'shaman_elemental_elemental_warding',
  'shaman_elemental_elemental_devastation',
  'shaman_elemental_reverberation',
  'shaman_elemental_elemental_focus',
  'shaman_elemental_elemental_fury',
  'shaman_elemental_improved_fire_nova',
  'shaman_elemental_eye_of_the_storm',
  'shaman_elemental_elemental_reach',
  'shaman_elemental_call_of_thunder',
  'shaman_elemental_unrelenting_storm',
  'shaman_elemental_elemental_precision',
  'shaman_elemental_lightning_mastery',
  'shaman_elemental_elemental_mastery',
  'shaman_elemental_storm_earth_and_fire',
  'shaman_elemental_booming_echoes',
  'shaman_elemental_elemental_oath',
  'shaman_elemental_lightning_overload',
  'shaman_elemental_astral_shift',
  'shaman_elemental_totem_of_wrath',
  'shaman_elemental_lava_flows',
  'shaman_elemental_shamanism',
  'shaman_elemental_thunderstorm',

  'shaman_enhancement_enhancing_totems',
  'shaman_enhancement_earths_grasp',
  'shaman_enhancement_ancestral_knowledge',
  'shaman_enhancement_guardian_totems',
  'shaman_enhancement_thundering_strikes',
  'shaman_enhancement_improved_ghost_wolf',
  'shaman_enhancement_improved_shields',
  'shaman_enhancement_elemental_weapons',
  'shaman_enhancement_shamanistic_focus',
  'shaman_enhancement_anticipation',
  'shaman_enhancement_flurry',
  'shaman_enhancement_toughness',
  'shaman_enhancement_improved_windfury_totem',
  'shaman_enhancement_spirit_weapons',
  'shaman_enhancement_mental_dexterity',
  'shaman_enhancement_unleashed_rage',
  'shaman_enhancement_weapon_mastery',
  'shaman_enhancement_frozen_power',
  'shaman_enhancement_dual_wield_specialization',
  'shaman_enhancement_dual_wield',
  'shaman_enhancement_stormstrike',
  'shaman_enhancement_static_shock',
  'shaman_enhancement_lava_lash',
  'shaman_enhancement_improved_stormstrike',
  'shaman_enhancement_mental_quickness',
  'shaman_enhancement_shamanistic_rage',
  'shaman_enhancement_earthen_power',
  'shaman_enhancement_maelstrom_weapon',
  'shaman_enhancement_feral_spirit',

  'shaman_restoration_improved_healing_wave',
  'shaman_restoration_totemic_focus',
  'shaman_restoration_improved_reincarnation',
  'shaman_restoration_healing_grace',
  'shaman_restoration_tidal_focus',
  'shaman_restoration_improved_water_shield',
  'shaman_restoration_healing_focus',
  'shaman_restoration_tidal_force',
  'shaman_restoration_ancestral_healing',
  'shaman_restoration_restorative_totems',
  'shaman_restoration_tidal_mastery',
  'shaman_restoration_healing_way',
  'shaman_restoration_natures_swiftness',
  'shaman_restoration_focused_mind',
  'shaman_restoration_purification',
  'shaman_restoration_natures_guardian',
  'shaman_restoration_mana_tide_totem',
  'shaman_restoration_cleanse_spirit',
  'shaman_restoration_blessing_of_the_eternals',
  'shaman_restoration_improved_chain_heal',
  'shaman_restoration_natures_blessing',
  'shaman_restoration_ancestral_awakening',
  'shaman_restoration_earth_shield',
  'shaman_restoration_improved_earth_shield',
  'shaman_restoration_tidal_waves',
  'shaman_restoration_riptide',
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
