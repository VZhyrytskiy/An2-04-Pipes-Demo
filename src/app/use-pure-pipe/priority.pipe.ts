import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority',
  // pure: false
})
export class PriorityPipe implements PipeTransform {

  transform(tasks: any, args?: any): any {
    console.log(`call priority pipe at ${Date.now()}`);
    return tasks.filter((task) => {
        return task.priority === args;
    });
  }

}
