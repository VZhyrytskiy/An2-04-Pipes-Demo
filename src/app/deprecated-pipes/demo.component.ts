import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <p>currency pipe: 'USD': {{a | currency:'USD'}}</p>
    <p>percent pipe: {{b | percent}}</p>
    <p>short, {{today | date:'short'}}</p>
  `,
})
export class DemoComponent {
  a = 0.259;
  b = 1.3495;
  today = Date.now();
}
