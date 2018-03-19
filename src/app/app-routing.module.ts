import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import { FindSurveyBoxComponent } from './find-survey-box/find-survey-box.component';

const routes: Routes = [
  {path: 'find', component: FindSurveyBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
