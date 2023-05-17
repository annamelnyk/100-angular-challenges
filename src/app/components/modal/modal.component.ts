import {
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() title: string = '';
  @Output() onModalClose: EventEmitter<boolean> = new EventEmitter();

  _isShown = signal(true);
  @Input() public set isShown(value: boolean) {
    this._isShown.set(value);
  }

  public get isShown(): boolean {
    return this._isShown();
  }

  public closeModal(): void {
    this.onModalClose.emit(false);
    this._isShown.set(false);
  }

  public openModal(): void {
    this._isShown.set(true);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }
}
