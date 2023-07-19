import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AsyncObservablePipeComponent, CurrencyPipeComponent, DatePipeComponent, I18nPluralPipeComponent, I18nSelectPipeComponent, JsonPipeComponent, KeyValuePipeComponent, LowerUpperCasePipeComponent, NumberPipeComponent, PercentPipeComponent, SlicePipeComponent } from './01-built-in-pipes';
import { ListComponent } from './03-use-pure-pipe/list.component';
import { UsePipeComponent } from './02-use-pipe-in-code/use-pipe.component';
import { UsePipeResultComponent } from './04-use-pipe-result/use-pipe-result.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

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
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'GBP'}],
  bootstrap: [AppComponent]
})
export class AppModule {}
