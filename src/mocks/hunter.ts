import { RESOURCE_URI } from 'shared/constants/global';
import { TaletsOfClassType } from 'shared/constants/talentsData';

export const hunter: TaletsOfClassType[] = [{
  title: 'beast_mastery',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/361.jpg`,
  icon: `${RESOURCE_URI}/icons/large/ability_hunter_beasttaming.jpg`,
  talents: [{
    id: 'hunter_beast_mastery_improved_aspect_of_the_hawk',
    title: 'Improved Aspect of the Hawk',
    description: {
      1: 'While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 3% for 12 sec.',
      2: 'While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 6% for 12 sec.',
      3: 'While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 9% for 12 sec.',
      4: 'While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 12% for 12 sec.',
      5: 'While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 15% for 12 sec.',
    },
    icon: `${RESOURCE_URI}/icons/large/spell_nature_ravenform.jpg`,
    tier: 1,
    column: 2,
    max: 5,
  }],
}, {
  title: 'marksmanship',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/363.jpg`,
  icon: `${RESOURCE_URI}/icons/large/ability_marksmanship.jpg`,
  talents: [{
    id: 'hunter_marksmanship_improved_concussive_shot',
    title: 'Improved Concussive Shot',
    description: {
      1: 'Increases the duration of your Concussive Shot\'s daze effect by 1 sec.',
      2: 'Increases the duration of your Concussive Shot\'s daze effect by 2 sec.',
    },
    icon: `${RESOURCE_URI}/icons/large/spell_frost_stun.jpg`,
    tier: 1,
    column: 1,
    max: 2,
  }],
}, {
  title: 'survival',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/362.jpg`,
  icon: `${RESOURCE_URI}/icons/large/ability_hunter_swiftstrike.jpg`,
  talents: [{
    id: 'hunter_survival_improved_tracking',
    title: 'Improved Tracking',
    description: {
      1: 'While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 1%.',
      2: 'While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 2%.',
      3: 'While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 3%.',
      4: 'While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 4%.',
      5: 'While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 5%.',
    },
    icon: `${RESOURCE_URI}/icons/large/ability_hunter_improvedtracking.jpg`,
    tier: 1,
    column: 1,
    max: 5,
  }],
}];
