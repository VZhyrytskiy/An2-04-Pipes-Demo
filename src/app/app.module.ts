import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DepricatedPipesModule } from './deprecated-pipes/deprecated-pipes.module';

import { AppComponent } from './app.component';

import {
  AsyncObservablePipeComponent,
  CurrencyPipeComponent,
  DatePipeComponent,
  I18nPluralPipeComponent,
  I18nSelectPipeComponent,
  JsonPipeComponent,
  LowerUpperCasePipeComponent,
  NumberPipeComponent,
  PercentPipeComponent,
  SlicePipeComponent
} from './built-in-pipes';

import { UsePipeComponent } from './use-pipe-in-code/use-pipe/use-pipe.component';
import { ListComponent } from './use-pure-pipe/list/list.component';
import { PriorityPipe } from './use-pure-pipe/priority.pipe';
import { AgePipe } from './use-pipe-in-code/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LowerUpperCasePipeComponent,
    DatePipeComponent,
    JsonPipeComponent,
    NumberPipeComponent,
    CurrencyPipeComponent,
    PercentPipeComponent,
    I18nPluralPipeComponent,
    I18nSelectPipeComponent,
    SlicePipeComponent,
    AsyncObservablePipeComponent,
    UsePipeComponent,
    ListComponent,
    PriorityPipe,
    AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DepricatedPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
