import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs' ;
//import {attributes} from './all-attributes';
@Injectable({
  providedIn: 'root'
})

export class ScreenServiceService {
  private baseUrl = 'https://my-json-server.typicode.com/gchetan13/json-server/';
  constructor(private http: HttpClient) { }
  partialSave(attributes: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, attributes);
  }
  postGettingStarted(attributes : JSON) : Observable<Object>{
    console.log('post gettingstarted from service '+attributes);
    return this.http.post<JSON>(this.baseUrl+'getting_started', attributes);
  }
  postOwner(attributes : JSON) : Observable<JSON>{
    console.log('post owner from service '+attributes);
    return this.http.post<JSON>(this.baseUrl+'owners', attributes);
  }
  putOwner(attributes : JSON,index:Number) : Observable<Object>{
    console.log('put owner from service '+attributes);
    return this.http.put<JSON>(this.baseUrl+'owners/'+index, attributes);
  }
  deleteOwner(index:Number):Observable<Object>{
    console.log('delete owner from index '+index);
    return this.http.delete(this.baseUrl+'owners/'+index);
  }
  postProposedInsured(attributes : JSON) : Observable<Object>{
    console.log('post proposed insured from service '+attributes);
    return this.http.post<JSON>(this.baseUrl+'proposed_Insured', attributes);
  }
  postExistingApplied(attributes : JSON) : Observable<Object>{
    console.log('post existing from service '+attributes);
    return this.http.post<JSON>(this.baseUrl+'existingApplied', attributes);
  }
  postPremium(attributes : JSON) : Observable<Object>{
    console.log('post premium from service '+attributes);
    return this.http.post<JSON>(this.baseUrl+'premium', attributes);
  }
  getGettingStarted():Observable<JSON>{
    
    return this.http.get<JSON>(this.baseUrl+'getting_started');
  }

  getProposedInsured():Observable<JSON>{
    return this.http.get<JSON>(this.baseUrl+'proposed_Insured');
  }
  getOwner():Observable<JSON>{
    return this.http.get<JSON>(this.baseUrl+'owners');
  }
  getExistingApplied():Observable<JSON>{
    return this.http.get<JSON>(this.baseUrl+'existingApplied');
  }
  getPremium():Observable<JSON>{
    return this.http.get<JSON>(this.baseUrl+'premium');
  }
  getGettingStartedServerError():Observable<[]>{
    return this.http.get<[]>(this.baseUrl+'gettingStarted_Error');
  }
  getProposed_InsuredServerError():Observable<[]>{
    return this.http.get<[]>(this.baseUrl+'proposed_Insured_Error');
  }
  getownerServerError():Observable<[]>{
    return this.http.get<[]>(this.baseUrl+'owner_Error');
  }
  getexistingAppliedServerError():Observable<[]>{
    return this.http.get<[]>(this.baseUrl+'existingApplied_Error');
  }
  getPremiumServerError():Observable<[]>{
    return this.http.get<[]>(this.baseUrl+'premium_Error');
  }
  postGettingStartedServerError(errors : JSON):Observable<Object>{
    console.log('postServerError success');
    return this.http.post<JSON>(this.baseUrl+'gettingStarted_Error',errors);
  }
  postProposed_InsuredServerError(errors : JSON):Observable<Object>{
    console.log('postServerError success');
    return this.http.post<JSON>(this.baseUrl+'proposed_Insured_Error',errors);
  }
  postOwnerServerError(errors : JSON):Observable<Object>{
    console.log('postServerError Owner success'+JSON.stringify(errors));
    return this.http.post<JSON>(this.baseUrl+'owner_Error',errors);
  }
  putOwnerServerError(errors : JSON,index:number):Observable<Object>{
    console.log('putServerError Owner success');
    return this.http.put<JSON>(this.baseUrl+'owner_Error/'+index,errors);
  }
  deleteOwnerServerError(index:number):Observable<Object>{
    console.log('delete ServerError success');
    return this.http.delete<JSON>(this.baseUrl+'owner_Error/'+index);
  }
  postexistingAppliedServerError(errors : JSON):Observable<Object>{
    console.log('postServerError success');
    return this.http.post<JSON>(this.baseUrl+'existingApplied_Error',errors);
  }
  postPremiumServerError(errors : JSON):Observable<Object>{
    console.log('postServerError success');
    return this.http.post<JSON>(this.baseUrl+'premium_Error',errors);
  }
}
