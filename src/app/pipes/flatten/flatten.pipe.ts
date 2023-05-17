import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
  pure: false,
})
export class FlattenPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return this.flattenArray(value);
  }

  private flattenArray(arr: any[]): any[] {
    const container: any[] = [];

    arr.forEach((value) => {
      if (Array.isArray(value)) {
        container.push(...this.flattenArray(value));
      } else {
        container.push(value);
      }
    });
    return container;
  }
}
