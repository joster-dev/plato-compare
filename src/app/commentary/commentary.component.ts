import { Component, Input, OnInit } from '@angular/core';
import { Dialogue } from '../models';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialogues } from '../models/dialogues/dialogues.const';

@Component({
  selector: 'pc-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss'],
})
export class CommentaryComponent implements OnInit {
  model!: Dialogue;
  selectedCommentary = 0;

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
  }
}
