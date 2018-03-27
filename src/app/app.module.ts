import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BuiltInPipesModule } from './01-built-in-pipes/built-in-pipes.module';
import { DepricatedPipesModule } from './02-deprecated-pipes/deprecated-pipes.module';
import { UsePipeInCodeModule } from './03-use-pipe-in-code/use-pipe-in-code.module';
import { UsePurePipeModule } from './04-use-pure-pipe/use-pure-pipe.module';
import { UsePipeResultModule } from './05-use-pipe-result/use-pipe-result.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    BuiltInPipesModule,
    DepricatedPipesModule,
    UsePipeInCodeModule,
    UsePurePipeModule,
    UsePipeResultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
