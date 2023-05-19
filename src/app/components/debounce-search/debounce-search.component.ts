import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss'],
})
export class DebounceSearchComponent implements OnInit {
  @Input() public searchValue: string = '';
  private searchValue$: Subject<string> = new Subject();

  @Output() public debounceInputs: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    const debounceTimeInMs = 250;
    this.searchValue$
      .pipe(debounceTime(debounceTimeInMs), distinctUntilChanged())
      .subscribe((value: string) => this.debounceInputs.emit(value));
  }

  updateSearch(value: string): void {
    this.searchValue$.next(value);
  }
}
