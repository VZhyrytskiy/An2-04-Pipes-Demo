import { Component, OnInit } from '@angular/core';
import { AgePipe } from './../age.pipe';
import { DatePipe } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/uk';

registerLocaleData(localeFr);

@Component({
  selector: 'app-use-pipe',
  templateUrl: './use-pipe.component.html',
  styleUrls: ['./use-pipe.component.css'],
  providers: [AgePipe]
})
export class UsePipeComponent implements OnInit {
  currentDay: string = new DatePipe('uk').transform(new Date(), 'MMMM dd, y', 'uk');
  currentAge: string;
  age: number;

  constructor(
    private agePipe: AgePipe
  ) {}

  ngOnInit() {
    this.getAge({ name: 'Anna', age: 16 });
    this.age = 20;
  }

  getAge(person) {
      this.currentAge = this.agePipe.transform(person.age);
  }


}
