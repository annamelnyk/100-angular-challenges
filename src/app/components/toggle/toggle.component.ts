import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  @Input() public isOn: boolean = true;

  public onToggle() {
    this.isOn = !this.isOn;
  }
}
