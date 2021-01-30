import { Component, OnInit } from '@angular/core';
import { ProgettoModel } from 'src/app/model/progetto.model';
import { EntitaEr } from "../entita-er/EntitaEr";
import { Utility } from './Utility';
import { AttributoModel, TipoAttributo, TipologiaAttributo, TipologiaEntita } from "../../../app/model/typeorm/model/Model";

@Component({
  selector: 'app-progetto-er',
  templateUrl: './progetto-er.component.html',
  styleUrls: ['./progetto-er.component.css']
})
export class ProgettoERComponent implements OnInit {


  esisteProgetto: boolean = false;

  listaEntitaER: EntitaEr[] = []
  entitaSelezionate: EntitaEr[] = [];

  nuovaEntita: EntitaEr = new EntitaEr();

  testoEr: string = "";

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
  SalvaEntita() {
    for (let index = 0; index < this.nuovaEntita.listaAttributi.length; index++) {
      const attr = this.nuovaEntita.listaAttributi[index];
      if (attr.tipologia == "vett" || attr.tipologia == "fk" || attr.tipologia == TipologiaAttributo[TipologiaAttributo.vettore] ||
       attr.tipologia == TipologiaAttributo[TipologiaAttributo.forkey]) {
        var presente: boolean = false;
        for (let index = 0; index < this.listaEntitaER.length; index++) {
          const element = this.listaEntitaER[index];
          if (element.nomeEntita == attr.tipoAttributo) {
            presente = true;
          }
        }
        if (presente == false) {
          var entTmp = new EntitaEr();
          entTmp.nomeEntita = attr.tipoAttributo;
          entTmp.tiopoEntita = TipologiaEntita[TipologiaEntita.entita];
          if (attr.tipologia == "vett" || TipologiaAttributo[TipologiaAttributo.vettore]) {
            var attnew = new AttributoModel();
            attnew.tipologia = TipologiaAttributo[TipologiaAttributo.forkey];
            //attnew.tipoAttributo = entTmp.nomeEntita;
            attnew.ModificaTipoAttributo(entTmp.nomeEntita);
          }
          else if (attr.tipologia == "fk" || TipologiaAttributo[TipologiaAttributo.forkey]) {
            var attnew = new AttributoModel();
            attnew.tipologia = TipologiaAttributo[TipologiaAttributo.vettore];
            //attnew.tipoAttributo = entTmp.nomeEntita;
            attnew.ModificaTipoAttributo(entTmp.nomeEntita);
          }
          entTmp.AggiungiAttributo(attnew);
          this.listaEntitaER.push(entTmp);
        }
      }
    }
    this.listaEntitaER.push(this.nuovaEntita);
    this.nuovaEntita = new EntitaEr();
  }
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
  }

  generaEr() {
    const tmp = "classDiagram " + Utility.Progetto.GetEntitaPerDiagrammaEr();
    this.testoEr = tmp.toString(); /* <br> */
  }
}


