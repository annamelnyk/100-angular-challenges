import { Routes } from '@angular/router';

import { DocumentationComponentsComponent } from './components/documentation-components/documentation-components.component';
import { DocumentationPipesComponent } from './pipes/documentation-pipes/documentation-pipes.component';
import { DocumentationDirectivesComponent } from './directives/documentation-directives/documentation-directives.component';
import { DocumentationServicesComponent } from './services/documentation-services/documentation-services.component';

export const APP_ROUTES: Routes = [
  { path: '', component: DocumentationComponentsComponent },
  { path: 'pipes', component: DocumentationPipesComponent },
  { path: 'directives', component: DocumentationDirectivesComponent },
  { path: 'services', component: DocumentationServicesComponent },
];
