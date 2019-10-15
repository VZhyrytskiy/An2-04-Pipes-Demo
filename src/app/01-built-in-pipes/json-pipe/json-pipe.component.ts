import { Component } from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  templateUrl: './json-pipe.component.html'
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
