import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from './appointment';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Appointment>, searchStr: string): Array<Appointment> {
    if (!value) { return value; }

    return value.filter(appointment => {
      return appointment.patient.toLowerCase().includes(searchStr.toLowerCase()) || appointment.complain.toLowerCase().includes(searchStr.toLowerCase())
    })
  }

}