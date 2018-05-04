import { Injectable } from '@angular/core';
import { Survey } from './survey';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {SurveyResponse} from './SurveyResponse';
import {Router} from '@angular/router';

@Injectable()
export class SurveyService {
  private hostUrl = "http://localhost:8080";

  httpPostOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private router: Router) { }


  getSurvey(id): Observable<Survey> {
    let response = this.http.get<Survey>(`${this.hostUrl}/api/survey/${id}`).pipe(catchError(this.handleGetError));

    console.log(response);

    return response;
  }

  postSurvey(survey: SurveyResponse): Observable<SurveyResponse> {
    return this.http.post<SurveyResponse>(`${this.hostUrl}/api/survey/${survey.surveyID}`, survey, this.httpPostOptions)
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

  handleGetError = (error: HttpErrorResponse) => {
    if(error instanceof ErrorEvent)
      console.error("Couldn't retrieve the survey: " + error.error.message);
    else console.error(`Backend returned code: ${error.status}. \nError Body: ${error.error}`);

    this.router.navigateByUrl('500').then(() => console.log("Redirecting to 500..."));

    return _throw("An error occurred, please try again later.")
  }

}
