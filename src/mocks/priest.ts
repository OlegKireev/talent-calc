import { RESOURCE_URI } from 'shared/constants/global';
import { TaletsOfClassType } from 'shared/constants/talentsData';

export const priest: TaletsOfClassType[] = [{
  title: 'discipline',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/201.jpg`,
  icon: `${RESOURCE_URI}/icons/large/spell_holy_wordfortitude.jpg`,
  talents: [{
    id: 'priest_discipline_unbreakable_will',
    title: 'Unbreakable Will',
    description: {
      1: 'Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 6%.',
      2: 'Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 12%.',
      3: 'Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 18%.',
      4: 'Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 24%.',
      5: 'Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 30%.',
    },
    icon: `${RESOURCE_URI}/icons/large/spell_magic_magearmor.jpg`,
    tier: 1,
    column: 2,
    max: 5,
  }],
}, {
  title: 'holy',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/202.jpg`,
  icon: `${RESOURCE_URI}/icons/large/spell_holy_guardianspirit.jpg`,
  talents: [{
    id: 'priest_holy_healing_focus',
    title: 'Healing Focus',
    description: {
      1: 'Reduces the pushback suffered from damaging attacks while casting any healing spell by 35%.',
      2: 'Reduces the pushback suffered from damaging attacks while casting any healing spell by 70%.',
    },
    icon: `${RESOURCE_URI}/icons/large/spell_holy_healingfocus.jpg`,
    tier: 1,
    column: 1,
    max: 2,
  }],
}, {
  title: 'shadow',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/203.jpg`,
  icon: `${RESOURCE_URI}/icons/large/spell_shadow_shadowwordpain.jpg`,
  talents: [{
    id: 'priest_shadow_spirit_tap',
    title: 'Spirit Tap',
    description: {
      1: 'Gives you a 33% chance to gain a 100% bonus to your Spirit after killing a target that yields experience or honor. For the duration, your mana will regenerate at a 83% rate while casting. Lasts 15 sec.',
      2: 'Gives you a 66% chance to gain a 100% bonus to your Spirit after killing a target that yields experience or honor. For the duration, your mana will regenerate at a 83% rate while casting. Lasts 15 sec.',
      3: 'Gives you a 100% chance to gain a 100% bonus to your Spirit after killing a target that yields experience or honor. For the duration, your mana will regenerate at a 83% rate while casting. Lasts 15 sec.',
    },
    icon: `${RESOURCE_URI}/icons/large/spell_shadow_requiem.jpg`,
    tier: 1,
    column: 1,
    max: 3,
  }],
}];
