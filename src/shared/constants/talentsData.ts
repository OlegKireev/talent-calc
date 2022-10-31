import { CharacterClassUnion } from './global';

export type TalentTierType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type TalentColumnType = 1 | 2 | 3 | 4;
export type TalentMaxValueType = 1 | 2 | 3 | 4 | 5;
export type AbilityCastDuration = number | 'instant' | 'chanelled';
export type AbilityCooldown = number;
export type AbilityCosts = string;
export type AbilityRange = number;

export type TalentType = {
  title: string,
  id: string,
  // TODO: make dependence of 'max'
  description: {
    1: string,
    2?: string,
    3?: string,
    4?: string,
    5?: string,
  },
  icon: string,
  tier: TalentTierType,
  column: TalentColumnType,
  max: TalentMaxValueType,
  castDuration?: AbilityCastDuration,
  cooldown?: AbilityCooldown,
  costs?: AbilityCosts,
  range?: AbilityRange,
};

export type TaletsOfClassType = {
  title: string,
  backgroundImage: string,
  talents: TalentType[]
};

export type TalentsType = {
  [key in CharacterClassUnion]?: TaletsOfClassType[]
};

export const talentsData: TalentsType = {
  mage: [{
    title: 'frost',
    backgroundImage: 'https://wow.zamimg.com/images/wow/talents/backgrounds/wrath/61.jpg',
    talents: [{
      id: 'mage_frost_frostbite',
      title: 'Frostbite',
      description: {
        1: 'Gives your Chill effects a 5% chance to freeze the target for 5 sec.',
        2: 'Gives your Chill effects a 10% chance to freeze the target for 5 sec.',
        3: 'Gives your Chill effects a 15% chance to freeze the target for 5 sec.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostarmor.jpg',
      tier: 1,
      column: 1,
      max: 3,
    }, {
      id: 'mage_frost_imporved_frostbolt',
      title: 'Improved Frostbolt',
      description: {
        1: 'Reduces the casting time of your Frostbolt spell by 0.1 sec.',
        2: 'Reduces the casting time of your Frostbolt spell by 0.2 sec.',
        3: 'Reduces the casting time of your Frostbolt spell by 0.3 sec.',
        4: 'Reduces the casting time of your Frostbolt spell by 0.4 sec.',
        5: 'Reduces the casting time of your Frostbolt spell by 0.5 sec.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt02.jpg',
      tier: 1,
      column: 2,
      max: 5,
    }, {
      id: 'mage_frost_ice_floes',
      title: 'Ice Floes',
      description: {
        1: 'Reduces the cooldown of your Frost Nova, Cone of Cold, Ice Block and Icy Veins spells by 7%.',
        2: 'Reduces the cooldown of your Frost Nova, Cone of Cold, Ice Block and Icy Veins spells by 14%.',
        3: 'Reduces the cooldown of your Frost Nova, Cone of Cold, Ice Block and Icy Veins spells by 20%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_icefloes.jpg',
      tier: 1,
      column: 3,
      max: 3,
    }, {
      id: 'mage_frost_ice_shards',
      title: 'Ice Shards',
      description: {
        1: 'Increases the critical strike damage bonus of your Frost spells by 33%.',
        2: 'Increases the critical strike damage bonus of your Frost spells by 66%.',
        3: 'Increases the critical strike damage bonus of your Frost spells by 100%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_iceshard.jpg',
      tier: 2,
      column: 1,
      max: 3,
    }, {
      id: 'mage_frost_fronst_warding',
      title: 'Frost Warding',
      description: {
        1: 'Increases the armor and resistances given by your Frost Armor and Ice Armor spells by 25%. &nbsp;In addition, gives your Frost Ward and Fire Ward a 15% chance to negate the warded damage spell and restore mana equal to the damage caused.',
        2: 'Increases the armor and resistances given by your Frost Armor and Ice Armor spells by 50%. &nbsp;In addition, gives your Frost Ward and Fire Ward a 30% chance to negate the warded damage spell and restore mana equal to the damage caused.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostward.jpg',
      tier: 2,
      column: 2,
      max: 2,
    }, {
      id: 'mage_frost_precision',
      title: 'Precision',
      description: {
        1: 'Reduces the mana cost and increases your chance to hit with spells by 1%.',
        2: 'Reduces the mana cost and increases your chance to hit with spells by 2%.',
        3: 'Reduces the mana cost and increases your chance to hit with spells by 3%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_ice_magicdamage.jpg',
      tier: 2,
      column: 3,
      max: 3,
    }, {
      id: 'mage_frost_permafrost',
      title: 'Permafrost',
      description: {
        1: 'Increases the duration of your Chill effects by 2 sec, reduces the target\'s speed by an additional 4%, and reduces the target\'s healing received by 7%.',
        2: 'Increases the duration of your Chill effects by 2 sec, reduces the target\'s speed by an additional 7%, and reduces the target\'s healing received by 13%.',
        3: 'Increases the duration of your Chill effects by 2 sec, reduces the target\'s speed by an additional 10%, and reduces the target\'s healing received by 20%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_wisp.jpg',
      tier: 2,
      column: 4,
      max: 3,
    }, {
      id: 'mage_frost_piercing_ice',
      title: 'Piercing Ice',
      description: {
        1: 'Increases the damage done by your Frost spells by 2%.',
        2: 'Increases the damage done by your Frost spells by 4%.',
        3: 'Increases the damage done by your Frost spells by 6%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt.jpg',
      tier: 3,
      column: 1,
      max: 3,
    }, {
      id: 'mage_frost_icy_veins',
      title: 'Icy Veins',
      description: {
        1: 'Hastens your spellcasting, increasing spell casting speed by 20% and reduces the pushback suffered from damaging attacks while casting by 100%. &nbsp;Lasts 20 sec.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_coldhearted.jpg',
      tier: 3,
      column: 2,
      max: 1,
      cooldown: 180,
      castDuration: 'instant',
      costs: '3% of base mana',
    }, {
      id: 'mage_frost_improved_blizzard',
      title: 'Improved Blizzard',
      description: {
        1: 'Adds a chill effect to your Blizzard spell. &nbsp;This effect lowers the target\'s movement speed by 25%. &nbsp;Lasts 1.50 sec',
        2: 'Adds a chill effect to your Blizzard spell. &nbsp;This effect lowers the target\'s movement speed by 40%. &nbsp;Lasts 1.50 sec',
        3: 'Adds a chill effect to your Blizzard spell. &nbsp;This effect lowers the target\'s movement speed by 50%. &nbsp;Lasts 1.50 sec',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_icestorm.jpg',
      tier: 3,
      column: 3,
      max: 3,
    }, {
      id: 'mage_frost_arctic_reach',
      title: 'Arctic Reach',
      description: {
        1: 'Increases the range of your Frostbolt, Ice Lance, Deep Freeze and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 10%.',
        2: 'Increases the range of your Frostbolt, Ice Lance, Deep Freeze and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 20%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_darkritual.jpg',
      tier: 4,
      column: 1,
      max: 2,
    }, {
      id: 'mage_frost_frost_channeling',
      title: 'Frost Channeling',
      description: {
        1: 'Reduces the mana cost of all spells by 4% and reduces the threat caused by your Frost spells by 4%.',
        2: 'Reduces the mana cost of all spells by 7% and reduces the threat caused by your Frost spells by 7%.',
        3: 'Reduces the mana cost of all spells by 10% and reduces the threat caused by your Frost spells by 10%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_stun.jpg',
      tier: 4,
      column: 2,
      max: 3,
    }, {
      id: 'mage_frost_shatter',
      title: 'Shatter',
      description: {
        1: 'Increases the critical strike chance of all your spells against frozen targets by 17%.',
        2: 'Increases the critical strike chance of all your spells against frozen targets by 34%.',
        3: 'Increases the critical strike chance of all your spells against frozen targets by 50%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostshock.jpg',
      tier: 4,
      column: 3,
      max: 3,
    }, {
      id: 'mage_frost_cold_snap',
      title: 'Cold Snap',
      description: {
        1: 'Reduces the mana cost of all spells by 4% and reduces the threat caused by your Frost spells by 4%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_wizardmark.jpg',
      tier: 5,
      column: 2,
      max: 1,
      cooldown: 480,
      castDuration: 'instant',
    }, {
      id: 'mage_frost_improved_cone_of_cold',
      title: 'Improved Cone of Cold',
      description: {
        1: 'Increases the damage dealt by your Cone of Cold spell by 15%.',
        2: 'Increases the damage dealt by your Cone of Cold spell by 25%.',
        3: 'Increases the damage dealt by your Cone of Cold spell by 35%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_glacier.jpg',
      tier: 5,
      column: 3,
      max: 3,
    }, {
      id: 'mage_frost_frozen_core',
      title: 'Frozen Core',
      description: {
        1: 'Reduces the damage taken from all spells by 2%.',
        2: 'Reduces the damage taken from all spells by 4%.',
        3: 'Reduces the damage taken from all spells by 6%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frozencore.jpg',
      tier: 5,
      column: 4,
      max: 3,
    }, {
      id: 'mage_frost_cold_as_ice',
      title: 'Cold as Ice',
      description: {
        1: 'Reduces the cooldown of your Cold Snap, Ice Barrier and Summon Water Elemental spells by 10%.',
        2: 'Reduces the cooldown of your Cold Snap, Ice Barrier and Summon Water Elemental spells by 20%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mage_coldasice.jpg',
      tier: 6,
      column: 1,
      max: 2,
    }, {
      id: 'mage_frost_winters_chill',
      title: 'Winter\'s Chill',
      description: {
        1: 'Increases your chance to critically hit with Frostbolt by an additional 1% and gives your Frost damage spells a 33% chance to apply the Winter\'s Chill effect, which increases the chance spells will critically hit the target by 1% for 15 sec. &nbsp;Stacks up to 5 times.',
        2: 'Increases your chance to critically hit with Frostbolt by an additional 2% and gives your Frost damage spells a 66% chance to apply the Winter\'s Chill effect, which increases the chance spells will critically hit the target by 1% for 15 sec. &nbsp;Stacks up to 5 times.',
        3: 'Increases your chance to critically hit with Frostbolt by an additional 3% and gives your Frost damage spells a 100% chance to apply the Winter\'s Chill effect, which increases the chance spells will critically hit the target by 1% for 15 sec. &nbsp;Stacks up to 5 times.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_chillingblast.jpg',
      tier: 6,
      column: 3,
      max: 3,
    }, {
      id: 'mage_frost_shattered_barrier',
      title: 'Shattered Barrier',
      description: {
        1: 'Gives your Ice Barrier spell a 50% chance to freeze all enemies within 10 yds for 8 sec when it is destroyed.',
        2: 'Gives your Ice Barrier spell a 100% chance to freeze all enemies within 10 yds for 8 sec when it is destroyed.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mage_shattershield.jpg',
      tier: 7,
      column: 1,
      max: 2,
    }, {
      id: 'mage_frost_ice_barrier',
      title: 'Ice Barrier',
      description: {
        1: 'Instantly shields you, absorbing 455 damage. &nbsp;Lasts 1 min. &nbsp;While the shield holds, spellcasting will not be delayed by damage.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_ice_lament.jpg',
      tier: 7,
      column: 2,
      max: 1,
      cooldown: 30,
      costs: '21% of base mana',
      castDuration: 'instant',
    }, {
      id: 'mage_frost_arctic_winds',
      title: 'Arctic Winds',
      description: {
        1: 'Increases all Frost damage you cause by 1% and reduces the chance melee and ranged attacks will hit you by 1%.',
        2: 'Increases all Frost damage you cause by 2% and reduces the chance melee and ranged attacks will hit you by 2%.',
        3: 'Increases all Frost damage you cause by 3% and reduces the chance melee and ranged attacks will hit you by 3%.',
        4: 'Increases all Frost damage you cause by 4% and reduces the chance melee and ranged attacks will hit you by 4%.',
        5: 'Increases all Frost damage you cause by 5% and reduces the chance melee and ranged attacks will hit you by 5%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_arcticwinds.jpg',
      tier: 7,
      column: 3,
      max: 5,
    }, {
      id: 'mage_frost_emprowered_frostbolt',
      title: 'Empowered Frostbolt',
      description: {
        1: 'Increases the damage of your Frostbolt spell by an amount equal to 5% of your spell power and reduces the cast time by 0.1 sec.',
        2: 'Increases the damage of your Frostbolt spell by an amount equal to 10% of your spell power and reduces the cast time by 0.2 sec.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt02.jpg',
      tier: 8,
      column: 2,
      max: 2,
    }, {
      id: 'mage_frost_fingers_of_frost',
      title: 'Fingers of Frost',
      description: {
        1: 'Gives your Chill effects a 7% chance to grant you the Fingers of Frost effect, which treats your next 2 spells cast as if the target were Frozen. &nbsp;Lasts 15 sec.',
        2: 'Gives your Chill effects a 15% chance to grant you the Fingers of Frost effect, which treats your next 2 spells cast as if the target were Frozen. &nbsp;Lasts 15 sec.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mage_wintersgrasp.jpg',
      tier: 8,
      column: 3,
      max: 2,
    }, {
      id: 'mage_frost_brainfreeze',
      title: 'Brain Freeze',
      description: {
        1: 'Your Frost damage spells with chilling effects have a 5% chance to cause your next Fireball or Frostfire Bolt spell to be instant cast and cost no mana.',
        2: 'Your Frost damage spells with chilling effects have a 10% chance to cause your next Fireball or Frostfire Bolt spell to be instant cast and cost no mana.',
        3: 'Your Frost damage spells with chilling effects have a 15% chance to cause your next Fireball or Frostfire Bolt spell to be instant cast and cost no mana.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mage_brainfreeze.jpg',
      tier: 9,
      column: 1,
      max: 3,
    }, {
      id: 'mage_frost_summon_water_elemental',
      title: 'Summon Water Elemental',
      description: {
        1: 'Summon a Water Elemental to fight for the caster for 45 sec.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_summonwaterelemental_2.jpg',
      tier: 9,
      column: 2,
      max: 1,
      cooldown: 180,
      costs: '16 % of base mana',
      castDuration: 'instant',
    }, {
      id: 'mage_frost_enduring_winter',
      title: 'Enduring Winter',
      description: {
        1: 'Increases the duration of your Summon Water Elemental spell by 5 sec and your Frostbolt spell has a 33% chance to grant up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec. &nbsp;This effect cannot occur more often than once every 6 sec.',
        2: 'Increases the duration of your Summon Water Elemental spell by 10 sec and your Frostbolt spell has a 66% chance to grant up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec. &nbsp;This effect cannot occur more often than once every 6 sec.',
        3: 'Increases the duration of your Summon Water Elemental spell by 15 sec and your Frostbolt spell has a 100% chance to grant up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec. &nbsp;This effect cannot occur more often than once every 6 sec.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_summonwaterelemental_2.jpg',
      tier: 9,
      column: 3,
      max: 3,
    }, {
      id: 'mage_frost_chilled_to_the_bone',
      title: 'Chilled to the Bone',
      description: {
        1: 'Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 1% and reduces the movement speed of all chilled targets by an additional 2%.',
        2: 'Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 2% and reduces the movement speed of all chilled targets by an additional 4%.',
        3: 'Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 3% and reduces the movement speed of all chilled targets by an additional 6%.',
        4: 'Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 4% and reduces the movement speed of all chilled targets by an additional 8%.',
        5: 'Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 5% and reduces the movement speed of all chilled targets by an additional 10%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mage_chilledtothebone.jpg',
      tier: 10,
      column: 2,
      max: 5,
    }, {
      id: 'mage_frost_deep_freeze',
      title: 'Deep Freeze',
      description: {
        1: 'Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 5% and reduces the movement speed of all chilled targets by an additional 10%.',
      },
      icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mage_deepfreeze.jpg',
      tier: 11,
      column: 2,
      max: 1,
      castDuration: 'instant',
      cooldown: 30,
      costs: '9% of base mana',
      range: 30,
    },
    ],
  }],
};
