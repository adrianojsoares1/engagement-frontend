import {Component, Input, OnInit, Inject} from '@angular/core';
import { SurveyService } from '../survey.service';
import { Survey } from '../Survey';
import { SURVEYS } from '../mock-surveys';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import {MatTabChangeEvent} from '@angular/material';
import {SurveyResponse} from '../SurveyResponse';

@Component({
  selector: 'app-survey-taker',
  templateUrl: './survey-taker.component.html',
  styleUrls: ['./survey-taker.component.css']
})
export class SurveyTakerComponent implements OnInit{

  reactiveForm: FormGroup; //the Reactive Form
  @Input() team: string;
  survey: Survey;
  selectedTab = 0;

  AMOUNT_OF_GROUPS: number;

  constructor(private surveyService: SurveyService, @Inject(FormBuilder) private fb: FormBuilder) {
    this.survey = <Survey>SURVEYS[0];
    this.AMOUNT_OF_GROUPS = this.survey.groups.length;

    //instantiate the Form
    this.reactiveForm = new FormGroup({
      name: new FormControl('', Validators.required),
      adid: new FormControl('', Validators.required),
      groups: new FormArray(this.groups, Validators.required) //groups will be FormArray<FormArray<FormControl>>
    });
  }
  //getGroups: () -> FormArray[]
  //Purpose: Every Survey has an array of groups. This returns an array of FormArrays that map to each individual group.
  get groups() : FormArray[] {
    let forms: FormArray[] = [];
    for(let i = 0; i < this.AMOUNT_OF_GROUPS; i++)
      forms.push(new FormArray(this.getQuestions(i), Validators.required));

    return forms;
  }

  //getQuestions: number -> FormControl[]
  //Purpose: Every Group has an array of Questions. This returns an array of FormControls which map to each individual question.
   getQuestions(index) : FormControl[] {
    let controls: FormControl[] = [];
    for(let j = 0; j < this.survey.groups[index].questions.length; j++)
      controls.push(new FormControl(null, Validators.required));

    return controls;
  }

  //tabUp: () -> void
  //Purpose: Set current tab next
  tabUp = () => ++this.selectedTab;

  //tabDown: () -> void
  //Purpose: Set current tab prev
  tabDown = () => --this.selectedTab;

  //tabChanged: (MatTabChangeEvent) -> void
  //Purpose: Set the current tab when the user clicks on a new one instead of using the Prev/Next buttons
  tabChanged = (tabChangeEvent: MatTabChangeEvent) => this.selectedTab = tabChangeEvent.index;

  //ngOnInit: () -> void
  //Implements OnInit interface
  ngOnInit() {
    this.getSurvey();
  }

  //onSubmit: () -> void
  //Purpose: To submit the forms
  onSubmit(): void {
    const response = new SurveyResponse();

    response.teamID = this.reactiveForm.get('name').value;
    response.adid = this.reactiveForm.get('adid').value;
    response.surveyID = this.survey.survey;
    response.timestamp = Date.now();
    response.responses = this.reactiveForm.get('groups').value;

    this.surveyService.postSurvey(response).subscribe(() => console.log("The survey has been posted."));
  }

  //getSurvey: Observable<HttpResponse<Survey>> => void
  //Purpose: Use the dependency injected SurveyService to retrieve the requested survey (from URI)
  getSurvey(): void {
    this.surveyService.getSurvey().subscribe(survey => this.survey = survey);
  }

}
