import { Dialogue } from '../dialogue.interface';
import { PhaedrusHermias } from '../commentaries';
import { PhaedrusLoeb, PhaedrusRobin } from '../translations';
import { PhaedrusCharacter } from '../characters';

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
