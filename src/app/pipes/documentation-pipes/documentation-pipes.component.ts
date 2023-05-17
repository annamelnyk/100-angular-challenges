import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation-pipes',
  templateUrl: './documentation-pipes.component.html',
  styleUrls: ['./documentation-pipes.component.scss'],
})
export class DocumentationPipesComponent {
  public initialFlattenArray: Array<any> = [1,2,[3, 4, [5, 6, [7, 8, [9, 10]]]],];
  public flattenData: Array<any> = this.initialFlattenArray;

  public modifyFlattenData(): void {
    console.log('before mod ', this.flattenData);
    this.flattenData.push(3, 4, 5);
    console.log('after mod ', this.flattenData);
  }

  // will work with pure pipe
  public reassignFlattenData(): void {
    this.flattenData = [...this.flattenData];
  }
}
