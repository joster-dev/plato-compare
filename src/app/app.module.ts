import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LachesComponent } from './laches/laches.component';
import { PhaedrusComponent } from './phaedrus/phaedrus.component';
import { HomeComponent } from './home/home.component';
import { DialogueComponent } from './dialogue/dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    LachesComponent,
    PhaedrusComponent,
    HomeComponent,
    DialogueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
