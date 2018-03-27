import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PriorityPipe } from './priority.pipe';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ListComponent, PriorityPipe],
  exports: [ListComponent]
})
export class UsePurePipeModule {}
