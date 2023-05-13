import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DocumentationServicesComponent } from './documentation-services/documentation-services.component';
import { SERVICES_ROUTES } from './services.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DocumentationServicesComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(SERVICES_ROUTES)],
})
export class ServicesModule {}
