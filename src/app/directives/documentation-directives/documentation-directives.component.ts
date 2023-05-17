import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation-directives',
  templateUrl: './documentation-directives.component.html',
  styleUrls: ['./documentation-directives.component.scss'],
})
export class DocumentationDirectivesComponent {
  public logMessage(): void {
    console.log('click');
  }
}
