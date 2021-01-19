import { AttributoModel } from 'src/app/model/typeorm/model/Model';
import { AttributoModelComponent } from '../attributo-model/attributo-model.component';


export class EntitaEr {

  tiopoEntita: string="";
  nomeEntita: string="";

  listaAttributi: AttributoModel[] = [];

  constructor() {
  }
  SettaEntita(item: EntitaEr) {
    this.tiopoEntita = item.tiopoEntita;
    this.nomeEntita = item.nomeEntita;
    this.listaAttributi = item.listaAttributi;
  }
  AggiungiAttributo(item: AttributoModel){
this.listaAttributi.push(item);
  }
}
