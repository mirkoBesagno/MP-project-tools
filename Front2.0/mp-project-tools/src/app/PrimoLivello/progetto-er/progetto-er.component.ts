import { Component, OnInit } from '@angular/core';
import { ProgettoModel } from 'src/app/model/progetto.model';
import { EntitaEr } from "../entita-er/EntitaEr";
import { Utility } from './Utility';
import { AttributoModel, TipoAttributo, TipologiaAttributo, TipologiaEntita } from "../../../app/model/typeorm/model/Model";
//import { TreeviewItem } from 'ngx-treeview';

@Component({
  selector: 'app-progetto-er',
  templateUrl: './progetto-er.component.html',
  styleUrls: ['./progetto-er.component.css']
})
export class ProgettoERComponent implements OnInit {

  config: {
    hasAllCheckBox: true,
    hasFilter: false,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
    maxHeight: 500
  };
  /* itCategory = new TreeviewItem({
    text: "IT",
    value: 9,
    children: [
      {
        text: "Programming",
        value: 91,
        children: [
          {
            text: "Frontend",
            value: 911,
            children: [
              { text: "Angular 1", value: 9111 },
              { text: "Angular 2", value: 9112 },
              { text: "ReactJS", value: 9113 },
            ],
          },
          {
            text: "Backend",
            value: 912,
            children: [
              { text: "C#", value: 9121 },
              { text: "Java", value: 9122 },
              { text: "Python", value: 9123, checked: false },
            ],
          },
        ],
      },
      {
        text: "Networking",
        value: 92,
        children: [
          { text: "Internet", value: 921 },
          { text: "Security", value: 922 },
        ],
      },
    ],
  }); */


  esisteProgetto: boolean = false;

  listaEntitaER: EntitaEr[] = []
  entitaSelezionate: EntitaEr[] = [];

  nuovaEntita: EntitaEr = new EntitaEr();

  testoEr: string = "";
  lenghtListaAttributiSapalla:number=0;

