import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ITab } from 'src/app/types';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() public tabsList: Array<ITab> = [];
  @Input() public selectedTabIndex: number = 0;
  @Output() public selectedTab: EventEmitter<number> =
    new EventEmitter<number>();

  public selectTab(tab: ITab, index: number) {
    this.selectedTab.emit(index);
  }
}
