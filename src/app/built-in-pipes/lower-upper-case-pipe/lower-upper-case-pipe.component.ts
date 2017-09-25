import { Component } from '@angular/core';

@Component({
  selector: 'app-lower-upper-case-pipe',
  templateUrl: './lower-upper-case-pipe.component.html',
  styleUrls: ['./lower-upper-case-pipe.component.css']
})
export class LowerUpperCasePipeComponent {
  value: string;
  
  change(value: string) { 
  	this.value = value; 
  }
}
