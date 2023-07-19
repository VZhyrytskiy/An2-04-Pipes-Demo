import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lower-upper-case-pipe',
  standalone: true,
  templateUrl: './lower-upper-case-pipe.component.html',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe]
})
export class LowerUpperCasePipeComponent {
  value: string = '';

  onChange(value: string): void {
    this.value = value;
  }
}
