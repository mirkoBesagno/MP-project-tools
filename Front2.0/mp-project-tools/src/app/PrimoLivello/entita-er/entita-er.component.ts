import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entita } from 'src/app/componenti/entita/entita.component';
import { AttributoModel } from 'src/app/model/typeorm/model/Model';
import { AttributoModelComponent } from '../attributo-model/attributo-model.component';
import { Utility } from "../progetto-er/Utility";
import { EntitaEr } from './EntitaEr';

@Component({
  selector: 'app-entita-er',
  templateUrl: './entita-er.component.html',
  styleUrls: ['./entita-er.component.css']
})
export class EntitaERComponent implements OnInit {

  entitaSelezionata: EntitaEr = new EntitaEr();

  abilitaNuovoAttributo
  @Input()
  set SetaMostraAttributo(item: boolean) {
    this.abilitaNuovoAttributo = item;
  }

  @Input()
  set SetEntitaSelezionata(item: EntitaEr) {
    this.entitaSelezionata = item;
  }

  attributoNuovo: AttributoModel = new AttributoModel();

  ModificaTipologiaAttributoNuovo(item: string) {
    this.attributoNuovo.tipologia = item;
    if (item == "fk" || item ==  "vett") {
      this.possibilitaTipoAttributo = Utility.Progetto.GetListaNomiEntitaER();
    }
  }
  ClickTipoAttribtuo(item: string){
    this.attributoNuovo.tipoAttributo=item;
    this.ModificaTipoAttributoNuovo(this.attributoNuovo.tipoAttributo);
  }
  possibilitaTipoAttributo: string[] = [];
  ModificaTipoAttributoNuovo(item: string) {
    this.attributoNuovo.tipoAttributo = item;
    if (this.attributoNuovo.tipologia == "fk" || this.attributoNuovo.tipologia == "vett") {
      this.attributoNuovo.nomeAttributo = this.attributoNuovo.tipologia + item.substring(0, 1).toUpperCase() + item.substr(1);
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  AggiungiAttributo() {
    this.entitaSelezionata.AggiungiAttributo(this.attributoNuovo);
    this.attributoNuovo = new AttributoModel();
    document.getElementById('tipologiaEntita').focus();
  }
}
