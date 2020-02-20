import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority',
  // pure: false
})
export class PriorityPipe implements PipeTransform {
  transform(tasks: any[], priority: string): any {
    console.log(`call priority pipe at ${Date.now()}`);
    return tasks.filter(task => {
      return task.priority === priority;
    });
  }
}
