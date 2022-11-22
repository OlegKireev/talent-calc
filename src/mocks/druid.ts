import { RESOURCE_URI } from 'shared/constants/global';
import { TaletsOfClassType } from 'shared/constants/talentsData';

export const druid: TaletsOfClassType[] = [{
  title: 'balance',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/283.jpg`,
  icon: `${RESOURCE_URI}/icons/large/spell_nature_starfall.jpg`,
  talents: [{
    id: 'druid_balance_starlight_wrath',
    title: 'Starlight Wrath',
    description: {
      1: 'Reduces the cast time of your Wrath and Starfire spells by 0.1 sec.',
      2: 'Reduces the cast time of your Wrath and Starfire spells by 0.2 sec.',
      3: 'Reduces the cast time of your Wrath and Starfire spells by 0.3 sec.',
      4: 'Reduces the cast time of your Wrath and Starfire spells by 0.4 sec.',
      5: 'Reduces the cast time of your Wrath and Starfire spells by 0.5 sec.',
    },
    icon: `${RESOURCE_URI}/icons/large/spell_nature_abolishmagic.jpg`,
    tier: 1,
    column: 2,
    max: 5,
  }],
}, {
  title: 'feral',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/281.jpg`,
  icon: `${RESOURCE_URI}/icons/large/ability_racial_bearform.jpg`,
  talents: [{
    id: 'druid_feral_ferocity',
    title: 'Ferocity',
    description: {
      1: 'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 1 Rage or Energy.',
      2: 'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 2 Rage or Energy.',
      3: 'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 3 Rage or Energy.',
      4: 'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 4 Rage or Energy.',
      5: 'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 5 Rage or Energy.',
    },
    icon: `${RESOURCE_URI}/icons/large/ability_hunter_pet_hyena.jpg`,
    tier: 1,
    column: 2,
    max: 5,
  }],
}, {
  title: 'restoration',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/282.jpg`,
  icon: `${RESOURCE_URI}/icons/large/spell_nature_healingtouch.jpg`,
  talents: [{
    id: 'druid_restoration_improved_mark_of_the_wild',
    title: 'Improved Mark of the Wild',
    description: {
      1: 'Increases the effects of your Mark of the Wild and Gift of the Wild spells by 20%, and increases all of your total attributes by 1%.',
      2: 'Increases the effects of your Mark of the Wild and Gift of the Wild spells by 40%, and increases all of your total attributes by 2%.',
    },
    icon: `${RESOURCE_URI}/icons/large/spell_nature_regeneration.jpg`,
    tier: 1,
    column: 1,
    max: 2,
  }],
}];
