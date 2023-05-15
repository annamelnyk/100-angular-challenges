import { Pipe, PipeTransform } from '@angular/core';

import { creditCardNumberDashed } from 'src/app/shared/utils/credit-card-validator';

@Pipe({
  name: 'creditCardEncripted',
})
export class CreditCardEncriptedPipe implements PipeTransform {
  transform(value: string): string {
    const creditCardNumberSplitByDash =
      creditCardNumberDashed(value).split('-');

    return creditCardNumberSplitByDash
      .map((value, index, arr) => {
        if (index !== arr.length - 1) {
          return 'XXXX';
        }

        return value;
      })
      .join('-');
  }
}
