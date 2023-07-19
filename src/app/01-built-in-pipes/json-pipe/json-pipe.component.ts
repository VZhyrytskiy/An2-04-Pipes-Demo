import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  standalone: true,
  templateUrl: './json-pipe.component.html',
  imports: [JsonPipe]
})
export class JsonPipeComponent {
  person = {
    firstName: 'Anna',
    lastName: 'Vasileva',
    children: [
      {
        name: 'Andrii',
        age: 3
      }
    ]
  };
}
