import { Component } from '@angular/core';

@Component({
  selector: 'app-slice-pipe',
  templateUrl: './slice-pipe.component.html',
  styleUrls: ['./slice-pipe.component.css']
})
export class SlicePipeComponent {

  collection: string[] = ['a', 'b', 'c', 'd'];
  str = 'abcdefghijklmnopqrstuvwxyz';

}
