import { Dialogue } from "../models";
import { IonLoeb } from "../models/translations/ion-loeb.const";
import { IonCharacter } from "./ion-character.enum";

export const IonDialogue: Dialogue<IonCharacter> = {
  title: 'Ion',
  safeTitle: 'ion',
  translations: [
    IonLoeb,
  ],
  commentaries: [
  ],
};
