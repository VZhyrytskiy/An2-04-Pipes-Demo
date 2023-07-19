import { PercentPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-percent-pipe',
  standalone: true,
  templateUrl: './percent-pipe.component.html',
  imports: [PercentPipe]
})
export class PercentPipeComponent {
  b = 1.3495;
}
