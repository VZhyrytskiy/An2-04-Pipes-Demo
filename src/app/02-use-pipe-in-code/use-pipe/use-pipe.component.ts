import { Component, OnInit } from '@angular/core';
import { AgePipe } from './../age.pipe';
import { DatePipe } from '@angular/common';

// > Using a different locale than the default one (en-US)
// requires to load additional locale data:
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
registerLocaleData(localeUk);
// <

@Component({
  selector: 'app-use-pipe',
  templateUrl: './use-pipe.component.html',
  providers: [AgePipe]
})
export class UsePipeComponent implements OnInit {
  currentDay: string = new DatePipe('uk').transform(
    new Date(),
    'MMMM dd, y',
    'uk'
  );
  currentAge: string;
  age: number;

  constructor(private agePipe: AgePipe) {}

  ngOnInit() {
    this.getAge({ name: 'Anna', age: 16 });
    this.age = 20;
  }

  private getAge(person: any) {
    this.currentAge = this.agePipe.transform(person.age);
  }
}
