import { Component } from '@angular/core';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@Component({
  selector: 'app-currency-pipe',
  standalone: true,
  templateUrl: './currency-pipe.component.html',
  imports: [CurrencyPipe]
})
export class CurrencyPipeComponent {
  a = 0.259;
  b = 1.3495;
}
