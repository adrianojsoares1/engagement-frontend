import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindSurveyBoxComponent } from './find-survey-box/find-survey-box.component';
import { SurveyTakerComponent } from './survey-taker/survey-taker.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SurveyNotFoundComponent} from './survey-not-found/survey-not-found.component';

const routes: Routes = [
  {path: 'find', component: FindSurveyBoxComponent},
  {path: 'answer/:id', component: SurveyTakerComponent},
  {path: '404', component: NotFoundComponent},
  {path: '500', component: SurveyNotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
