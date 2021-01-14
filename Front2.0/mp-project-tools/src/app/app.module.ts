import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgettoComponent } from './componenti/progetto/progetto.component';
import { EntitaComponent } from './componenti/entita/entita.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgettoComponent,
    EntitaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
