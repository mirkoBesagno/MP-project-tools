import { IfStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entita } from 'src/app/componenti/entita/entita.component';
import { AttributoModel, TipologiaAttributo } from 'src/app/model/typeorm/model/Model';
import { AttributoModelComponent } from '../attributo-model/attributo-model.component';
import { Utility } from "../progetto-er/Utility";
import { EntitaEr } from './EntitaEr';

@Component({
  selector: 'app-entita-er',
  templateUrl: './entita-er.component.html',
  styleUrls: ['./entita-er.component.css']
})
export class EntitaERComponent implements OnInit {

  TipologiaAttributo = TipologiaAttributo;

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
    if (item == TipologiaAttributo[TipologiaAttributo.vettore] || item == TipologiaAttributo[TipologiaAttributo.forkey]) {
      this.possibilitaTipoAttributo = Utility.Progetto.GetListaNomiEntitaER();
    }
  }
  ClickTipoAttribtuo(item: string) {
    this.attributoNuovo.tipoAttributo = item;
    this.ModificaTipoAttributoNuovo(this.attributoNuovo.tipoAttributo);
  }
  possibilitaTipoAttributo: string[] = [];
  ModificaTipoAttributoNuovo(item: string) {
    this.attributoNuovo.tipoAttributo = item;
    if (this.attributoNuovo.tipologia == TipologiaAttributo[TipologiaAttributo.vettore] ||
      this.attributoNuovo.tipologia == TipologiaAttributo[TipologiaAttributo.forkey]) {
      this.attributoNuovo.nomeAttributo = this.attributoNuovo.tipologia + item.substring(0, 1).toUpperCase() + item.substr(1);
    }
  }

  constructor() {

  }
  nomiEntita: string[] = [];
  AggiornaEntita() {
    this.nomiEntita = [];
    try {

      for (let index = 0; index < Utility.Progetto.listaEntitaER.length; index++) {
        const element = Utility.Progetto.listaEntitaER[index];
        this.nomiEntita.push(element.nomeEntita);
      }
    } catch (error) {
      console.log("Errore : " + error);

    }
  }
  ClickSelezionaEntita(item: string) {
    for (let index = 0; index < Utility.Progetto.listaEntitaER.length; index++) {
      const element = Utility.Progetto.listaEntitaER[index];
      if (element.nomeEntita == item) {
        this.entitaSelezionata = element;
        this.newEntitaSelezionata.emit(element);
      }
    }
  }
  @Output() newEntitaSelezionata = new EventEmitter<EntitaEr>();

  ngOnInit(): void {
  }

  AggiungiAttributo() {
    this.entitaSelezionata.AggiungiAttributo(this.attributoNuovo);
    this.attributoNuovo = new AttributoModel();
    document.getElementById('tipologiaEntita').focus();
  }
}
