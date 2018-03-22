import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FindSurveyBoxComponent } from './find-survey-box/find-survey-box.component';
import { MatButtonModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatCardModule} from '@angular/material';
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
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
