import { AttributoModel } from 'src/app/model/typeorm/model/Model';
import { AttributoModelComponent } from '../attributo-model/attributo-model.component';


export class EntitaEr {

  tiopoEntita: string = "";
  nomeEntita: string = "";

  listaAttributi: AttributoModel[] = [];

  constructor() {
  }
  SettaEntita(item: EntitaEr) {
    this.tiopoEntita = item.tiopoEntita;
    this.nomeEntita = item.nomeEntita;
    this.listaAttributi = item.listaAttributi;
  }
  AggiungiAttributo(item: AttributoModel) {
    this.listaAttributi.push(item);
  }
  nomeAttributo: string = "";
  tipologia: string = "";
  tipoAttributo: string = "";
  testo: string = "";
  GetPerDiagrammaER() {
    let ritorno: string = "";
    for (let index = 0; index < this.listaAttributi.length; index++) {
      const element = this.listaAttributi[index];
      switch (element.tipologia) {
        case "forkey":
        case "fk":
          ritorno = ritorno + "<br>  " + element.tipoAttributo + " --|> " + this.nomeEntita+ " "; /* <br> */
          break;
        case "vettore":
        case "vett":
          ritorno = ritorno + "<br>  " + this.nomeEntita + " --|> " + element.tipoAttributo + " "; /* <br> */
          break;
        case "altro":
          break;

        default:
          break;
      }

    }
    return ritorno;
  }
}
