import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgettoComponent } from './componenti/progetto/progetto.component';
import { EntitaComponent } from './componenti/entita/entita.component';
import { ControllerComponent } from './componenti/controller/controller.component';
import { ErrorComponent } from './componenti/error/error.component';
import { InterfacesComponent } from './componenti/interfaces/interfaces.component';
import { ModelComponent } from './componenti/model/model.component';
import { RepositoryComponent } from './componenti/repository/repository.component';
import { ViewComponent } from './componenti/view/view.component';
import { ApiComponent } from './componenti/api/api.component';
import { MiddlewareComponent } from './componenti/middleware/middleware.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgettoComponent,
    EntitaComponent,
    ControllerComponent,
    ErrorComponent,
    InterfacesComponent,
    ModelComponent,
    RepositoryComponent,
    ViewComponent,
    ApiComponent,
    MiddlewareComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
