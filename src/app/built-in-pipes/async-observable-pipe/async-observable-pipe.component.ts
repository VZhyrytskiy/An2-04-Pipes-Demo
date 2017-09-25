import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-async-observable-pipe',
  templateUrl: './async-observable-pipe.component.html',
  styleUrls: ['./async-observable-pipe.component.css']
})
export class AsyncObservablePipeComponent {

  // observable
  time = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  // promise
  data: Promise<string> = <Promise<string>>(new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('RECEIVED DATA!');
      reject('Error');
    }, 5000);
  }).catch(error => error));

}
