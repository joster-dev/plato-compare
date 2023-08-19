import { Component, Input, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Dialogue, Storage } from '../models';
import { Commentary } from '../models/commentary.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialogues } from '../models/dialogues/dialogues.const';

@Component({
  selector: 'pc-dialogue[model]',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss'],
})
export class DialogueComponent implements OnInit, OnDestroy {
  @Input() selectedTranslation = 0;
  @Input() selectedTurn = 0;
  @Input() selectedPhrase = 0;

  model!: Dialogue<unknown>;
  hasCommentary?: Commentary;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const safeName = this.activatedRoute.snapshot.paramMap.get('safeName');
    if (!safeName) {
      throw new Error('No safeName');
    }
    const dialogue = Dialogues.find(item => item.safeTitle === safeName);
    if (!dialogue) {
      this.router.navigate(['/home']);
      return;
    }
    this.model = dialogue;
    const storageString = window.localStorage.getItem(`${this.model.safeTitle}`);
    if (storageString !== null) {
      const storage: Storage = JSON.parse(storageString);
      this.selectedTranslation = storage.translation;
      this.selectedTurn = storage.turn;
      this.selectedPhrase = storage.phrase;
      setTimeout(() => this.scrollToPhrase());
      this.onChangeTurnOrPhrase();
    }
  }

  ngOnDestroy(): void {
    window.localStorage.setItem(this.model.safeTitle, JSON.stringify({
      translation: this.selectedTranslation,
      turn: this.selectedTurn,
      phrase: this.selectedPhrase,
    }));
  }

  onClickPhrase(phraseIndex: number, turnIndex: number): void {
    this.selectedPhrase = phraseIndex;
    this.selectedTurn = turnIndex;
    this.onChangeTurnOrPhrase();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    const translation = this.model.translations[this.selectedTranslation];
    const turn = translation.turns[this.selectedTurn];
    if (event.code === 'ArrowDown') {
      event.preventDefault();
      if (this.selectedPhrase < turn.speech.length - 1) {
        this.selectedPhrase = this.selectedPhrase + 1;
      }
      else if (this.selectedPhrase === turn.speech.length - 1 && this.selectedTurn < translation.turns.length - 1) {
        this.selectedTurn = this.selectedTurn + 1;
        this.selectedPhrase = 0;
      }
      this.onChangeTurnOrPhrase();
      this.scrollToPhrase();
    }
    if (event.code === 'ArrowUp') {
      event.preventDefault();
      if (this.selectedPhrase > 0) {
        this.selectedPhrase = this.selectedPhrase - 1;
      }
      else if (this.selectedPhrase === 0 && this.selectedTurn > 0) {
        this.selectedTurn = this.selectedTurn - 1;
        this.selectedPhrase = translation.turns[this.selectedTurn].speech.length - 1;
      }
      this.onChangeTurnOrPhrase();
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

  private onChangeTurnOrPhrase(): void {
    if (!this.model.commentaries) {
      this.hasCommentary = undefined;
      return;
    }
    this.hasCommentary = this.model.commentaries.find(item => item.comments.some(comment => comment.turn === this.selectedTurn && comment.phrase === this.selectedPhrase));
  }
}
