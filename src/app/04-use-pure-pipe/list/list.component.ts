import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  tasks: any[] = [
    { action: 'Task 1', priority: 'High' },
    { action: 'Task 2', priority: 'Normal' },
    { action: 'Task 3', priority: 'Low' }
  ];

  addTask(action, priority) {
    action = action.trim();
    if (!action) {
      return;
    }

    // mutate array
    this.tasks.push({ action: action, priority: priority });

    // create new rference
    // this.tasks = [...this.tasks, { action: action, priority: priority }];
  }

  reset() {
    this.tasks = [];
  }
}
