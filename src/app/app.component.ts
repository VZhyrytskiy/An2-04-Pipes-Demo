import { Component } from '@angular/core';
import { AsyncObservablePipeComponent, CurrencyPipeComponent, DatePipeComponent, I18nPluralPipeComponent, I18nSelectPipeComponent, JsonPipeComponent, KeyValuePipeComponent, LowerUpperCasePipeComponent, NumberPipeComponent, PercentPipeComponent, SlicePipeComponent } from './01-built-in-pipes';
import { ListComponent } from './03-use-pure-pipe/list.component';
import { UsePipeComponent } from './02-use-pipe-in-code/use-pipe.component';
import { UsePipeResultComponent } from './04-use-pipe-result/use-pipe-result.component';

const components = [
  AsyncObservablePipeComponent,
  CurrencyPipeComponent,
  DatePipeComponent,
  I18nPluralPipeComponent,
  I18nSelectPipeComponent,
  JsonPipeComponent,
  KeyValuePipeComponent,
  LowerUpperCasePipeComponent,
  NumberPipeComponent,
  PercentPipeComponent,
  SlicePipeComponent,
  UsePipeComponent,
  ListComponent,
  UsePipeResultComponent
];


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [...components]
})
export class AppComponent {
  title = 'Pipes Demo!';
}
