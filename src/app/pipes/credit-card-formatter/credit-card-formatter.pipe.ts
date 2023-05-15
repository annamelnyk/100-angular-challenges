import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter',
})
export class CreditCardFormatterPipe implements PipeTransform {
  transform(value: string): string | unknown {
    const creditCardCharacters = [];
    const SEPARATOR = '-';
    const creditCardLength = value.length;

    try {
      if (!this.hasCorrectLength(creditCardLength)) {
        throw new Error('Credit card number must contain 16 digits!');
      }

      for (let i = 0; i < creditCardLength; i++) {
        if (!this.isInteger(value[i])) {
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

  private hasCorrectLength(cardNumberLength: number): boolean {
    const masterVisaCardLength = 16;
    const americanExpressCardLength = 15;

    return cardNumberLength === masterVisaCardLength || cardNumberLength === americanExpressCardLength;
  }

  private isInteger(value: string): boolean {
    return Number.isInteger(+value);
  }
}
