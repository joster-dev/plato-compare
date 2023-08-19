import { Dialogue } from '../dialogue.interface';
import { PhaedrusHermias } from '../commentaries';
import { PhaedrusLoeb, PhaedrusRobin } from '../translations';

export const PhaedrusDialogue: Dialogue = {
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
