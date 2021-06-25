import { Component } from '@angular/core';

@Component({
  selector: 'app-lower-upper-case-pipe',
  templateUrl: './lower-upper-case-pipe.component.html'
})
export class LowerUpperCasePipeComponent {
  value!: string;

  onChange(value: string): void {
    this.value = value;
  }
}
