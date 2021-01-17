import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AttributoModel, TipoAttributo, TipologiaAttributo, TipologiaEntita } from '../../model/typeorm/model/Model';
import { ProgettoComponent } from '../progetto/progetto.component';

export class Entita {

  
  
  constructor(nome: string, tipo: string) {
    this.nomeEntita=nome;
    this.tiopoEntita=tipo;
  }


  tiopoEntita: string;
  nomeEntita: string;

  listaAttributi: AttributoModel[] = [];
}

@Component({
  selector: 'app-entita',
  templateUrl: './entita.component.html',
  styleUrls: ['./entita.component.css']
})
export class EntitaComponent implements AfterViewInit {

  nomiEntita: string[] = [];

  tiopoEntita: string;
  nomeEntita: string;

  listaAttributi: AttributoModel[] = [];

  tipoAttributo: string;
  tipologiaAttributo: string;
  nomeAttributo: string;


  constructor() {
    this.nomeAttributo = "";
    this.nomeEntita = "";
    this.tiopoEntita = "";
    this.tipoAttributo = "int";
    this.tipologiaAttributo = "altro";
  }

  ngAfterViewInit(): void {

  }
  /* ngOnInit(): void {
  } */

  @Output() newEntita = new EventEmitter<Entita>();
  AggiungiEntita() {

    /* ProgettoComponent.progetto.typeorm.AggiungiEntita_model_repository_controller(
      this.nomeEntita, this.listaAttributi
    ); */


    const t: Entita = new Entita(this.nomeEntita, this.tipoAttributo);

    t.listaAttributi = this.listaAttributi;
    this.newEntita.emit(t);
this.nomiEntita = ProgettoComponent.progetto.GetListaNomiEntita();
    this.nomeAttributo = "";
    this.nomeEntita = "";

    this.tiopoEntita = "";
    this.tipoAttributo = "int";

    this.tipologiaAttributo = "altro";
    this.listaAttributi = [];
  }
  /* AggiungiEntita() {

    ProgettoComponent.progetto.typeorm.AggiungiEntita_model_repository_controller(
      ProgettoComponent.progetto.nome, this.listaAttributi
    );

  } */
  AggiungiAttributo() {
    this.ModificaTipologia(this.tipologiaAttributo);
    this.ModificaTipo(this.tipoAttributo);
    this.listaAttributi.push(new AttributoModel(this.nomeAttributo,
      this.tipoAttributo,
      this.tipologiaAttributo));
      this.tipoAttributo="";
      this.tipologiaAttributo="";
      this.nomeAttributo="";

  }
  ModificaTipologiaEntita(item: string) {
    const t = TipologiaEntita[item];
    switch (TipologiaEntita[item]) {
      //    entita, attore
      case 0:
        this.tiopoEntita = "entita";
        break;
      case 1:
        this.tiopoEntita = "attore";
        break;
      default:
        this.tiopoEntita = "entita";
        break;
    }
  }
  ModificaTipologia(item: string) {
    switch (TipologiaAttributo[item]) {
      //    forkey, vettore, altro
      case 0:
        this.tipologiaAttributo = "forkey";
        this.nomiEntita = this.GetListaEntita();
        break;
      case 1:
        this.tipologiaAttributo = "vettore";
        this.nomiEntita = this.GetListaEntita();
        break;
      case 2:
        this.tipologiaAttributo = "altro";
        break;
      default:
        this.tipologiaAttributo = "altro";
        break;
    }
  }
  ModificaTipo(item: string) {
    if (TipologiaAttributo[this.tipologiaAttributo] == TipologiaAttributo.altro) {
      switch (TipoAttributo[item]) {
        //  varchar, text, int32, decimal, data, timestamp, boolean
        case 0:
          this.tipoAttributo = "varchar";
          break;
        case 1:
          this.tipoAttributo = "text";
          break;
        case 2:
          this.tipoAttributo = "int32";
          break;
        case 3:
          this.tipoAttributo = "decimal";
          break;
        case 4:
          this.tipoAttributo = "data";
          break;
        case 5:
          this.tipoAttributo = "timestamp";
          break;
        case 6:
          this.tipoAttributo = "boolean";
          break;

        default:
          this.tipoAttributo = "varchar";
          break;
      }

    }
    else if (TipologiaAttributo[this.tipologiaAttributo] == TipologiaAttributo.forkey ||
      TipologiaAttributo[this.tipologiaAttributo] == TipologiaAttributo.vettore) {
      let trovato: boolean = false;
      let vett = ProgettoComponent.progetto.GetListaNomiEntita();
      vett.forEach(element => {
        if (element == item) {
          trovato = true;
        }
      });
      if (!trovato) {
        ProgettoComponent.progetto.AggiungiEntita(new Entita(item, "entita"));
      }
      this.tipoAttributo = item;
    } else {

    }
  }
  GetListaEntita():string[] {
    return ProgettoComponent.progetto.GetListaNomiEntita();
  }
}
