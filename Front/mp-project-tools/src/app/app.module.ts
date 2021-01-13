import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModelloComponent } from './modello/modello.component';
import { ProgettoComponent } from './progetto/progetto.component';
import { EntitaComponent } from './entita/entita.component';
import { ControllerComponent } from './component/typeorm/controller/controller.component';
import { ErrorComponent } from './component/error/error.component';
import { InterfacesComponent } from './component/interfaces/interfaces.component';
import { ModelComponent } from './component/typeorm/model/model.component';
import { RepositoryComponent } from './component/typeorm/repository/repository.component';
import { ViewComponent } from './component/typeorm/view/view.component';
import { ApiComponent } from './component/express/api/api.component';
import { MiddlewareComponent } from './component/express/middleware/middleware.component';
import { MermaidErComponent } from './mermaid-er/mermaid-er.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelloComponent,
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
    MermaidErComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
