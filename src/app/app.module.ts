import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChaosControlModule } from '@joster-dev/chaos-control';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LachesComponent } from './laches/laches.component';
import { PhaedrusComponent } from './phaedrus/phaedrus.component';
import { HomeComponent } from './home/home.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { FormsModule } from '@angular/forms';
import { CommentaryComponent } from './commentary/commentary.component';
import { PhaedrusCommentaryComponent } from './phaedrus-commentary/phaedrus-commentary.component';
import { IonComponent } from './ion/ion.component';

@NgModule({
  declarations: [
    AppComponent,
    LachesComponent,
    PhaedrusComponent,
    HomeComponent,
    DialogueComponent,
    CommentaryComponent,
    PhaedrusCommentaryComponent,
    IonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChaosControlModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
