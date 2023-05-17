import { Component, HostListener } from '@angular/core';

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
  public isModalOpen: boolean = false;

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isLoaderOn = false;
      this.isModalOpen = false;
    }
  }

  public showHideModal() {
    this.isModalOpen = !this.isModalOpen;
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
