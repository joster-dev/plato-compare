import { Component, OnInit } from '@angular/core';
import { debounceTime, filter, Subject } from 'rxjs';
import { LachesDialogue } from '../laches/laches-dialogue.const';
import { Dialogue } from '../models/dialogue.interface';
import { PhaedrusDialogue } from '../phaedrus/phaedrus-dialogue.const';
import { IonDialogue } from '../ion/ion-dialogue.const';

@Component({
  selector: 'pc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dialogues: Dialogue[] = [
    LachesDialogue,
    PhaedrusDialogue,
    IonDialogue,
  ];

  searchText = '';
  search$ = new Subject<string>();
  searchResults: any[] = [];

  ngOnInit(): void {
    this.search$
      .pipe(
        debounceTime(500),
        filter(text => text.length > 2),
      )
      .subscribe(text => this.search(text));
  }

  search(text: string): void {
    this.searchResults.push(text);
  }
}
