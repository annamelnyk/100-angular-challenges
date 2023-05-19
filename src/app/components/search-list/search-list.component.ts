import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() public searchList: string[] = [];
  public hasBeenSelected = false;

  public searchValue: string = '';

  debounceSearch(value: string) {
    this.searchValue = value;
    this.hasBeenSelected = true;
  }

  selectSearchValue(item: string) {
    this.searchValue = item;
    this.hasBeenSelected = false;
  }
}
