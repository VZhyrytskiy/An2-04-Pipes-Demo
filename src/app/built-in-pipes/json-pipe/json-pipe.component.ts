import { Component } from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  templateUrl: './json-pipe.component.html',
  styleUrls: ['./json-pipe.component.css']
})
export class JsonPipeComponent {

  person: Object = {
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
