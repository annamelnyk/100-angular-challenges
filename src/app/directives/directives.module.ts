import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DocumentationDirectivesComponent } from './documentation-directives/documentation-directives.component';
import { DIRECTIVES_ROUTES } from './directives.routes';
import { SharedModule } from '../shared/shared.module';
import { DebounceDirective } from './debounce/debounce.directive';

@NgModule({
  declarations: [DocumentationDirectivesComponent, DebounceDirective],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DIRECTIVES_ROUTES),
  ],
})
export class DirectivesModule {}
