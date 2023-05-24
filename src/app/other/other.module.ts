import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { DocumentationOtherComponent } from './documentation-other/documentation-other/documentation-other.component';
import { RouterModule } from '@angular/router';
import { OTHER_ROUTES } from './other.routes';

@NgModule({
  declarations: [DocumentationOtherComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(OTHER_ROUTES)],
})
export class OtherModule {}
