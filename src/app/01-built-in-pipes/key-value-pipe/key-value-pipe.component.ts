import { Component } from '@angular/core';
import { KeyValuePipe, type KeyValue, NgForOf, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-key-value-pipe',
  standalone: true,
  templateUrl: './key-value-pipe.component.html',
  imports: [KeyValuePipe, JsonPipe, NgForOf]
})
export class KeyValuePipeComponent {
  rows = {
    b: 2,
    a: 1
  };

  rowsMap = new Map<string, number>([['a', 1], ['b', 2]]);

  compareFn(a: KeyValue<string, number>, b: KeyValue<string, number>): 1 | -1 {
    if (a.key > b.key) {
      return -1;
    }
    return 1;
  }
}
