import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FindSurveyBoxComponent } from './find-survey-box/find-survey-box.component';
import {
  MatButtonModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatCardModule,
  MatGridListModule, MatTabsModule, MatRadioModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { SurveyTakerComponent } from './survey-taker/survey-taker.component';
import {SurveyService} from './survey.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { SurveyNotFoundComponent } from './survey-not-found/survey-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FindSurveyBoxComponent,
    SurveyTakerComponent,
    NotFoundComponent,
    SurveyNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
