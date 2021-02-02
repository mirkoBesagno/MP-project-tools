import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EntitaER } from '../entita-er/entita-er.entita';
import { AttributoEntita } from './attributo-entita.entita';

@Component({
  selector: 'app-attributo-entita',
  templateUrl: './attributo-entita.component.html',
  styleUrls: ['./attributo-entita.component.css']
})
export class AttributoEntitaComponent extends AttributoEntita implements OnInit {

  @Output() newAttributoEntita = new EventEmitter<AttributoEntita>()//();//;
  @Input() GetAttributoEntita(item:boolean) {
    if (item) {
      var tmp = new AttributoEntita();
      tmp.nomeAttributo = this.nomeAttributo;
      tmp.testo = this.testo;
      tmp.tipoAttributo = this.tipoAttributo;
      tmp.tipologia =this.tipologia;
      this.newAttributoEntita.emit(tmp);
    }
  }
  constructor() { super() }

  ngOnInit(): void {
  }

}
