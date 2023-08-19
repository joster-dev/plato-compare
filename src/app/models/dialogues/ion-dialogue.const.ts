import { Dialogue } from '..';
import { IonHackett, IonLoeb } from '../translations';
import { IonCharacter } from '../characters/ion-character.enum';

export const IonDialogue: Dialogue<IonCharacter> = {
  title: 'Ion',
  safeTitle: 'ion',
  translations: [
    IonLoeb,
    IonHackett,
  ],
  commentaries: [],
};
