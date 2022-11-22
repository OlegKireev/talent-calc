import { type TalentsType } from 'shared/constants/talentsData';
import { deathknight } from './deathknight';
import { druid } from './druid';
import { hunter } from './hunter';
import { mage } from './mage';
import { paladin } from './paladin';
import { priest } from './priest';
import { rogue } from './rogue';
import { shaman } from './shaman';
import { warlock } from './warlock';
import { warrior } from './warrior';

export const TALENTS_TEMPLATE: TalentsType = {
  deathknight,
  druid,
  hunter,
  mage,
  paladin,
  priest,
  rogue,
  shaman,
  warlock,
  warrior,
};
