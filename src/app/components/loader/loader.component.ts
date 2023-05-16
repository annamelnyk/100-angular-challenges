import { Component, Input } from '@angular/core';

import { LoaderType } from '../../types';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() public isLoading: boolean = false;
  @Input() public loaderType: LoaderType = LoaderType.Circular;
  
  // we can't refference to Enum directly so we have to create a wrapper
  public LoaderType = LoaderType;
}
