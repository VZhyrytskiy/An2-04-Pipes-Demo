import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(arr: string[], searchValue: string): string[] {
    if (!searchValue) {
      return arr;
    }

    return arr.filter(value => value.toLowerCase().includes(searchValue.toLowerCase()));
  }
}
