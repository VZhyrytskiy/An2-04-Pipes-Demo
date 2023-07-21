import { ApplicationConfig, DEFAULT_CURRENCY_CODE } from "@angular/core";

export const config: ApplicationConfig = {
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'GBP' }]
};



