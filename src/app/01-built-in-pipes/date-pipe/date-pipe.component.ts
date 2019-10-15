import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
})
export class DatePipeComponent {
  today: number = Date.now();
}
