import { AsyncPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, type Subscriber } from 'rxjs';

@Component({
  selector: 'app-async-observable-pipe',
  standalone: true,
  templateUrl: './async-observable-pipe.component.html',
  imports: [AsyncPipe, DatePipe]
})
export class AsyncObservablePipeComponent {
  // observable
  time = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  // promise
  data: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('RECEIVED DATA!');
      // reject('Error');
    }, 5000);
  }).catch(error => error) as Promise<string>;
}
