import { TipologiaAttributo } from "./enum/TipologiaAttributo.1";

export class AttributoEntita {
    nomeAttributo: string = "";
    tipologia: string = "";
    tipoAttributo: string = "";
    testo: string = "";
    
    constructor() {

    }
    SettAttributo(nomeAttributo: string, tipoAttributo: string, tipologia: string) {
        this.nomeAttributo = nomeAttributo;
        this.tipoAttributo = tipoAttributo;
        this.tipologia = tipologia;
        this.testo = "";
    }
    ModificaTipoAttributo(item: string) {
        this.tipoAttributo = item;
        if (this.tipologia == TipologiaAttributo[TipologiaAttributo.vettore] || this.tipologia == TipologiaAttributo[TipologiaAttributo.forkey]) {
            this.nomeAttributo = this.tipologia + item.substring(0, 1).toUpperCase() + item.substr(1);
        }
    }
    GetTipologia() {
        return this.tipologia;
    }
    GetTipo() {
        return this.tipoAttributo;
    }
    GetTesto(): string {
        return " |--nomeAtt: " + this.nomeAttributo + "  |--tipologia: " + this.tipologia + "  |--testo " + this.testo + " |--\n";
    }
}