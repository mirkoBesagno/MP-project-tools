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

@NgModule({
  declarations: [
    AppComponent,
    ProgettoComponent,
    EntitaErComponent,
    ListaEntitaErComponent,
    AttributoEntitaComponent,
    ListaAttributoEntitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
