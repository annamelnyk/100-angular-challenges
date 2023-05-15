import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { CreditCardFormatterPipe } from '../pipes/credit-card-formatter/credit-card-formatter.pipe';

@NgModule({
  declarations: [CardComponent, CreditCardFormatterPipe],
  exports: [CardComponent, CreditCardFormatterPipe],
  imports: [CommonModule],
})
export class SharedModule {}
