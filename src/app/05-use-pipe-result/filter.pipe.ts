import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(arr: string[], searchValue: string) {
    if (!searchValue) {
      return arr;
    }

    return arr.filter(value => {
      return value.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });
  }
}
