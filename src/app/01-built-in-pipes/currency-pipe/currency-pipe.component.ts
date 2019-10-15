import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@Component({
  selector: 'app-currency-pipe',
  templateUrl: './currency-pipe.component.html'
})
export class CurrencyPipeComponent {
  a = 0.259;
  b = 1.3495;
}
