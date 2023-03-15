import { Component, Input, HostListener } from '@angular/core';
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

  onClickPhrase(phraseIndex: number, turnIndex: number): void {
    this.selectedPhrase = phraseIndex;
    this.selectedTurn = turnIndex;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    const translation = this.model.translations[this.selectedTranslation];
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
      this.scrollToPhrase();
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
      this.scrollToPhrase();
    }
    if (event.code === 'ArrowRight') {
      event.preventDefault();
      if (this.selectedTranslation < this.model.translations.length - 1) {
        this.selectedTranslation = this.selectedTranslation + 1;
      }
      setTimeout(() => this.scrollToPhrase());
    }
    if (event.code === 'ArrowLeft') {
      event.preventDefault();
      if (this.selectedTranslation > 0) {
        this.selectedTranslation = this.selectedTranslation - 1;
      }
      setTimeout(() => this.scrollToPhrase());
    }
  }

  private scrollToPhrase(): void {
    const element = document.getElementById(`${this.model.safeTitle}-${this.selectedPhrase}-${this.selectedTurn}-${this.selectedTranslation}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
