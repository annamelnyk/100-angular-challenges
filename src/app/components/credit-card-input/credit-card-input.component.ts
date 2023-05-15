import { Component, Input } from '@angular/core';
import {
  hasCorrectLength,
  hasValideCharacters,
  typeOfCreditCard,
  creditCardNumberDashed,
} from 'src/app/shared/utils/credit-card-validator';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss'],
})
export class CreditCardInputComponent {
  private _readonly: boolean = false;
  @Input() public creditCardNumber: string = '';
  @Input('isReadOnly')
  public set isReadOnly(value: boolean) {
    if (value) {
      this.validateCreditCardNumber(this.creditCardNumber);

      if (this.isFullFilled && this.isValid) {
        this.creditCardNumber = this.formatCreditCardNumber(
          this.creditCardNumber
        );
      }
    }
    this._readonly = '' + value !== 'false';
  }

  public get isReadOnly(): boolean {
    return this._readonly;
  }

  public isValid: boolean = true;
  public isFullFilled: boolean = false;
  public creditCardType: string = '';

  getCreditCardNumber(value: string) {
    console.log(value);
    this.creditCardType = typeOfCreditCard(value);
    this.validateCreditCardNumber(value);

    if (this.isValid && value) {
      this.creditCardNumber = value;
    }
  }

  validateCreditCardNumber(cardNumber: string): void {
    if (!cardNumber) {
      this.isFullFilled = false;
      this.isValid = true;

      return;
    }
    this.isFullFilled = hasCorrectLength(cardNumber);
    this.isValid = this.isFullFilled && hasValideCharacters(cardNumber);
  }

  formatCreditCardNumber(value: string): string {
    const creditCardNumberSplitByDash =
      creditCardNumberDashed(value).split('-');

    return creditCardNumberSplitByDash
      .map((value, index, arr) => {
        if (index !== arr.length - 1) {
          return 'xxxx';
        }

        return value;
      })
      .join('-');
  }
}
