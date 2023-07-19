import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-number-pipe',
  standalone: true,
  templateUrl: './number-pipe.component.html',
  imports: [DecimalPipe]
})
export class NumberPipeComponent {
  pi = 3.141592;
  e = 2.718281828459045;
}
