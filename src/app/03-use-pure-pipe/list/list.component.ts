import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
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
    this.tasks.push({ action, priority });

    // create new reference
    // this.tasks = [...this.tasks, { action, priority }];
  }

  onReset(): void {
    this.tasks = [];
  }
}
