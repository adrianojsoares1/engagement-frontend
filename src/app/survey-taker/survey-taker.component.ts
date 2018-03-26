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
  selectedAnswer: string;

  constructor(private surveyService: SurveyService) {
    this.selectedAnswer = "";
    this.questions = [
      {q: 'How much Source Code Management (SCM) does your team use?',
        answers: ['No SCM',
          'SCM for application code only',
          '+ Configuration, Configuration Scripts, Infrastructure Code',
          '+ Test Source Code', '+ Builds and Containers']
      },

      {q: 'How much Source Code Branching does your team use?',
        answers: ['No Branching Strategy',
          'Multiple repositories (copies of source code) used instead of branching', 'Centralized workflow (single pint of entry for all changes)',
          'Feature branch workflow (dedicated branch for each feature versus using a centralized single location)',
          'Gitflow workflow (structured branching policy that accounts for features, hotfixes and releases)']
      }
    ];
  }

  selectAnswer(selection): void {
    this.selectedAnswer = selection;
    console.log("The selected answer is now " + this.selectedAnswer);
  }

  ngOnInit() {
    // this.getSurvey();
  }

  getSurvey(): void {
    this.surveyService.getSurvey().subscribe(survey => this.survey = survey);
  }

}
