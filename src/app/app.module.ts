import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { APP_ROUTES } from './app.routes';
import { DocumentationComponentsComponent } from './components/documentation-components/documentation-components.component';
import { DocumentationPipesComponent } from './pipes/documentation-pipes/documentation-pipes.component';
import { DocumentationDirectivesComponent } from './directives/documentation-directives/documentation-directives.component';
import { DocumentationServicesComponent } from './services/documentation-services/documentation-services.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeaderComponent,
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingComponent,
    TopOfPageComponent,
    DocumentationComponentsComponent,
    DocumentationPipesComponent,
    DocumentationDirectivesComponent,
    DocumentationServicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
