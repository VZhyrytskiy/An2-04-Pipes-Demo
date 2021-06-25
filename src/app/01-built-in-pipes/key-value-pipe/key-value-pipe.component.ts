import { Component } from '@angular/core';

@Component({
  selector: 'app-key-value-pipe',
  templateUrl: './key-value-pipe.component.html'
})
export class KeyValuePipeComponent {
  rows = {
    b: 2,
    a: 1
  };

  rowsMap = new Map([['a', 1], ['b', 2]]);

  compareFn(a: any, b: any): number {
    if (a.key > b.key) {
      return -1;
    }
    return 1;
  }
}
