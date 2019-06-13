import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs' ;
//import {attributes} from './all-attributes';
@Injectable({
  providedIn: 'root'
})
export class ScreenServiceService {
  private baseUrl = '/api/v1/employees';
  constructor(private http: HttpClient) { }
  partialSave(attributes: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, attributes);
  }
}
