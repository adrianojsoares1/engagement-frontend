import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import {Survey} from '../Survey';

@Component({
  selector: 'app-survey-taker',
  templateUrl: './survey-taker.component.html',
  styleUrls: ['./survey-taker.component.css']
})
export class SurveyTakerComponent implements OnInit {

  survey: Survey;

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
  }

  getSurvey(): void {
    this.survey = this.surveyService.getSurvey();
  }

}
