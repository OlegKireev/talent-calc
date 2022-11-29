import { RESOURCE_URI } from 'shared/constants/global';
import { TaletsOfClassType } from 'shared/constants/talentsData';

export const paladin: TaletsOfClassType[] = [{
  title: 'holy',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/382.jpg`,
  icon: `${RESOURCE_URI}/icons/large/spell_holy_holybolt.jpg`,
  talents: [{
    id: 'paladin_holy_spiritual_focus',
    title: 'Spiritual Focus',
    description: {
      1: 'Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 14%.',
      2: 'Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 28%.',
      3: 'Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 42%.',
      4: 'Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 56%.',
      // 5: 'Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 70%.',
    },
    icon: `${RESOURCE_URI}/icons/large/spell_arcane_blink.jpg`,
    tier: 1,
    column: 2,
    max: 5,
  }],
}, {
  title: 'protection',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/383.jpg`,
  icon: `${RESOURCE_URI}/icons/large/spell_holy_devotionaura.jpg`,
  talents: [{
    id: 'paladin_protection_divinity',
    title: 'Divinity',
    description: {
      1: 'Increases all healing done by you and all healing effects on you by 1%.',
      2: 'Increases all healing done by you and all healing effects on you by 2%.',
      3: 'Increases all healing done by you and all healing effects on you by 3%.',
      4: 'Increases all healing done by you and all healing effects on you by 4%.',
      5: 'Increases all healing done by you and all healing effects on you by 5%.',
    },
    icon: `${RESOURCE_URI}/icons/large/spell_holy_blindingheal.jpg`,
    tier: 1,
    column: 2,
    max: 5,
  }],
}, {
  title: 'retribution',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/381.jpg`,
  icon: `${RESOURCE_URI}/icons/large/spell_holy_auraoflight.jpg`,
  talents: [{
    id: 'paladin_retribution_deflection',
    title: 'Deflection',
    description: {
      1: 'Increases your Parry chance by 1%.',
      2: 'Increases your Parry chance by 2%.',
      3: 'Increases your Parry chance by 3%.',
      4: 'Increases your Parry chance by 4%.',
      5: 'Increases your Parry chance by 5%.',
    },
    icon: `${RESOURCE_URI}/icons/large/ability_parry.jpg`,
    tier: 1,
    column: 2,
    max: 5,
  }],
}];
