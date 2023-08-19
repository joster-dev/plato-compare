import { Dialogue } from '../dialogue.interface';
import { LachesAllen } from '../translations/laches-allen.const';
import { LachesCharacter } from '../characters/laches-character.enum';
import { LachesLoeb } from '../translations/laches-loeb.const';

export const LachesDialogue: Dialogue<LachesCharacter> = {
  title: 'Laches',
  safeTitle: 'laches',
  translations: [
    LachesLoeb,
    LachesAllen,
  ],
  commentaries: [],
};
