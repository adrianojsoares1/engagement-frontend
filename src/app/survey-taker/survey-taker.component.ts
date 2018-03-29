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
  selectedAnswers: number[][];
  selectedTab: number = 0;

  AMOUNT_OF_GROUPS: number;

  constructor(private surveyService: SurveyService) {
    this.survey = <Survey>SURVEYS[0];
    this.AMOUNT_OF_GROUPS = this.survey.groups.length;

    this.selectedAnswers = Array.apply(null, Array(this.AMOUNT_OF_GROUPS))
      .map((_, index) => Array(this.survey.groups[index].questions.length));

  }

  selectAnswer(selection, tab, tab_index): void {
    this.selectedAnswers[tab][tab_index] = selection;
    console.log("The selected answer in tab: " + tab + " at pos: " + tab_index + " is now " + this.selectedAnswers[tab][tab_index]);
  }

  selectTab(toAdd: number, tab) {
    let sum = tab + toAdd;
    if (sum >= 0 && sum < this.AMOUNT_OF_GROUPS) this.selectedTab = sum;
    else console.warn("No more tabs to see in this direction!");
  }

  ngOnInit() {
    // this.getSurvey();
  }

  getSurvey(): void {
    this.surveyService.getSurvey().subscribe(survey => this.survey = survey);
  }


}
