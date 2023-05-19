import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-rich-text-viewer',
  templateUrl: './rich-text-viewer.component.html',
  styleUrls: ['./rich-text-viewer.component.scss'],
})
export class RichTextViewerComponent implements AfterViewInit {
  private _content: string = '';
  @ViewChild('viewer') viewer!: ElementRef<HTMLDivElement>;
  @Input('content')
  public set content(value: string) {
    const regex: RegExp = new RegExp(/<[^]*?>/g);
    const hasContent = value.replace(regex, '').trim().length > 0;

    if (value.match(regex) && hasContent) {
      this._content = value;
      console.log('in regex match');
    } else {
      const warningContent: string = '<p>Not available content</p>';

      this._content = warningContent;
    }
  }

  public get content(): string {
    return this._content;
  }

  ngAfterViewInit() {
    this.viewer.nativeElement.innerHTML = this.content;
  }
}
