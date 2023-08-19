import { Component } from '@angular/core';
import { PhaedrusDialogue } from '../models/dialogues/phaedrus-dialogue.const';

@Component({
  selector: 'pc-phaedrus-commentary',
  templateUrl: './phaedrus-commentary.component.html',
  styleUrls: ['./phaedrus-commentary.component.scss'],
})
export class PhaedrusCommentaryComponent {
  readonly dialogue = PhaedrusDialogue;
}
