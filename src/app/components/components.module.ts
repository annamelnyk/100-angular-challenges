import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DocumentationComponentsComponent } from './documentation-components/documentation-components.component';
import { COMPONENT_ROUTES } from './components.routes';
import { CardComponent } from './card/card.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { TopOfPageComponent } from './top-of-page/top-of-page.component';

@NgModule({
  declarations: [
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingComponent,
    TopOfPageComponent,
    DocumentationComponentsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(COMPONENT_ROUTES)],
})
export class ComponentsModule {}
