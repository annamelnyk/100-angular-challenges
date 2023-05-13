import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DocumentationServicesComponent } from './documentation-services/documentation-services.component';
import { SERVICES_ROUTES } from './services.routes';

@NgModule({
  declarations: [DocumentationServicesComponent],
  imports: [CommonModule, RouterModule.forChild(SERVICES_ROUTES)],
})
export class ServicesModule {}
