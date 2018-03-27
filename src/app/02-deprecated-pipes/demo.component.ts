import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <p>currency pipe: 'USD': {{a | currency:'USD'}}</p>
    <p>percent pipe: {{b | percent}}</p>
    <p>short, {{today | date:'short'}}</p>
    <p>e (3.1-5:fr): {{e | number:'3.1-5':'fr'}}</p>
  `,
})
export class DemoComponent {
  a = 0.259;
  b = 1.3495;
  today = Date.now();
  e = 2.718281828459045;
}
