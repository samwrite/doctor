import { Component, OnInit } from '@angular/core';
import { ApiService } from '../appointment.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name;
user;
allAppointments: Array<Appointment>;
searchStr: string = '';
now = new Date();

  constructor(private _api: ApiService, private _router: Router) { 
  }

  ngOnInit() {
    this.getAllAppointments();    
    if (JSON.parse(localStorage.getItem('name')) !== null ) {
      this.name = JSON.parse(localStorage.getItem('name'));
    }else {
      this.user = prompt('Please type a name to login');
      while (this.user === '') {
        this.user = prompt('You must type a name to login');
      }
      if (this.user !== null) {
        this._api.registerUser(this.user);
        localStorage.setItem('name', JSON.stringify(this.user));        
      }
      this.name = this.user;
      this.user = new User();
    }
  }
  getAllAppointments() {
    console.log(this.now)
    this._api.retrieveAll()
    .then((appointments) => { this.allAppointments = appointments; 
    console.log(appointments)})
    .catch((err) => { console.log(err); });
  }
  logout() {
    localStorage.clear();
  }
  delete(s) {
      this._api.destroy(s)
      .then(() => {this.getAllAppointments();})
      .catch((err) => {console.log("the error is:", err)});
  }
  validateReg() {
    this._api.registerUser(this.user)
      .then(() => { this._router.navigate(['/home']); })
      .catch((err) => { console.log('There was an error') });
  }
}
