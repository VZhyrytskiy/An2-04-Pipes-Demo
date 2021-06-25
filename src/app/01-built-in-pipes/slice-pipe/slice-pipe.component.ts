import { Component } from '@angular/core';

@Component({
  selector: 'app-slice-pipe',
  templateUrl: './slice-pipe.component.html'
})
export class SlicePipeComponent {
  collection = ['a', 'b', 'c', 'd'];
  str = 'abcdefghijklmnopqrstuvwxyz';
}
