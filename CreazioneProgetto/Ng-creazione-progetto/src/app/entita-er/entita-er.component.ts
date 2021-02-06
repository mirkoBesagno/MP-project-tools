import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EntitaER } from './entita-er.entita';
import { TipologiaEntita } from './enum/TipologiaEntita';

@Component({
  selector: 'app-entita-er',
  templateUrl: './entita-er.component.html',
  styleUrls: ['./entita-er.component.css']
})
export class EntitaErComponent extends EntitaER implements OnInit {

  triggeraNuovoAttributo = false;
  abilitaNuovoAttributo;
  @Input() set AbilitaNuovoAttributo(item: boolean) {
    this.abilitaNuovoAttributo = item;
  }
  @Input() set Inizializza(item: EntitaER) {
    debugger;
    super.id = item.id;
    super.listaAttributi = item.listaAttributi;
    super.nomeEntita = item.nomeEntita;
    super.testoEr = item.testoEr;
    super.tipologiaEntitaER = item.tipologiaEntitaER;
  }
  @Output() newEntitaER = new EventEmitter<EntitaER>()//();//;
  @Input() set triggeraNuovaEntita(item: boolean) {
    debugger;
    if (item) {
      var tmp = new EntitaER();
      tmp.listaAttributi = this.listaAttributi;
      tmp.nomeEntita = this.nomeEntita;
      tmp.testoEr = this.testoEr;
      tmp.tipologiaEntitaER = this.tipologiaEntitaER;
      this.newEntitaER.emit(tmp);
    }
  }

  public SetTipologiaEntitaER(v: string) {
    try {
      this.tipologiaEntitaER = TipologiaEntita[v];
    } catch (error) {
      console.log("Errore MIRKO : " + error);
      console.log(error);
    }
  }
  SetNomeEntita(item: string){
this.nomeEntita = item;
  }


  constructor() { super(); }

  ngOnInit(): void {
  }
  StampaElemento() {
    console.log(this);
  }
  /* 
    ModificaTipologiaAttributoNuovo(item: string) {
      this.attributoNuovo.tipologia = item;
      if (item == TipologiaAttributo[TipologiaAttributo.vettore] || item == TipologiaAttributo[TipologiaAttributo.forkey]) {
        this.possibilitaTipoAttributo = Utility.Progetto.GetListaNomiEntitaER();
      }
    }
    CreaDiagrammaER() {
      if (this.entitaSelezionata.GetPerDiagrammaER() != '' || this.entitaSelezionata.GetPerDiagrammaER() != undefined) {
        const tmp = "classDiagram " + this.entitaSelezionata.GetPerDiagrammaER();
        this.testoEr = tmp.toString(); 
      }
    }
    ModificaTipoAttributoNuovo(item: string) {
      this.attributoNuovo.tipoAttributo = item;
      if (this.attributoNuovo.tipologia == TipologiaAttributo[TipologiaAttributo.vettore] ||
        this.attributoNuovo.tipologia == TipologiaAttributo[TipologiaAttributo.forkey]) {
        this.attributoNuovo.nomeAttributo = this.attributoNuovo.tipologia + item.substring(0, 1).toUpperCase() + item.substr(1);
      }
    }
  
  
    AggiungiAttributo() {
      this.entitaSelezionata.AggiungiAttributo(this.attributoNuovo);
      this.attributoNuovo = new AttributoModel();
      document.getElementById('tipologiaEntita').focus();
      this.CreaDiagrammaER();
    } */
}
