import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgettoComponent } from './progetto/progetto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntitaErComponent } from './entita-er/entita-er.component';
import { ListaEntitaErComponent } from './lista-entita-er/lista-entita-er.component';
import { AttributoEntitaComponent } from './attributo-entita/attributo-entita.component';
import { ListaAttributoEntitaComponent } from './lista-attributo-entita/lista-attributo-entita.component';
import { PrimaVistaProgettoComponent } from './progetto/prima-vista/prima-vista.component';
import { PrimaVistaEntitaErComponent } from "./entita-er/prima-vista/prima-vista.component";

import { MaterialModule } from './material/MaterialModule';

@NgModule({
  declarations: [
    AppComponent,
    ProgettoComponent,
    EntitaErComponent,
    ListaEntitaErComponent,
    AttributoEntitaComponent,
    ListaAttributoEntitaComponent,
    PrimaVistaProgettoComponent,
    PrimaVistaEntitaErComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
