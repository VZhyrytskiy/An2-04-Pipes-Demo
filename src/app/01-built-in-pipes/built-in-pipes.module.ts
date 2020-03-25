import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
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
  SlicePipeComponent
} from '.';

const components = [
  LowerUpperCasePipeComponent,
  DatePipeComponent,
  JsonPipeComponent,
  KeyValuePipeComponent,
  NumberPipeComponent,
  CurrencyPipeComponent,
  PercentPipeComponent,
  I18nPluralPipeComponent,
  I18nSelectPipeComponent,
  SlicePipeComponent,
  AsyncObservablePipeComponent
];

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [...components],
  exports: [...components],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'GBP'}]
})
export class BuiltInPipesModule {}
