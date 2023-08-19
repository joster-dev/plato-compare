import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhaedrusCommentaryComponent } from './phaedrus-commentary/phaedrus-commentary.component';
import { DialogueComponent } from './dialogue/dialogue.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dialogue/:safeName', component: DialogueComponent },
  // { path: 'commentary/:safeName', component: CommentaryComponent },
  { path: 'phaedrus-commentary', component: PhaedrusCommentaryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
