import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import { FindSurveyBoxComponent } from './find-survey-box/find-survey-box.component';
import {SurveyTakerComponent} from './survey-taker/survey-taker.component';

const routes: Routes = [
  {path: 'find', component: FindSurveyBoxComponent},
  {path: 'answer/:id', component: SurveyTakerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
