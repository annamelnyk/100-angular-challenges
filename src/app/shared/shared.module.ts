import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { CreditCardFormatterPipe } from '../pipes/credit-card-formatter/credit-card-formatter.pipe';
import { CreditCardEncriptedPipe } from '../pipes/creditCardEncripted/credit-card-encripted.pipe';
import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';

@NgModule({
  declarations: [CardComponent, CreditCardFormatterPipe, CreditCardEncriptedPipe, FilterTermPipe],
  exports: [CardComponent, CreditCardFormatterPipe, CreditCardEncriptedPipe, FilterTermPipe],
  imports: [CommonModule],
})
export class SharedModule {}
