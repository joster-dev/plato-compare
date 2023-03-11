import { Component, Input } from '@angular/core';
import { Dialogue } from '../models/dialogue.interface';

@Component({
  selector: 'pc-dialogue[model]',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss'],
})
export class DialogueComponent {
  @Input() model!: Dialogue<unknown>;

  @Input() selectedTranslation = 0;
  @Input() selectedTurn = 0;
  @Input() selectedPhrase = 0;
}
