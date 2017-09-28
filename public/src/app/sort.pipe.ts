import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from './appointment';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<Appointment>, arg?: string): any {
    let direction = 1;
    if (arg === 'desc') {
      direction = -1;
    }
    if (array) {
      array.sort((a: Appointment, b: Appointment) => {
        if (a.date < b.date) {
          return 1 * direction;
        } else if (a.date > b.date) {
          return -1 * direction;
        } else {
          return 0;
        }
      });
    }
    if (array) {
      array.sort((a: Appointment, b: Appointment) => {
        if (a.time < b.time) {
          if (a.date < b.date)
            return 1 * direction;
        } else if (a.time > b.time) {
          if (a.date > b.date)
            return -1 * direction;
        } else {
          return 0;
        }
      });
    }
    return array;
  }

}