import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { PriorityPipe } from './priority.pipe';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  imports: [NgForOf, PriorityPipe]
})
export class ListComponent {
  tasks = [
    { action: 'Task 1', priority: 'High' },
    { action: 'Task 2', priority: 'Normal' },
    { action: 'Task 3', priority: 'Low' }
  ];

  onAddTask(action: string, priority: string): void {
    action = action.trim();
    if (!action) {
      return;
    }

    // mutate array
    // this.tasks.push({ action, priority });

    // create new reference
    this.tasks = [...this.tasks, { action, priority }];
  }

  onReset(): void {
    this.tasks = [];
  }
}
