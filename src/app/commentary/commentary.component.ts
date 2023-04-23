import { Component, Input } from '@angular/core';
import { Dialogue } from '../models';

@Component({
  selector: 'pc-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss'],
})
export class CommentaryComponent {
  @Input() model!: Dialogue<unknown>;

  selectedCommentary = 0;
}
