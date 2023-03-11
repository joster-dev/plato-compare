import { Component } from '@angular/core';
import { LachesDialogue } from '../laches/laches-dialogue.const';

@Component({
  selector: 'pc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  dialogues = [
    LachesDialogue,
  ]
}
