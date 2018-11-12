import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Bicycle } from '../../models/bicycle';

@Injectable()
export class RestProvider {

  private baseUrl = 'http://localhost:8080';

  constructor(public http: HttpClient) { }

  public getBicycles(): Observable<Bicycle[]> {
    return this.http.get(this.baseUrl + '/bicycles').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public getBicycleById(bicycleId: number): Observable<Bicycle> {
    return this.http.get(this.baseUrl + '/bicycle/' + bicycleId).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public createBicycle(bicycle: any): Observable<any> {
    let options = { headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', bicycle.name);
    urlSearchParams.append('year', bicycle.year);
    let body = urlSearchParams.toString();

    return this.http.post(this.baseUrl + '/bicycle', body, options).pipe(
      catchError(this.handleError)
    );
  }

  public updateBicycle(bicycle: any, bicycleId: number): Observable<any> {
    let options = { headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', bicycle.name);
    urlSearchParams.append('year', bicycle.year);
    let body = urlSearchParams.toString();

    return this.http.put(this.baseUrl + '/bicycle/' + bicycleId, body, options).pipe(
      catchError(this.handleError)
    );
  }

  public deleteBicycleById(bicycleId: number) {
    return this.http.delete(this.baseUrl+ '/bicycle/' + bicycleId).pipe(
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
