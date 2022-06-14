import { Component } from '@angular/core';
import { type KeyValue } from '@angular/common';

@Component({
  selector: 'app-key-value-pipe',
  templateUrl: './key-value-pipe.component.html'
})
export class KeyValuePipeComponent {
  rows = {
    b: 2,
    a: 1
  };

  rowsMap = new Map<string, number>([['a', 1], ['b', 2]]);

  compareFn(a: KeyValue<string, number>, b: KeyValue<string, number>): number {
    if (a.key > b.key) {
      return -1;
    }
    return 1;
  }
}
