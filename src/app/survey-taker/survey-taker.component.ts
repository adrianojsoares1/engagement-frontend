import {Component, Input, OnInit} from '@angular/core';
import { SurveyService } from '../survey.service';
import {Survey} from '../Survey';

@Component({
  selector: 'app-survey-taker',
  templateUrl: './survey-taker.component.html',
  styleUrls: ['./survey-taker.component.css']
})
export class SurveyTakerComponent implements OnInit {

  @Input() team: string;
  survey: Survey;
  questions: object;

  constructor(private surveyService: SurveyService) {
    this.questions = [1, 2, 3];
  }

  ngOnInit() {
    // this.getSurvey();
  }

  getSurvey(): void {
    this.surveyService.getSurvey().subscribe(survey => this.survey = survey);
  }

}
