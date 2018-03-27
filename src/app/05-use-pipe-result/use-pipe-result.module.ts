import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsePipeResultComponent } from './use-pipe-result.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [UsePipeResultComponent, FilterPipe],
  exports: [UsePipeResultComponent]
})
export class UsePipeResultModule {}
