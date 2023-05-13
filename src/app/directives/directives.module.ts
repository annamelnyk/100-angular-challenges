import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DocumentationDirectivesComponent } from './documentation-directives/documentation-directives.component';
import { DIRECTIVES_ROUTES } from './directives.routes';



@NgModule({
  declarations: [DocumentationDirectivesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DIRECTIVES_ROUTES),
  ]
})
export class DirectivesModule { }
