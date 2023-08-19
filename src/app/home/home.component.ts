import { Component, OnInit } from '@angular/core';
import { debounceTime, filter, Subject } from 'rxjs';
import { Dialogues } from '../models/dialogues/dialogues.const';

@Component({
  selector: 'pc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dialogues = Dialogues;
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
