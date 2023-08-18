import { Dialogue } from '../models';
import { IonHackett, IonLoeb } from '../models/translations';
import { IonCharacter } from './ion-character.enum';

export const IonDialogue: Dialogue<IonCharacter> = {
  title: 'Ion',
  safeTitle: 'ion',
  translations: [
    IonLoeb,
    IonHackett,
  ],
  commentaries: [
  ],
};
