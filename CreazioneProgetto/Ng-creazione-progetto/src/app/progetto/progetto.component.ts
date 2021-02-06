import { Component, Input, OnInit } from '@angular/core';
import { EntitaER } from '../entita-er/entita-er.entita';
import { Progetto } from "./progetto.entita";

@Component({
  selector: 'app-progetto',
  templateUrl: './progetto.component.html',
  styleUrls: ['./progetto.component.css']
})
export class ProgettoComponent extends Progetto implements OnInit {
  
  private nuovaEntita: EntitaER=new EntitaER();
  public get GetNuovaEntita(): EntitaER {
    return this.nuovaEntita;//this._nuovaEntita;
  }
  public SetNuovaEntita(value: EntitaER) {
    debugger;
    this.nuovaEntita = value;
    this.triggeraNuovaEntita = false;
  }

  constructor() { super("","",Date[Date.now()]) }

  ngOnInit(): void {

  }
  StampaElemento(){
    console.log(this);    
  }
triggeraNuovaEntita=false;
  SalvaEntita(){
    debugger;
    this.triggeraNuovaEntita=true;
    /* this.AggiungiEntita(this.nuovaEntita);
    this.nuovaEntita = new EntitaER(); */
  }

}
