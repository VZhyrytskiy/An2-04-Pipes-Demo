import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UsePipeInCodeModule } from './02-use-pipe-in-code/use-pipe-in-code.module';
import { UsePurePipeModule } from './03-use-pure-pipe/use-pure-pipe.module';
import { UsePipeResultModule } from './04-use-pipe-result/use-pipe-result.module';
import { AsyncObservablePipeComponent, CurrencyPipeComponent, DatePipeComponent, I18nPluralPipeComponent, I18nSelectPipeComponent, JsonPipeComponent, KeyValuePipeComponent, LowerUpperCasePipeComponent, NumberPipeComponent, PercentPipeComponent, SlicePipeComponent } from './01-built-in-pipes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    UsePipeInCodeModule,
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
    SlicePipeComponent
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'GBP'}],
  bootstrap: [AppComponent]
})
export class AppModule {}
