import {Component, Input, OnInit, Inject, OnChanges} from '@angular/core';
import { SurveyService } from '../survey.service';
import { Survey } from '../Survey';
import { SURVEYS } from '../mock-surveys';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-survey-taker',
  templateUrl: './survey-taker.component.html',
  styleUrls: ['./survey-taker.component.css']
})
export class SurveyTakerComponent implements OnInit{

  reactiveForm: FormGroup;
  @Input() team: string;
  survey: Survey;
  selectedTab = 0;

  AMOUNT_OF_GROUPS: number;

  constructor(private surveyService: SurveyService, @Inject(FormBuilder) private fb: FormBuilder) {
    this.survey = <Survey>SURVEYS[0];
    this.AMOUNT_OF_GROUPS = this.survey.groups.length;

    this.reactiveForm = new FormGroup({
      name: new FormControl('', Validators.required),
      groups: new FormArray(this.groups, Validators.required)
    });

  }

  get groups() : FormArray[] {
    let forms: FormArray[] = [];
    for(let i = 0; i < this.AMOUNT_OF_GROUPS; i++)
      forms.push(new FormArray(this.getQuestions(i), Validators.required));

    return forms;
  }

   getQuestions(index) : FormControl[] {
    let controls: FormControl[] = [];
    for(let j = 0; j < this.survey.groups[index].questions.length; j++)
      controls.push(new FormControl(null, Validators.required));

    return controls;
  }

  selectTab(toAdd: number, tab) {
    let sum = tab + toAdd;
    if (sum >= 0 && sum < this.AMOUNT_OF_GROUPS) this.selectedTab = sum;
    else console.warn("No more tabs to see in this direction!");
  }

  ngOnInit() {
    // this.getSurvey();
  }

  onSubmit(): void {
    alert("u submitted a form");
  }

  getSurvey(): void {
    this.surveyService.getSurvey().subscribe(survey => this.survey = survey);
  }


}
