import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FindSurveyBoxComponent } from './find-survey-box/find-survey-box.component';
import {
  MatButtonModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatCardModule,
  MatGridListModule, MatTabsModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { SurveyTakerComponent } from './survey-taker/survey-taker.component';
import {SurveyService} from './survey.service';


@NgModule({
  declarations: [
    AppComponent,
    FindSurveyBoxComponent,
    SurveyTakerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
