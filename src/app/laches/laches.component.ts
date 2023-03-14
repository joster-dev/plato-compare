import { Component } from '@angular/core';
import { LachesDialogue } from './laches-dialogue.const';

@Component({
  selector: 'pc-laches',
  templateUrl: './laches.component.html',
})
export class LachesComponent {
  readonly dialogue = LachesDialogue;
}
