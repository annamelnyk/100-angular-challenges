import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
})
export class CounterInputComponent {
  private _counterValue: number = 0;
  public min: number = 0;
  public max: number = Number.MAX_SAFE_INTEGER;
  @Input('counterValue')
  public set counterValue(value: number) {
    if (value >= this.min && value <= this.max) {
      this._counterValue = value;
    } else {
    this._counterValue = 0;
    }
  }

  public get counterValue(): number {
    return this._counterValue;
  }

  public increaseCounterValue(): void {
    this.counterValue += 1;
  }

  public decreaseCounterValue(): void {
    this.counterValue -= 1;}
}
