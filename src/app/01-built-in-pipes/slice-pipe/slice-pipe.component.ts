import { NgForOf, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slice-pipe',
  standalone: true,
  templateUrl: './slice-pipe.component.html',
  imports: [SlicePipe, NgForOf]
})
export class SlicePipeComponent {
  collection = ['a', 'b', 'c', 'd'];
  str = 'abcdefghijklmnopqrstuvwxyz';
}
