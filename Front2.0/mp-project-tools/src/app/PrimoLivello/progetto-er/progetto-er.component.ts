import { Component, OnInit } from '@angular/core';
import { ProgettoModel } from 'src/app/model/progetto.model';
import { EntitaEr } from "../entita-er/EntitaEr";

@Component({
  selector: 'app-progetto-er',
  templateUrl: './progetto-er.component.html',
  styleUrls: ['./progetto-er.component.css']
})
export class ProgettoERComponent implements OnInit {

  esisteProgetto:boolean=false;

  listaEntitaER: EntitaEr[] = []
  entitaSelezionata: EntitaEr = new EntitaEr();
  
  nuovaEntita: EntitaEr= new EntitaEr();
  
  pathProgetto: string="";
  nomeProgetto: string="";

  constructor() { }

  ngOnInit(): void {
  }
  generaEr(){}
  CreaProgetto(){
    this.esisteProgetto=true;
    Utility.Progetto = new ProgettoModel(this.pathProgetto, this.nomeProgetto, new Date(Date.now()));
    this.listaEntitaER = Utility.Progetto.listaEntitaER;
  }
  SalvaEntita()
  {
    this.listaEntitaER.push(this.nuovaEntita);
    this.nuovaEntita = new EntitaEr();
  }
}


export class Utility{
  
  static Progetto : ProgettoModel;

}