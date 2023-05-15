import { Component } from '@angular/core';
import {
  hasCorrectLength,
  hasValideCharacters,
  typeOfCreditCard,
} from 'src/app/shared/utils/credit-card-validator';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss'],
})
export class CreditCardInputComponent {
  public creditCardNumber: string = '';
  public isValid: boolean = true;
  public isFullFilled: boolean = false;
  public creditCardType: string = '';

  getCreditCardNumber(value: string) {
    console.log(value);
    this.creditCardType = typeOfCreditCard(value);
    this.validateCreditCardNumber(value);
    this.creditCardNumber = value;
  }

  validateCreditCardNumber(cardNumber: string): void {
    this.isFullFilled = hasCorrectLength(cardNumber);
    this.isValid = this.isFullFilled && hasValideCharacters(cardNumber);
  }
}
