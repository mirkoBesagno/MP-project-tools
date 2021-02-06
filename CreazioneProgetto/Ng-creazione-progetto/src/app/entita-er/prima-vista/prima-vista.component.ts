import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AttributoEntita } from 'src/app/attributo-entita/attributo-entita.entita';
import { TipologiaAttributo } from 'src/app/attributo-entita/enum/TipologiaAttributo.1';
import * as EnumTipologiaAttributo from 'src/app/attributo-entita/enum/TipologiaAttributo';
import { Utility } from 'src/app/utility/utility.entita';
import { EntitaER } from '../entita-er.entita';

@Component({
  selector: 'app-entita-er-prima-vista',
  templateUrl: './prima-vista.component.html',
  styleUrls: ['./prima-vista.component.css']
})
export class PrimaVistaEntitaErComponent extends EntitaER implements OnInit {

  id = "";
  @Input() set SetId(item: string) {
    this.id = item;
  }
  testoEr = "";
  enumTipologiaAttributo = EnumTipologiaAttributo.TipologiaAttributo;

  entitaSelezionata: EntitaER = new EntitaER();

  attributoNuovo: AttributoEntita = new AttributoEntita();

  possibiliNomiEntita: string[] = [];


  abilitaNuovoAttributo
  @Input()
  set SetaMostraAttributo(item: boolean) {
    debugger;
    this.abilitaNuovoAttributo = item;
  }

  @Input()
  set SetEntitaSelezionata(item: EntitaER) {
    this.entitaSelezionata = item;
    if (this.id = "") {
      this.id = item.nomeEntita;
    }
    //this.CreaDiagrammaER();
  }
  constructor() { super(); }
  SettaTipologiaConString(item:string){
    this.attributoNuovo.SettaTipologiaConString(item);
    this.ModificaPossibilitaTipi();
  }
  CreaDiagrammaER() {
    if (this.entitaSelezionata.GetPerDiagrammaER() != '' || this.entitaSelezionata.GetPerDiagrammaER() != undefined) {
      const tmp = "classDiagram " + this.entitaSelezionata.GetPerDiagrammaER();
      this.testoEr = tmp.toString(); /* <br> */
    }
  }
  ClickTipoAttribtuo(item: string) {
    debugger;
    this.attributoNuovo.tipoAttributo = item;
    this.attributoNuovo.ModificaTipoAttributo(this.attributoNuovo.tipoAttributo);
  }
  possibilitaTipoAttributo: string[] = [];
  AggiornaEntita() {
    this.possibiliNomiEntita = [];
    try {

      for (let index = 0; index < Utility.Progetto.listaEntitaER.length; index++) {
        const element = Utility.Progetto.listaEntitaER[index];
        this.possibiliNomiEntita.push(element.nomeEntita);
      }
    } catch (error) {
      console.log("Errore : " + error);

    }
  }
  ClickSelezionaEntita(item: string) {
    debugger;
    for (let index = 0; index < Utility.Progetto.listaEntitaER.length; index++) {
      const element = Utility.Progetto.listaEntitaER[index];
      if (element.nomeEntita == item) {
        this.entitaSelezionata = element;
        this.CreaDiagrammaER();
        this.newEntitaSelezionata.emit(element);
      }
    }
  }

  @Output() newEntitaSelezionata = new EventEmitter<EntitaER>();

  ngOnInit(): void {
  }
  ModificaPossibilitaTipi() {
    if (this.attributoNuovo.tipologia == TipologiaAttributo.forkey || this.attributoNuovo.tipologia == TipologiaAttributo.vettore) {
      this.possibilitaTipoAttributo = Utility.Progetto.GetListaNomiEntitaER();
    }
    else {
      this.possibilitaTipoAttributo = Utility.ElenecoTipoAttributoPerAltro();
    }

  }
  AggiungiAttributo() {
    debugger;
    this.entitaSelezionata.AggiungiAttributo(this.attributoNuovo);
    this.attributoNuovo = new AttributoEntita();
    document.getElementById('tipologiaEntita').focus();
    //this.CreaDiagrammaER();
  }

}
