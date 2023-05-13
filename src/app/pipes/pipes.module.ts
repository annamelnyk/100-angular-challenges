import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DocumentationPipesComponent } from './documentation-pipes/documentation-pipes.component';
import { PIPES_ROUTES } from './pipes.routes';

@NgModule({
  declarations: [DocumentationPipesComponent],
  imports: [CommonModule, RouterModule.forChild(PIPES_ROUTES)],
})
export class PipesModule {}
