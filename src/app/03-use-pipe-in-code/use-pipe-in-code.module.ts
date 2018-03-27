import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgePipe } from './age.pipe';
import { UsePipeComponent } from './use-pipe/use-pipe.component';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AgePipe, UsePipeComponent],
  exports: [UsePipeComponent]
})
export class UsePipeInCodeModule {}
