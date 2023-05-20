export interface IAccordionItem {
  title: string;
  body: string;
  isExpanded: boolean;
}

export enum LoaderType {
  Circular = 'Circular',
  Loading = 'Loading',
}
export interface IUserData {
  'first Name': string;
  'last Name': string;
  dob: string;
}

export interface IPlanetData {
  name: string;
  'rotation period': number;
  'orbital period': number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  'surface water': number;
  population: number;
}
