import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { OTHER_ROUTES } from './other.routes';
import { DocumentationOtherComponent } from './documentation-other/documentation-other.component';
import { FadeInFadeOutComponent } from './animations/fade-in-fade-out/fade-in-fade-out.component';

@NgModule({
  declarations: [
    DocumentationOtherComponent,
    FadeInFadeOutComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(OTHER_ROUTES)],
})
export class OtherModule {}
