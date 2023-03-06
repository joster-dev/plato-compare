import { Component, Input } from '@angular/core';
import { LachesCharacter } from '../models/laches-character.enum';

@Component({
  selector: 'pc-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent {
  @Input() model: { character: LachesCharacter, speech: string[] }[] = [];
}
