import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  standalone: true,
  templateUrl: './date-pipe.component.html',
  imports: [DatePipe]
})
export class DatePipeComponent {
  today = Date.now();
}
