import { Component, HostListener, signal, WritableSignal } from '@angular/core';

import {
  IAccordionItem,
  LoaderType,
  IUserData,
  IPlanetData,
  ITab,
} from 'src/app/types';
import {
  accordionData,
  simpleTablePlanetData,
  simpleTableUserData,
} from 'src/app/data';

@Component({
  selector: 'app-documentation-components',
  templateUrl: './documentation-components.component.html',
  styleUrls: ['./documentation-components.component.scss'],
})
export class DocumentationComponentsComponent {
  public accordionContent: IAccordionItem[] = accordionData;
  public progressBarValue: number = 75;
  public countriesList: string[] = [
    'Ukraine',
    'United States',
    'Australia',
    'France',
    'Armenia',
  ];
  // simple Table
  public simpleTablePlanets: IPlanetData[] = simpleTablePlanetData;
  public simpleTableUsers: IUserData[] = simpleTableUserData;

  //Paging
  public pagingDataToDisplay: any[] = new Array(24).fill({
    book: 'Harry Potter',
    author: 'J.K. Rowling',
  });
  private _currentPage: number = 1;

  public get currentPage(): number {
    return this._currentPage;
  }

  public set currentPage(value: number) {
    this._currentPage = value;
    console.log('_currentPage ', this._currentPage);
  }

  onPageChange(value: number): void {
    this.currentPage = value;
  }

  // Tabs
  public tabs: Array<ITab> = [
    { name: 'Tab 1', active: false, id: 'tab1' },
    { name: 'Tab 2', active: true, id: 'tab2' },
  ];
  public selectedTabIndex: number = 0;

  public onSelectTab(index: number) {
    this.selectedTabIndex = index;
  }

  // Loader
  public isLoaderOn: boolean = false;
  public loaderType: LoaderType = LoaderType.Loading;

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isLoaderOn = false;
    }
  }

  turnOnCircularLoader() {
    this.loaderType = LoaderType.Circular;
    this.isLoaderOn = true;
  }

  turnOnLoadingLoader() {
    this.loaderType = LoaderType.Loading;
    this.isLoaderOn = true;
  }

  // Quote
  public quoteText: string =
    'Tempor dolore sit consequat amet veniam irure do. Velit consectetur veniam occaecat ea elit incididunt nostrud ea esse labore eiusmod dolor amet. Ut nulla non quis laborum velit pariatur fugiat. Aliquip minim do mollit qui aliquip ipsum do excepteur eiusmod mollit irure in. Ad et duis cupidatat commodo voluptate eiusmod non minim ipsum consectetur enim eiusmod aute proident.';
  public quoteAuthor: string = 'Anna Melnyk';
  public quoteAuthorOccupation: string = 'Software Engineer';

  // Modal
  public isModalOpen: WritableSignal<boolean> = signal<boolean>(false);

  public showHideModal() {
    this.isModalOpen.update((value: boolean) => (value = !value));
  }

  public closeModal() {
    this.isModalOpen.set(false);
  }

  // Debounce search
  public debounceSearchValue: string = '';

  debounceSearch(value: string): void {
    console.log(value);
    this.debounceSearchValue = value;
  }
}
