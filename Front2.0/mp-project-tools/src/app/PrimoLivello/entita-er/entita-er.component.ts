import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entita } from 'src/app/componenti/entita/entita.component';
import { AttributoModel } from 'src/app/model/typeorm/model/Model';
import { AttributoModelComponent } from '../attributo-model/attributo-model.component';
import { Utility } from '../progetto-er/progetto-er.component';
import { EntitaEr } from './EntitaEr';

@Component({
  selector: 'app-entita-er',
  templateUrl: './entita-er.component.html',
  styleUrls: ['./entita-er.component.css']
})
export class EntitaERComponent extends EntitaEr implements OnInit {

  @Input()
  set triggheraSalva(item: boolean) {
    if (item === true) {
      var tmp = new EntitaEr();
      tmp.SettaEntita(this);
      Utility.Progetto.listaEntitaER.push(tmp);
      this.nomeEntita="",
      this.listaAttributi=[];
      this.tiopoEntita="";      
    }
  }

  @Input()
  set entitaSelezionata(item: EntitaEr) {
    super.SettaEntita(item);
    this.attributoNuovo = new AttributoModel();
  }

  attributoNuovo: AttributoModel = new AttributoModel();

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  AggiungiAttributo() {
    super.AggiungiAttributo(this.attributoNuovo);
    this.attributoNuovo = new AttributoModel();
  }
}
