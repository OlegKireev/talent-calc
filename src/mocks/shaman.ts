import { RESOURCE_URI } from 'shared/constants/global';
import { TaletsOfClassType } from 'shared/constants/talentsData';

export const shaman: TaletsOfClassType[] = [{
  title: 'elemental',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/261.jpg`,
  icon: `${RESOURCE_URI}/icons/large/spell_nature_lightning.jpg`,
  talents: [{
    id: 'shaman_elemental_convection',
    title: 'Convection',
    description: {
      1: 'Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, Lava Burst, and Wind Shear spells by 2%.',
      2: 'Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, Lava Burst, and Wind Shear spells by 4%.',
      3: 'Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, Lava Burst, and Wind Shear spells by 6%.',
      4: 'Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, Lava Burst, and Wind Shear spells by 8%.',
      5: 'Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, Lava Burst, and Wind Shear spells by 10%.',
    },
    icon: `${RESOURCE_URI}/icons/large/spell_nature_wispsplode.jpg`,
    tier: 1,
    column: 2,
    max: 5,
  }],
}, {
  title: 'enhancement',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/263.jpg`,
  icon: `${RESOURCE_URI}/icons/large/spell_nature_lightningshield.jpg`,
  talents: [{
    id: 'shaman_enhancement_enhancing_totems',
    title: 'Enhancing Totems',
    description: {
      1: 'Increases the effect of your Strength of Earth and Flametongue Totems by 5%.',
      2: 'Increases the effect of your Strength of Earth and Flametongue Totems by 10%.',
      3: 'Increases the effect of your Strength of Earth and Flametongue Totems by 15%.',
    },
    icon: `${RESOURCE_URI}/icons/large/spell_nature_earthbindtotem.jpg`,
    tier: 1,
    column: 1,
    max: 3,
  }],
}, {
  title: 'restoration',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/262.jpg`,
  icon: `${RESOURCE_URI}/icons/large/spell_nature_magicimmunity.jpg`,
  talents: [{
    id: 'shaman_restoration_improved_healing_wave',
    title: 'Improved Healing Wave',
    description: {
      1: 'Reduces the casting time of your Healing Wave spell by 0.1 sec.',
      2: 'Reduces the casting time of your Healing Wave spell by 0.2 sec.',
      3: 'Reduces the casting time of your Healing Wave spell by 0.3 sec.',
      4: 'Reduces the casting time of your Healing Wave spell by 0.4 sec.',
      5: 'Reduces the casting time of your Healing Wave spell by 0.5 sec.',
    },
    icon: `${RESOURCE_URI}/icons/large/spell_nature_magicimmunity.jpg`,
    tier: 1,
    column: 2,
    max: 5,
  }],
}];
