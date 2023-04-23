import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LachesComponent } from './laches/laches.component';
import { PhaedrusComponent } from './phaedrus/phaedrus.component';
import { PhaedrusCommentaryComponent } from './phaedrus-commentary/phaedrus-commentary.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'laches', component: LachesComponent },
  { path: 'phaedrus', component: PhaedrusComponent },
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
