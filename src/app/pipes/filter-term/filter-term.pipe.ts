import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTerm',
})
export class FilterTermPipe implements PipeTransform {
  transform(data: string[], filter: string): string[] {
    return data.filter((value) =>
      value.toLocaleLowerCase().includes(filter.toLowerCase())
    );
  }
}
