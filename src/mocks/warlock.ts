import { RESOURCE_URI } from 'shared/constants/global';
import { TaletsOfClassType } from 'shared/constants/talentsData';

export const warlock: TaletsOfClassType[] = [{
  title: 'affliction',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/302.jpg`,
  icon: `${RESOURCE_URI}/icons/large/spell_shadow_deathcoil.jpg`,
  talents: [{
    id: 'warlock_affliction_improved_curse_of_agony',
    title: 'Improved Curse of Agony',
    description: {
      1: 'Increases the damage done by your Curse of Agony by 5%.',
      2: 'Increases the damage done by your Curse of Agony by 10%.',
    },
    icon: `${RESOURCE_URI}/icons/large/spell_shadow_curseofsargeras.jpg`,
    tier: 1,
    column: 1,
    max: 2,
  }],
}, {
  title: 'demonology',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/303.jpg`,
  icon: `${RESOURCE_URI}/icons/large/spell_shadow_metamorphosis.jpg`,
  talents: [{
    id: 'warlock_demonology_improved_healthstone',
    title: 'Improved Healthstone',
    description: {
      1: 'Increases the amount of Health restored by your Healthstone by 10%.',
      2: 'Increases the amount of Health restored by your Healthstone by 20%.',
    },
    icon: `${RESOURCE_URI}/icons/large/inv_stone_04.jpg`,
    tier: 1,
    column: 1,
    max: 2,
  }],
}, {
  title: 'destruction',
  backgroundImage: `${RESOURCE_URI}/talents/backgrounds/wrath/301.jpg`,
  icon: `${RESOURCE_URI}/icons/large/spell_shadow_rainoffire.jpg`,
  talents: [{
    id: 'warlock_destruction_improved_shadow_bolt',
    title: 'Improved Shadow Bolt',
    description: {
      1: 'Increases the damage done by your Shadow Bolt spell by 2%, and your Shadow Bolt has a 20% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.',
      2: 'Increases the damage done by your Shadow Bolt spell by 4%, and your Shadow Bolt has a 40% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.',
      3: 'Increases the damage done by your Shadow Bolt spell by 6%, and your Shadow Bolt has a 60% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.',
      4: 'Increases the damage done by your Shadow Bolt spell by 8%, and your Shadow Bolt has a 80% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.',
      5: 'Increases the damage done by your Shadow Bolt spell by 10%, and your Shadow Bolt has a 100% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.',
    },
    icon: `${RESOURCE_URI}/icons/large/spell_shadow_shadowbolt.jpg`,
    tier: 1,
    column: 2,
    max: 5,
  }],
}];
