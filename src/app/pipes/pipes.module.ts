import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DocumentationPipesComponent } from './documentation-pipes/documentation-pipes.component';
import { PIPES_ROUTES } from './pipes.routes';
import { SharedModule } from '../shared/shared.module';
import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
  declarations: [DocumentationPipesComponent, TruncatePipe],
  imports: [CommonModule, SharedModule, RouterModule.forChild(PIPES_ROUTES)],
})
export class PipesModule {}
