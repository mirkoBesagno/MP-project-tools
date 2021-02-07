import { Component, Input, OnInit, Output, EventEmitter, Directive, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AttributoEntita } from 'src/app/attributo-entita/attributo-entita.entita';
import { TipologiaAttributo } from "src/app/attributo-entita/enum/TipologiaAttributo.1";
import { EntitaER } from 'src/app/entita-er/entita-er.entita';
import { TipologiaEntita } from 'src/app/entita-er/enum/TipologiaEntita';
import { Utility } from 'src/app/utility/utility.entita';
import { Progetto } from '../progetto.entita';

/* @Directive({selector: 'diagramma-mermaid'})
export class DiagrammaMermaid {
  @Input() testo!: string;
} */

@Component({
  selector: 'app-progetto-prima-vista',
  templateUrl: './prima-vista.component.html',
  styleUrls: ['./prima-vista.component.css']
})
export class PrimaVistaProgettoComponent extends Progetto implements OnInit {
  
  constructor() {
    super("", "", Date[Date.now()]);
    if (Utility.Progetto == undefined) {
      Utility.Progetto = this;
    }
    else {
    }
    
  } //istanzio un'entita di progetto
  id = "";
  @Input() set SetId(item: string) {
    this.id = item;
  }
  testoEr = "";
  TipologiaAttributo = TipologiaAttributo;

  entitaSelezionata: EntitaER = new EntitaER();

  indiceEntitaSelezionata = 0;
  abilitaNuovoAttributo
  @Input()
  set SetaMostraAttributo(item: boolean) {
    this.abilitaNuovoAttributo = item;
  }

  @Input()
  set SetEntitaSelezionata(item: EntitaER) {
    this.entitaSelezionata = item;
    if (this.id = "") {
      this.id = item.nomeEntita;
    }
    this.CreaDiagrammaER();

  }
  @Output() newEntitaSelezionata = new EventEmitter<EntitaER>();
  esisteProgetto: boolean;
  nomiEntita: string[] = [];
  attributoNuovo: AttributoEntita = new AttributoEntita();
  lenghtListaAttributiSapalla = 0;

  ClickTipoAttribtuo(item: string) {
    this.attributoNuovo.tipoAttributo = item;
    this.ModificaTipoAttributoNuovo(this.attributoNuovo.tipoAttributo);
  }
  ModificaTipoAttributoNuovo(item: string) {
    this.attributoNuovo.tipoAttributo = item;
    if (this.attributoNuovo.tipologia == TipologiaAttributo.vettore ||
      this.attributoNuovo.tipologia == TipologiaAttributo.forkey) {
      this.attributoNuovo.nomeAttributo = this.attributoNuovo.tipologia + item.substring(0, 1).toUpperCase() + item.substr(1);
    }
  }
  possibilitaTipoAttributo: string[] = [];
  ModificaTipologiaAttributoNuovo(item: string) {
    this.attributoNuovo.SettaTipologiaConString(item);
    if (this.attributoNuovo.tipologia == TipologiaAttributo.vettore || this.attributoNuovo.tipologia == TipologiaAttributo.forkey) {
      this.possibilitaTipoAttributo = Utility.Progetto.GetListaNomiEntitaER();
    }
    else {
      this.possibilitaTipoAttributo = Utility.ElenecoTipoAttributoPerAltro();
    }
  }
  ModificaElementoSelezionato(item: EntitaER) {
    this.entitaSelezionata = item;
    this.lenghtListaAttributiSapalla = item.listaAttributi.listaAttributoEntita.length;
  }
  CreaDiagrammaER() {
    if (this.entitaSelezionata.GetPerDiagrammaER() != '' || this.entitaSelezionata.GetPerDiagrammaER() != undefined) {
      const tmp = "classDiagram " + this.entitaSelezionata.GetPerDiagrammaER();
      this.testoEr = tmp.toString(); /* <br> */
    }
  }
  generaEr() {
    debugger;
    const tmp = "classDiagram " + Utility.Progetto.GetEntitaPerDiagrammaEr();
    this.testoEr = tmp.toString(); /* <br> */
  }

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
        this.CreaDiagrammaER();
        this.newEntitaSelezionata.emit(element);
      }
    }
  }

  ngOnInit(): void {
  } 

  AggiungiAttributo() {
    this.entitaSelezionata.AggiungiAttributo(this.attributoNuovo);
    this.attributoNuovo = new AttributoEntita();
    document.getElementById('tipologiaEntita').focus();
    this.CreaDiagrammaER();
  }
  triggeraGetEntita = false;
  SalvaEntita() {
    debugger;
    this.triggeraGetEntita = true;
    //se l'entita è gia presente parto dall'ultimo elemnto presente contando che i precedenti non possono essere toccati
    var indexMio = this.lenghtListaAttributiSapalla;
    /*  if (this.PosizioneElemento(this.nuovaEntita.nomeEntita)>=0) {
       var elementoOrigin = this.listaEntitaER[this.PosizioneElemento(this.nuovaEntita.nomeEntita)];      
       indexMio = elementoOrigin.listaAttributi.length;
     } */
    //giro gli attributi della nuova Entita per verificare che vi siano le corrispondenti per l'assegnazione
    for (let index = indexMio; index < this.entitaSelezionata.listaAttributi.listaAttributoEntita.length; index++) {
      const attributoNuovaEntita: AttributoEntita = this.entitaSelezionata.listaAttributi.listaAttributoEntita[index];
      //se l'attributo è una fk o un vett verifico la presenza delle corrispondenti Entita
      if (attributoNuovaEntita.tipologia == TipologiaAttributo.vettore ||
        attributoNuovaEntita.tipologia == TipologiaAttributo.forkey) {
        var presente: boolean = false;
        //giro l'elenco delle mie entita
        for (let index = 0; index < this.listaEntitaER.length; index++) {
          const element = this.listaEntitaER[index];
          if (element.nomeEntita == attributoNuovaEntita.tipoAttributo) {
            presente = true;
            const tmp = attributoNuovaEntita.tipologia;
            //se è presente costruisco l'attributo corrispondente e glielo assegno
            var attnew = this.CreaPrototipoAttributoOpposto(tmp);
            debugger;
            attnew.ModificaTipoAttributo(this.entitaSelezionata.nomeEntita);
            element.AggiungiAttributo(attnew); //assegnazione attributo
          }
        }
        //se non è presente creo l'entita e gli assegno l'attributo
        if (presente == false) {
          var entTmp = new EntitaER();
          entTmp.nomeEntita = attributoNuovaEntita.tipoAttributo;
          entTmp.tipologiaEntitaER = TipologiaEntita.entita;
          const tmp: TipologiaAttributo = attributoNuovaEntita.tipologia;
          var attnew = this.CreaPrototipoAttributoOpposto(tmp);
          debugger;
          attnew.ModificaTipoAttributo(this.entitaSelezionata.nomeEntita);
          entTmp.AggiungiAttributo(attnew);
          this.listaEntitaER.push(entTmp);
        }
      }
    }

    //verifico che l'entita che sto per aggiungere sia unica
    if (this.PosizioneElemento(this.entitaSelezionata.nomeEntita) >= 0) {
      console.log("Gia presente");
      var entitaOriginale = this.listaEntitaER[this.PosizioneElemento(this.entitaSelezionata.nomeEntita)];
      this.entitaSelezionata = new EntitaER();
    } else {
      this.listaEntitaER.push(this.entitaSelezionata);
      this.entitaSelezionata = new EntitaER();
    }
  }
}
