import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(value: number): string {
    return `${value} years old`;
  }

}
