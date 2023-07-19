import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UsePurePipeModule } from './03-use-pure-pipe/use-pure-pipe.module';
import { UsePipeResultModule } from './04-use-pipe-result/use-pipe-result.module';
import { AsyncObservablePipeComponent, CurrencyPipeComponent, DatePipeComponent, I18nPluralPipeComponent, I18nSelectPipeComponent, JsonPipeComponent, KeyValuePipeComponent, LowerUpperCasePipeComponent, NumberPipeComponent, PercentPipeComponent, SlicePipeComponent } from './01-built-in-pipes';
import { UsePipeComponent } from './02-use-pipe-in-code/use-pipe/use-pipe.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    UsePurePipeModule,
    UsePipeResultModule,

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
    UsePipeComponent
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'GBP'}],
  bootstrap: [AppComponent]
})
export class AppModule {}
