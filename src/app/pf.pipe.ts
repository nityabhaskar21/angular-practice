import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pf'
})
export class PfPipe implements PipeTransform {
  transform(value: number, ...args: any): any {
    return value * 0.12;
  }
}
