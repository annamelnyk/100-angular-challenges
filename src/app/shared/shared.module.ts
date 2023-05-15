import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { CreditCardFormatterPipe } from '../pipes/credit-card-formatter/credit-card-formatter.pipe';
import { CreditCardEncriptedPipe } from '../pipes/creditCardEncripted/credit-card-encripted.pipe';

@NgModule({
  declarations: [CardComponent, CreditCardFormatterPipe, CreditCardEncriptedPipe],
  exports: [CardComponent, CreditCardFormatterPipe, CreditCardEncriptedPipe],
  imports: [CommonModule],
})
export class SharedModule {}
