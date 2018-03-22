import { Injectable } from '@angular/core';
import { Survey } from './survey';

@Injectable()
export class SurveyService {

  constructor() { }

  getSurvey() {
    return new Survey();
  }
}
