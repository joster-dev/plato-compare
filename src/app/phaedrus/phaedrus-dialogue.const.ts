import { Dialogue } from '../models/dialogue.interface';
import { PhaedrusCharacter } from './phaedrus-character.enum';
import { PhaedrusLamb } from './phaedrus-lamb.const';
import { PhaedrusRobin } from './phaedrus-robin.const';

export const PhaedrusDialogue: Dialogue<PhaedrusCharacter> = {
  title: 'Phaedrus',
  safeTitle: 'phaedrus',
  translations: [
    PhaedrusLamb,
    PhaedrusRobin,
  ],
};
