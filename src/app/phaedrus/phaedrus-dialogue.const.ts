import { Dialogue } from '../models/dialogue.interface';
import { PhaedrusHermias } from '../models/commentaries';
import { PhaedrusCharacter } from './phaedrus-character.enum';
import { PhaedrusLoeb } from '../models/translations/phaedrus-loeb.const';
import { PhaedrusRobin } from '../models/translations/phaedrus-robin.const';

export const PhaedrusDialogue: Dialogue<PhaedrusCharacter> = {
  title: 'Phaedrus',
  safeTitle: 'phaedrus',
  translations: [
    PhaedrusLoeb,
    PhaedrusRobin,
  ],
  commentaries: [
    PhaedrusHermias,
  ],
};
