import { Component } from '@angular/core';
import { IonDialogue } from './ion-dialogue.const';

@Component({
  selector: 'pc-ion',
  templateUrl: './ion.component.html',
  styleUrls: ['./ion.component.scss'],
})
export class IonComponent {
  readonly dialogue = IonDialogue;
}
