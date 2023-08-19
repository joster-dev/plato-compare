import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChaosControlModule } from '@joster-dev/chaos-control';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { FormsModule } from '@angular/forms';
import { CommentaryComponent } from './commentary/commentary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogueComponent,
    CommentaryComponent,
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
