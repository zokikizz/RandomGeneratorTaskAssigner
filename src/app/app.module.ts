import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListCompetitorsComponent } from './list-competitors/list-competitors.component';
import { NewCompetitorComponent } from './new-competitor/new-competitor.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatDividerModule, MatInputModule,
  MatListModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ListCompetitorsComponent,
    NewCompetitorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
