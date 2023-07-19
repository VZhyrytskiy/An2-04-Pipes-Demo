import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-use-pipe-result',
  standalone: true,
  templateUrl: './use-pipe-result.component.html',
  imports: [FormsModule, NgForOf, NgIf, FilterPipe]
})
export class UsePipeResultComponent {
  search = '';
  items = ['Acura', 'BMW', 'Chrysler', 'Dodge', 'Ford'];
}
