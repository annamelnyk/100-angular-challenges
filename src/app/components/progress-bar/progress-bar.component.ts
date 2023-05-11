import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() public updatedProgressValue: number = 0;

  public progressValue: number = 0;
  
  onUpdate(): void {
    if (this.updatedProgressValue < 0 || this.updatedProgressValue > 100) {
      alert('The value must be from 0 to 100');

      return;
    }

    this.progressValue = this.updatedProgressValue;
  }

}
