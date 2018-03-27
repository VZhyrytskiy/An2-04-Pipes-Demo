import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-use-pipe-result',
  templateUrl: './use-pipe-result.component.html',
})
export class UsePipeResultComponent {
  search: string;
  items = ['Acura', 'BMW', 'Chrysler', 'Dodge', 'Ford'];
}
