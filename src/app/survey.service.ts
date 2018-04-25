import { Injectable } from '@angular/core';
import { Survey } from './survey';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {SurveyResponse} from './SurveyResponse';

@Injectable()
export class SurveyService {
  private hostUrl = "http://localhost:10010";

  httpPostOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getSurvey(): Observable<Survey> {
    return this.http.get<Survey>(`${this.hostUrl}/api/survey/1`)
      .pipe(catchError(this.handleError<Survey>('getSurvey')));
  }

  postSurvey(survey: SurveyResponse): Observable<SurveyResponse> {
    return this.http.post<SurveyResponse>(`${this.hostUrl}/api/survey`, survey, this.httpPostOptions)
      .pipe(catchError(this.handleError<SurveyResponse>('postSurvey')));

  }

  handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error); // log to console instead

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;

      console.error(message);
      // Let the app keep running by returning a safe result.
      return of( result );
    };

  }

}
