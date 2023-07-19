import { Pipe, type PipeTransform } from '@angular/core';

interface TaskModel {
  action: string;
  priority: string;
}

@Pipe({
  name: 'priority',
  standalone: true,
  // pure: false
})
export class PriorityPipe implements PipeTransform {
  transform(tasks: TaskModel[], priorityIn: string): TaskModel[] {
    console.log(`call priority pipe at ${Date.now()}`);
    return tasks.filter(({ priority }) => priority === priorityIn);
  }
}
