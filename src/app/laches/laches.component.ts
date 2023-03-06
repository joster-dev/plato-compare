import { Component, HostListener } from '@angular/core';
import { LachesAllen } from '../models/laches-allen.const';
import { LachesLamb } from '../models/laches-lamb.const';

@Component({
  selector: 'pc-laches',
  templateUrl: './laches.component.html',
  styleUrls: ['./laches.component.scss']
})
export class LachesComponent {
  // todo: standardize name spelling
  translations = [
    LachesLamb,
    LachesAllen,
  ];

  selectedTranslation = 0;
  selectedTurn = 0;
  selectedPhrase = 0;

  @HostListener('window:keydown', ['$event'])
  handleKeypress(event: KeyboardEvent) {
    const translation = this.translations[this.selectedTranslation];
    const turn = translation[this.selectedTurn];
    if (event.code === 'ArrowDown') {
      event.preventDefault();
      if (this.selectedPhrase < turn.speech.length - 1) {
        this.selectedPhrase = this.selectedPhrase + 1;
      }
      else if (this.selectedPhrase === turn.speech.length - 1 && this.selectedTurn < translation.length - 1) {
        this.selectedTurn = this.selectedTurn + 1;
        this.selectedPhrase = 0;
      }
    }
    if (event.code === 'ArrowUp') {
      event.preventDefault();
      if (this.selectedPhrase > 0) {
        this.selectedPhrase = this.selectedPhrase - 1;
      }
      else if (this.selectedPhrase === 0 && this.selectedTurn > 0) {
        this.selectedTurn = this.selectedTurn - 1;
        this.selectedPhrase = translation[this.selectedTurn].speech.length - 1;
      }
    }
    if (event.code === 'ArrowRight') {
      if (this.selectedTranslation < this.translations.length - 1) {
        this.selectedTranslation = this.selectedTranslation + 1;
      }
    }
    if (event.code === 'ArrowLeft') {
      if (this.selectedTranslation > 0) {
        this.selectedTranslation = this.selectedTranslation - 1;
      }
    }
  }
}
