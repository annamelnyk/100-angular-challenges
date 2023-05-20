import { IAccordionItem, IUserData, IPlanetData } from './types';

export const accordionData: IAccordionItem[] = [
  {
    title: 'Example 1',
    body: 'Lorem iCommodo qui nisi do dolore do ad et eu labore est eu nostrud ipsum. Cillum nisi culpa duis sunt exercitation pariatur tempor occaecat dolor dolor. Eiusmod aliquip veniam dolor non proident laborum elit sunt. Adipisicing laboris anim fugiat in ut ad minim est dolore aliqua minim nulla non. Velit sit amet ea tempor exercitation excepteur deserunt sit ut nulla. Dolor duis aliquip qui adipisicing fugiat ex nostrud Lorem commodo amet nulla deserunt labore ad. Tempor pariatur nostrud Lorem excepteur ex magna eiusmod dolore.',
    isExpanded: true,
  },
  {
    title: 'Example 2',
    body: 'Lorem iCommodo qui nisi do dolore do ad et eu labore est eu nostrud ipsum. Cillum nisi culpa duis sunt exercitation pariatur tempor occaecat dolor dolor. Eiusmod aliquip veniam dolor non proident laborum elit sunt. Adipisicing laboris anim fugiat in ut ad minim est dolore aliqua minim nulla non. Velit sit amet ea tempor exercitation excepteur deserunt sit ut nulla. Dolor duis aliquip qui adipisicing fugiat ex nostrud Lorem commodo amet nulla deserunt labore ad. Tempor pariatur nostrud Lorem excepteur ex magna eiusmod dolore.',
    isExpanded: false,
  },
  {
    title: 'Example 3',
    body: 'Lorem iCommodo qui nisi do dolore do ad et eu labore est eu nostrud ipsum. Cillum nisi culpa duis sunt exercitation pariatur tempor occaecat dolor dolor. Eiusmod aliquip veniam dolor non proident laborum elit sunt. Adipisicing laboris anim fugiat in ut ad minim est dolore aliqua minim nulla non. Velit sit amet ea tempor exercitation excepteur deserunt sit ut nulla. Dolor duis aliquip qui adipisicing fugiat ex nostrud Lorem commodo amet nulla deserunt labore ad. Tempor pariatur nostrud Lorem excepteur ex magna eiusmod dolore.',
    isExpanded: false,
  },
];

export const simpleTableUserData: IUserData[] = [
  { 'first Name': 'Anna', 'last Name': 'Melnyk', dob: '03/08/1989' },
  { 'first Name': 'Anton', 'last Name': 'Melnyk', dob: '30/09/1985' },
  { 'first Name': 'Daniil', 'last Name': 'Melnyk', dob: '30/11/2021' },
];
export const simpleTablePlanetData: IPlanetData[] = [
  {
    name: 'Tatooine',
    'rotation period': 23,
    'orbital period': 304,
    diameter: 10465,
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    'surface water': 1,
    population: 200000,
  },
  {
    name: 'Alderaan',
    'rotation period': 24,
    'orbital period': 364,
    diameter: 12500,
    climate: 'temperate',
    gravity: '1 standard',
    terrain: 'grasslands, mountains',
    'surface water': 40,
    population: 2000000000,
  },
];