  pathProgetto: string = "";
  nomeProgetto: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  CreaProgetto() {
    this.esisteProgetto = true;
    Utility.Progetto = new ProgettoModel(this.pathProgetto, this.nomeProgetto, new Date(Date.now()));
    this.listaEntitaER = Utility.Progetto.listaEntitaER;
  }
  PosizioneElemento(item: string) {
    for (let index = 0; index < this.listaEntitaER.length; index++) {
      const element = this.listaEntitaER[index];
      if (element.nomeEntita == item) {
        return index;
      }
    }
    return -1;
  }
  ModificaElementoSelezionato(item: EntitaEr) {
    this.nuovaEntita = item;
    this.lenghtListaAttributiSapalla = item.listaAttributi.length;
  }
  SalvaEntita() {
    //se l'entita è gia presente parto dall'ultimo elemnto presente contando che i precedenti non possono essere toccati
    var indexMio=this.lenghtListaAttributiSapalla;
   /*  if (this.PosizioneElemento(this.nuovaEntita.nomeEntita)>=0) {
      var elementoOrigin = this.listaEntitaER[this.PosizioneElemento(this.nuovaEntita.nomeEntita)];      
      indexMio = elementoOrigin.listaAttributi.length;
    } */
    //giro gli attributi della nuova Entita per verificare che vi siano le corrispondenti per l'assegnazione
    for (let index = indexMio; index < this.nuovaEntita.listaAttributi.length; index++) {
      const attributoNuovaEntita = this.nuovaEntita.listaAttributi[index];
      //se l'attributo è una fk o un vett verifico la presenza delle corrispondenti Entita
      if (attributoNuovaEntita.tipologia == TipologiaAttributo[TipologiaAttributo.vettore] ||
        attributoNuovaEntita.tipologia == TipologiaAttributo[TipologiaAttributo.forkey]) {
        var presente: boolean = false;
        //giro l'elenco delle mie entita
        for (let index = 0; index < this.listaEntitaER.length; index++) {
          const element = this.listaEntitaER[index];
          if (element.nomeEntita == attributoNuovaEntita.tipoAttributo) {
            presente = true;
            const tmp: TipologiaAttributo = TipologiaAttributo[attributoNuovaEntita.tipologia];
            //se è presente costruisco l'attributo corrispondente e glielo assegno
            var attnew = this.CreaPrototipoAttributoOpposto(tmp);
            /*  if (attributoNuovaEntita.tipologia == TipologiaAttributo[TipologiaAttributo.vettore]) {
               var attnew = new AttributoModel();
               attnew.tipologia = TipologiaAttributo[TipologiaAttributo.vettore];
               //attnew.tipoAttributo = entTmp.nomeEntita;
               attnew.ModificaTipoAttributo(this.nuovaEntita.nomeEntita);
             }
             else if (attributoNuovaEntita.tipologia == TipologiaAttributo[TipologiaAttributo.forkey]) {
               var attnew = new AttributoModel();
               attnew.tipologia = TipologiaAttributo[TipologiaAttributo.vettore];
               //attnew.tipoAttributo = entTmp.nomeEntita;
               attnew.ModificaTipoAttributo(this.nuovaEntita.nomeEntita);
             } */
            element.AggiungiAttributo(attnew); //assegnazione attributo
          }
        }
        //se non è presente creo l'entita e gli assegno l'attributo
        if (presente == false) {
          var entTmp = new EntitaEr();
          entTmp.nomeEntita = attributoNuovaEntita.tipoAttributo;
          entTmp.tiopoEntita = TipologiaEntita[TipologiaEntita.entita];
          const tmp: TipologiaAttributo = TipologiaAttributo[attributoNuovaEntita.tipologia];
          var attnew = this.CreaPrototipoAttributoOpposto(tmp);
          /* if (attributoNuovaEntita.tipologia == TipologiaAttributo[TipologiaAttributo.vettore]) {
            var attnew = new AttributoModel();
            attnew.tipologia = TipologiaAttributo[TipologiaAttributo.forkey];
            //attnew.tipoAttributo = entTmp.nomeEntita;
            attnew.ModificaTipoAttributo(this.nuovaEntita.nomeEntita);
          }
          else if (attributoNuovaEntita.tipologia == TipologiaAttributo[TipologiaAttributo.forkey]) {
            var attnew = new AttributoModel();
            attnew.tipologia = TipologiaAttributo[TipologiaAttributo.vettore];
            //attnew.tipoAttributo = entTmp.nomeEntita;
            attnew.ModificaTipoAttributo(this.nuovaEntita.nomeEntita);
          } */
          entTmp.AggiungiAttributo(attnew);
          this.listaEntitaER.push(entTmp);
        }
      }
    }

    //verifico che l'entita che sto per aggiungere sia unica
    if (this.PosizioneElemento(this.nuovaEntita.nomeEntita) >= 0) {
      console.log("Gia presente");
      //altrimenti aggiungo l'attributo alla presente
      var entitaOriginale = this.listaEntitaER[this.PosizioneElemento(this.nuovaEntita.nomeEntita)];
      //forse posso evitare dato che glielo aggiungo gia , da verificare
      /* for (let index = indexMio; index < this.nuovaEntita.listaAttributi.length; index++) {
        const attrNuovo = entitaOriginale.listaAttributi[index];
        entitaOriginale.AggiungiAttributo(attrNuovo);
      } */
      this.nuovaEntita = new EntitaEr();
    } else {
      //se lo è la aggiungo
      this.listaEntitaER.push(this.nuovaEntita);
      this.nuovaEntita = new EntitaEr();
    }
  }
  CreaPrototipoAttributoOpposto(tipologiaOriginale: TipologiaAttributo) {
    if (tipologiaOriginale == TipologiaAttributo.vettore) {
      var attnew = new AttributoModel();
      attnew.tipologia = TipologiaAttributo[TipologiaAttributo.forkey];
      //attnew.tipoAttributo = entTmp.nomeEntita;
      attnew.ModificaTipoAttributo(this.nuovaEntita.nomeEntita);
      return attnew;
    }
    else if (tipologiaOriginale == TipologiaAttributo.forkey) {
      var attnew = new AttributoModel();
      attnew.tipologia = TipologiaAttributo[TipologiaAttributo.vettore];
      //attnew.tipoAttributo = entTmp.nomeEntita;
      attnew.ModificaTipoAttributo(this.nuovaEntita.nomeEntita);
      return attnew;
    }
  }

  indiceEntitaSelezionata = 0;
  AggiungiEntita(item: EntitaEr) {
    let presente: boolean = false;
    this.entitaSelezionate.forEach(element => {
      if (element.nomeEntita == item.nomeEntita) {
        presente = true;
      }
    });
    if (!presente) {
      this.entitaSelezionate.push(item);
    }
    for (let index = 0; index < this.entitaSelezionate.length; index++) {
      const element = this.entitaSelezionate[index];
      if (element.nomeEntita == item.nomeEntita) {
        this.lenghtListaAttributiSapalla = element.listaAttributi.length;
        this.indiceEntitaSelezionata = index;
      }
    }
  }

  generaEr() {
    const tmp = "classDiagram " + Utility.Progetto.GetEntitaPerDiagrammaEr();
    this.testoEr = tmp.toString(); /* <br> */
  }
}


