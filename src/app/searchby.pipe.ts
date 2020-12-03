import { Pipe, PipeTransform } from '@angular/core';
import { Emp } from './emp';

@Pipe({
  name: 'searchby'
})
export class SearchbyPipe implements PipeTransform {
  transform(emps: Emp[], searchKey: string): any {
    emps = emps.filter(e => e.empName.includes(searchKey.toLowerCase()));
    return emps;
  }
}
