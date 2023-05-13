import { Routes } from '@angular/router';

import { DocumentationPipesComponent } from './documentation-pipes/documentation-pipes.component';

export const PIPES_ROUTES: Routes = [
  // It's concatinating strings and we already added 'pipes' route to app.routes.ts
  { path: '', component: DocumentationPipesComponent },
];
