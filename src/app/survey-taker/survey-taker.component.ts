import {Component, Input, OnInit} from '@angular/core';
import { SurveyService } from '../survey.service';
import {Survey} from '../Survey';
import { SURVEYS } from '../mock-surveys';

@Component({
  selector: 'app-survey-taker',
  templateUrl: './survey-taker.component.html',
  styleUrls: ['./survey-taker.component.css']
})
export class SurveyTakerComponent implements OnInit {

  @Input() team: string;
  survey: Survey;
  selectedAnswers: number[];

  constructor(private surveyService: SurveyService) {
    this.survey = <Survey>SURVEYS[0];

    this.selectedAnswers = Array(this.survey.groups[0].questions.length);
  }

  selectAnswer(selection, index): void {
    this.selectedAnswers[index] = selection;
    console.log("The selected answer at " + index + " is now " + this.selectedAnswers[index]);
  }

  ngOnInit() {
    // this.getSurvey();
  }

  getSurvey(): void {
    this.surveyService.getSurvey().subscribe(survey => this.survey = survey);
  }


}
