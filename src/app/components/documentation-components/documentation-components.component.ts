import { Component, HostListener, signal, WritableSignal } from '@angular/core';

import { IAccordionItem, LoaderType } from 'src/app/types';
import { accordionData } from 'src/app/data';

@Component({
  selector: 'app-documentation-components',
  templateUrl: './documentation-components.component.html',
  styleUrls: ['./documentation-components.component.scss'],
})
export class DocumentationComponentsComponent {
  public accordionContent: IAccordionItem[] = accordionData;
  public progressBarValue: number = 75;
  public isLoaderOn: boolean = false;
  public loaderType: LoaderType = LoaderType.Loading;
  public isModalOpen: WritableSignal<boolean> = signal<boolean>(false);

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isLoaderOn = false;
    }
  }

  public quoteText: string =
    'Tempor dolore sit consequat amet veniam irure do. Velit consectetur veniam occaecat ea elit incididunt nostrud ea esse labore eiusmod dolor amet. Ut nulla non quis laborum velit pariatur fugiat. Aliquip minim do mollit qui aliquip ipsum do excepteur eiusmod mollit irure in. Ad et duis cupidatat commodo voluptate eiusmod non minim ipsum consectetur enim eiusmod aute proident.';
  public quoteAuthor: string = 'Anna Melnyk';
  public quoteAuthorOccupation: string = 'Software Engineer';


  public showHideModal() {
    this.isModalOpen.update((value: boolean) => (value = !value));
  }

  public closeModal() {
    this.isModalOpen.set(false);
  }

  turnOnCircularLoader() {
    this.loaderType = LoaderType.Circular;
    this.isLoaderOn = true;
  }

  turnOnLoadingLoader() {
    this.loaderType = LoaderType.Loading;
    this.isLoaderOn = true;
  }
}
