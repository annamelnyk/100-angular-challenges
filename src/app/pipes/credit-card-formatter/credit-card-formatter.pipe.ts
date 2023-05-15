import { Pipe, PipeTransform } from '@angular/core';

import {
  hasValideCharacters,
  hasCorrectLength,
  creditCardNumberDashed,
} from 'src/app/shared/utils/credit-card-validator';
@Pipe({
  name: 'creditCardFormatter',
})
export class CreditCardFormatterPipe implements PipeTransform {
  transform(value: string): string | unknown {
    try {
      if (!hasCorrectLength(value)) {
        throw new Error('Credit card number must contain 16 digits!');
      }

      if (!hasValideCharacters(value)) {
        throw new Error('Credit card number must contain digits only');
      }

      return creditCardNumberDashed(value);
    } catch (err) {
      return err;
    }
  }
}
