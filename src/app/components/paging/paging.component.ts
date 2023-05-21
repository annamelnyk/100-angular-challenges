import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
})
export class PagingComponent {
  @Input() public totalAmountOfItems: number = 105;
  @Input() public amountOfItemsPerPage: number = 10;
  @Input() public currentPage: number = 1;
  @Input() public step: number = 2;
  @Output() public pageChange: EventEmitter<number> =
    new EventEmitter<number>();
  public iterableAmountOfPages: number[] = [];

  public get amountOfPages(): number {
    let pages: number = Math.floor(
      this.totalAmountOfItems / this.amountOfItemsPerPage
    );

    if (this.totalAmountOfItems % this.amountOfItemsPerPage) {
      pages += 1;
    }

    this.iterableAmountOfPages = new Array(pages).fill('');

    return pages;
  }

  public isActivePage(page: number): boolean {
    return page === this.currentPage;
  }

  public isNextStepDisabled(): boolean {
    return this.currentPage === this.amountOfPages;
  }

  public isPrevStepDisabled(): boolean {
    return this.currentPage === 1;
  }

  public goToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.pageChange.emit(pageNumber);
  }

  public nextPage(): void {
    if (this.isNextStepDisabled()) return;
    
    let nextStep = this.currentPage + this.step;
    let updatedPage;

    if (nextStep <= this.amountOfPages) {
      updatedPage = nextStep;
    } else {
      updatedPage = this.amountOfPages;
    }

    this.currentPage = updatedPage;
    this.pageChange.emit(updatedPage);
  }

  public prevPage(): void {
    if (this.isPrevStepDisabled()) return;

    const prevStep = this.currentPage - this.step;
    let updatedPage;

    if (prevStep >= 1) {
      updatedPage = prevStep;
    } else {
      updatedPage = 1;
    }
    this.currentPage = updatedPage;
    this.pageChange.emit(updatedPage);
  }
}
