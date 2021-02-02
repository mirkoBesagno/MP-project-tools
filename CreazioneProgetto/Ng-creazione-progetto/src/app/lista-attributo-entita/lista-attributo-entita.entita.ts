import { AttributoEntita } from "../attributo-entita/attributo-entita.entita";

export class ListaAttributoEntita {

    listaAttributoEntita: AttributoEntita[]=[];

    constructor() {
        
    }
    AggiungiAttributo(item : AttributoEntita){
        this.listaAttributoEntita.push(item);
    }
}