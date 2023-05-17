import {
  Directive,
  OnInit,
  OnDestroy,
  HostListener,
  EventEmitter,
  Output,
} from '@angular/core';
import { Observable, Subject, Subscription, debounceTime } from 'rxjs';

@Directive({
  selector: '[appDebounce]',
})
export class DebounceDirective implements OnInit, OnDestroy {
  @Output() public debounceClick: EventEmitter<any> = new EventEmitter();
  public clicks = new Subject();
  public subscription!: Subscription;

  ngOnInit(): void {
    const debounceTimeInMs = 500;

    this.subscription = this.clicks
      .pipe(debounceTime(debounceTimeInMs))
      .subscribe((value: any) => this.debounceClick.emit(value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  public clickEvent(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    
    this.clicks.next(e);
  }
}
