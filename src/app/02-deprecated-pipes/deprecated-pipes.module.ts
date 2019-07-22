import { NgModule } from '@angular/core';
import { CommonModule, DeprecatedI18NPipesModule } from '@angular/common';
import { DemoComponent } from './demo.component';

@NgModule({
  imports: [
    CommonModule,
    // import deprecated module after!
    // tslint:disable-next-line: deprecation
    DeprecatedI18NPipesModule
  ],
  declarations: [DemoComponent],
  exports: [DemoComponent]
})
export class DepricatedPipesModule { }
