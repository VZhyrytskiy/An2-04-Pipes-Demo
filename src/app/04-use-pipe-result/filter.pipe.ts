import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(arr: string[], searchValue: string): string[] {
    if (!searchValue) {
      return arr;
    }

    return arr.filter(value => {
      return value.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
