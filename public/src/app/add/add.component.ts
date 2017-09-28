import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../appointment.service';
import { Appointment } from '../appointment';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  appointment = new Appointment();
  now = new Date();

  constructor(private _api: ApiService, private _router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('name') === null){
      this._router.navigate(['/']);      
    }
  }

  addAppointment() {
    console.log('hello fool')
    this._api.create(this.appointment)
    .then(() => {this._router.navigate(['/home'])})
    .catch((err) => {console.log(err)});
  }
}