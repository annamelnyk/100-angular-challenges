import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(
    text: string,
    ...args: any
  ): string {
    const characterLength = args[0] || 100;
    const endOfString = args[1] || '...';
    const truncatedText = text.slice(0, characterLength);

    if (text.length > characterLength) {
      return truncatedText.concat(endOfString);
    }

    return truncatedText;
  }
}
