import { Component, inject, type OnInit } from '@angular/core';
import { AgePipe } from './age.pipe';
import { DatePipe } from '@angular/common';

// > Using a different locale than the default one (en-US)
// requires to load additional locale data:
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
registerLocaleData(localeUk);
// <


interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-use-pipe',
  standalone: true,
  templateUrl: './use-pipe.component.html',
  providers: [AgePipe],
  imports: [AgePipe]
})
export class UsePipeComponent implements OnInit {
  currentDay = new DatePipe('uk').transform(
    new Date(),
    'MMMM dd, y',
    'uk'
  );
  currentAge!: string;
  age!: number;

  private agePipe = inject(AgePipe);

  ngOnInit(): void {
    this.getAge({ name: 'Anna', age: 16 });
    this.age = 20;
  }

  private getAge({ age }: Person): void {
    this.currentAge = this.agePipe.transform(age);
  }
}
