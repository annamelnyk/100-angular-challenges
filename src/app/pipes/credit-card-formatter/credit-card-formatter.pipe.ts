import { Pipe, PipeTransform } from '@angular/core';

import { hasValideCharacters, hasCorrectLength } from 'src/app/shared/utils/credit-card-validator';
@Pipe({
  name: 'creditCardFormatter',
})
export class CreditCardFormatterPipe implements PipeTransform {
  transform(value: string): string | unknown {
    const creditCardCharacters = [];
    const SEPARATOR = '-';
    const creditCardLength = value.length;

    try {
      if (!hasCorrectLength(value)) {
        throw new Error('Credit card number must contain 16 digits!');
      }

      for (let i = 0; i < creditCardLength; i++) {
        if (!hasValideCharacters(value)) {
          throw new Error('Credit card number must contain digits only');
        }

        if (i !== 0 && i % 4 === 0) {
          creditCardCharacters.push(SEPARATOR);
        }

        creditCardCharacters.push(value[i]);
      }

      return creditCardCharacters.join('');
    } catch (err) {
      return err;
    }
  }
}
