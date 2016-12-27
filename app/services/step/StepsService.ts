import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class StepsService {

  constructor(private _http: Http){}

  private stepsUrl : string = 'http://localhost:3000';

  list() : Observable<any[]> {
    if(localStorage.getItem('steps')){
      return Observable.of(JSON.parse(localStorage.getItem('steps')));
    }else{
      return this._http.get(this.stepsUrl + '/assets/json/steps.json')
                        .map(res => {
                          let data:any = this.extractData(res);
                          localStorage.setItem('stepsRawJson', JSON.stringify(data));
                          return data;
                        })
                        .catch(this.handleError);
    }
  }
  //  {
  //   return this._http.get('http://localhost:3000/assets/json/steps.json').map(res => res.json());
  // }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    //transforms the error into a user-friendly message, and returns the message in a new, failed observable
    return Observable.throw(errMsg);
  }
}
