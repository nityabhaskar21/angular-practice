import { Pipe, PipeTransform } from '@angular/core';
import { Emp } from './emp';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {
  transform(emps: Emp[], field: string): any {
    emps.sort((a, b) => {
      if (a[field] >= b[field]) return 1;
      else return -1;
    });
    return emps;
  }
}
