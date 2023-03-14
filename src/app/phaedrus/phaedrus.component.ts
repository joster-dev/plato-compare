import { Component } from '@angular/core';
import { PhaedrusDialogue } from './phaedrus-dialogue.const';

@Component({
  selector: 'pc-phaedrus',
  templateUrl: './phaedrus.component.html',
})
export class PhaedrusComponent {
  readonly dialogue = PhaedrusDialogue;
}
