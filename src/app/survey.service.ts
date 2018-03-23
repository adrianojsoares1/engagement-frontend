import { Injectable } from '@angular/core';
import { Survey } from './survey';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SurveyService {

  constructor() { }

  getSurvey(): Observable<Survey> {
    return new Observable<Survey>();
  }
}
