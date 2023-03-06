import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialoguesComponent } from './dialogues/dialogues.component';
import { LachesComponent } from './laches/laches.component';

const routes: Routes = [
  { path: 'dialogues', component: DialoguesComponent },
  { path: 'laches', component: LachesComponent },
  { path: '', redirectTo: '/dialogues', pathMatch: 'full' },
  { path: '**', component: DialoguesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
