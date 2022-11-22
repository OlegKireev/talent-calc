import { RESOURCE_URI } from 'shared/constants/global';
import { TaletsOfClassType } from 'shared/constants/talentsData';

export const rogue: TaletsOfClassType[] = [{
  title: 'assasination',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/182.jpg`,
  icon: `${RESOURCE_URI}/icons/large/ability_rogue_eviscerate.jpg`,
  talents: [{
    id: 'rogue_assasination_improved_eviscerate',
    title: 'Improved Eviscerate',
    description: {
      1: 'Increases the damage done by your Eviscerate ability by 7%.',
      2: 'Increases the damage done by your Eviscerate ability by 14%.',
      3: 'Increases the damage done by your Eviscerate ability by 20%.',
    },
    icon: `${RESOURCE_URI}/icons/large/ability_rogue_eviscerate.jpg`,
    tier: 1,
    column: 1,
    max: 3,
  }],
}, {
  title: 'combat',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/181.jpg`,
  icon: `${RESOURCE_URI}/icons/large/ability_backstab.jpg`,
  talents: [{
    id: 'rogue_combat_improved_gouge',
    title: 'Improved Gouge',
    description: {
      1: 'Increases the effect duration of your Gouge ability by 0.5 sec.',
      2: 'Increases the effect duration of your Gouge ability by 1 sec.',
      3: 'Increases the effect duration of your Gouge ability by 1.5 sec.',
    },
    icon: `${RESOURCE_URI}/icons/large/ability_gouge.jpg`,
    tier: 1,
    column: 1,
    max: 3,
  }],
}, {
  title: 'subtlety',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/183.jpg`,
  icon: `${RESOURCE_URI}/icons/large/ability_stealth.jpg`,
  talents: [{
    id: 'rogue_subtlety_spirit_tap',
    title: 'Relentless Strikes',
    description: {
      1: 'Your finishing moves have a 4% chance per combo point to restore 25 energy.',
      2: 'Your finishing moves have a 8% chance per combo point to restore 25 energy.',
      3: 'Your finishing moves have a 12% chance per combo point to restore 25 energy.',
      4: 'Your finishing moves have a 16% chance per combo point to restore 25 energy.',
      5: 'Your finishing moves have a 20% chance per combo point to restore 25 energy.',
    },
    icon: `${RESOURCE_URI}/icons/large/ability_warrior_decisivestrike.jpg`,
    tier: 1,
    column: 1,
    max: 5,
  }],
}];
