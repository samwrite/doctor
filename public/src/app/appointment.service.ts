import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  retrieveAll() {
    return this._http.get('/appointments').map(data => data.json()).toPromise();
  }

  addUser(user){
    return this._http.post('/register', user).map(data => data.json()).toPromise();
  }
  create(appointment) {
    return this._http.post('/appointment', appointment).map(data => data.json()).toPromise();
  }
  registerUser(user) {
    return this._http.post('/register', user).map(data => data.json()).toPromise();
  }
  destroy(appointment) {
    return this._http.post('/appointment/destroy', appointment).map(data => data.json()).toPromise();
  } 
}
