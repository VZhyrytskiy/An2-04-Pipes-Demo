import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BuiltInPipesModule } from './01-built-in-pipes/built-in-pipes.module';
import { UsePipeInCodeModule } from './02-use-pipe-in-code/use-pipe-in-code.module';
import { UsePurePipeModule } from './03-use-pure-pipe/use-pure-pipe.module';
import { UsePipeResultModule } from './04-use-pipe-result/use-pipe-result.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    BuiltInPipesModule,
    UsePipeInCodeModule,
    UsePurePipeModule,
    UsePipeResultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
