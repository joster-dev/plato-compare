import { Dialogue } from '../models/dialogue.interface';
import { LachesAllen } from './laches-allen.const';
import { LachesCharacter } from './laches-character.enum';
import { LachesLoeb } from './laches-loeb.const';

export const LachesDialogue: Dialogue<LachesCharacter> = {
  title: 'Laches',
  safeTitle: 'laches',
  emoji: '🛡️',
  translations: [
    LachesLoeb,
    LachesAllen,
  ],
};
