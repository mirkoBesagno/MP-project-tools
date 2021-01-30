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
  PosizioneElemento(item: string) {
    for (let index = 0; index < this.listaEntitaER.length; index++) {
      const element = this.listaEntitaER[index];
      if (element.nomeEntita == item) {
        return index;
      }
    }
    return -1;
  }
  SalvaEntita() {
    for (let index = 0; index < this.nuovaEntita.listaAttributi.length; index++) {
      const attributoNuovaEntita = this.nuovaEntita.listaAttributi[index];
      if (attributoNuovaEntita.tipologia == TipologiaAttributo[TipologiaAttributo.vettore] ||
        attributoNuovaEntita.tipologia == TipologiaAttributo[TipologiaAttributo.forkey]) {
        var presente: boolean = false;
        for (let index = 0; index < this.listaEntitaER.length; index++) {
          const element = this.listaEntitaER[index];
          if (element.nomeEntita == attributoNuovaEntita.tipoAttributo) {
            presente = true;
            if (attributoNuovaEntita.tipologia == TipologiaAttributo[TipologiaAttributo.vettore]) {
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
            }
            element.AggiungiAttributo(attnew);
          }
        }
        if (presente == false) {
          var entTmp = new EntitaEr();
          entTmp.nomeEntita = attributoNuovaEntita.tipoAttributo;
          entTmp.tiopoEntita = TipologiaEntita[TipologiaEntita.entita];
          if (attributoNuovaEntita.tipologia == TipologiaAttributo[TipologiaAttributo.vettore]) {
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
          }
          entTmp.AggiungiAttributo(attnew);
          this.listaEntitaER.push(entTmp);
        }
      }
    }

    if (this.PosizioneElemento(this.nuovaEntita.nomeEntita) >= 0) {
      console.log("Gia presente");
      var tmp = this.listaEntitaER[this.PosizioneElemento(this.nuovaEntita.nomeEntita)];
      for (let index = 0; index < this.nuovaEntita.listaAttributi.length; index++) {
        const attrNuovo = tmp.listaAttributi[index];
        var presente = false;
        for (let index2 = 0; index2 < tmp.listaAttributi.length; index2++) {
          const element = tmp.listaAttributi[index2];
          if (attnew.nomeAttributo == element.nomeAttributo) {
            presente = true;
          }
        }
        if (presente) {

        } else {
          tmp.AggiungiAttributo(attrNuovo);
        }
      }
      this.nuovaEntita = new EntitaEr();
    } else {
      this.listaEntitaER.push(this.nuovaEntita);
      this.nuovaEntita = new EntitaEr();
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
        this.indiceEntitaSelezionata = index;
      }
    }
  }

  generaEr() {
    const tmp = "classDiagram " + Utility.Progetto.GetEntitaPerDiagrammaEr();
    this.testoEr = tmp.toString(); /* <br> */
  }
}


