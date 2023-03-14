import { Dialogue } from '../models/dialogue.interface';
import { LachesAllen } from './laches-allen.const';
import { LachesCharacter } from './laches-character.enum';
import { LachesLamb } from './laches-lamb.const';

export const LachesDialogue: Dialogue<LachesCharacter> = {
  title: 'Laches',
  safeTitle: 'laches',
  translations: [
    LachesLamb,
    LachesAllen,
  ],
};
