export interface IAccordionItem {
  title: string;
  body: string;
  isExpanded: boolean;
}

export enum LoaderType {
  Circular = 'Circular',
  Loading = 'Loading',
}
