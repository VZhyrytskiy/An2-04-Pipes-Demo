import { Pipe, PipeTransform } from '@angular/core';

type Task = {action: string; priority: string};

@Pipe({
  name: 'priority',
  // pure: false
})
export class PriorityPipe implements PipeTransform {
  transform(tasks: Task[], priority: string): Task[] {
    console.log(`call priority pipe at ${Date.now()}`);
    return tasks.filter(task => {
      return task.priority === priority;
    });
  }
}
