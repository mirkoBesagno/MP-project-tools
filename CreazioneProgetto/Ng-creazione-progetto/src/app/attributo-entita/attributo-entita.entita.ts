import { TipologiaAttributo } from "./enum/TipologiaAttributo.1";

export class AttributoEntita {
    nomeAttributo: string = "";
    tipologia: TipologiaAttributo = TipologiaAttributo.altro;
    get Tipologia():TipologiaAttributo {
        return this.tipologia;
    }
    private _tipologiaAttributoToString = "altro";
    public get tipologiaAttributoToString() {
        if (this._tipologiaAttributoToString!= undefined || this._tipologiaAttributoToString !='') {
        return TipologiaAttributo[this.tipologia];
            //return this._tipologiaAttributoToString;
        } else {
            return TipologiaAttributo[TipologiaAttributo.altro];
        }
    }
    public set tipologiaAttributoToString(value) {
        this.SettaTipologiaConString(value);
    }
    SettaTipologiaConString(item: string) {
        try {
            this.tipologia = TipologiaAttributo[item];
            this._tipologiaAttributoToString = item;
            this.nomeAttributo = TipologiaAttributo[this.tipologia] + this.tipoAttributo.substring(0, 1).toUpperCase() + this.tipoAttributo.substr(1);
        } catch (error) {
            console.log("Non convertibile." + error);
        }
    }
    tipoAttributo: string = "";
    testo: string = "";

    constructor() {

    }
    SettAttributo(nomeAttributo: string, tipoAttributo: string, tipologia: string) {
        this.nomeAttributo = nomeAttributo;
        this.tipoAttributo = tipoAttributo;
        this.tipologia = TipologiaAttributo[tipologia];
        this.testo = "";
    }
    ModificaTipoAttributo(item: string) {
        this.tipoAttributo = item;
        if (this.tipologia == TipologiaAttributo.vettore || this.tipologia == TipologiaAttributo.forkey) {
            this.nomeAttributo = TipologiaAttributo[this.tipologia] + item.substring(0, 1).toUpperCase() + item.substr(1);
        }
    }
    GetTesto(): string {
        return " |--nomeAtt: " + this.nomeAttributo + "  |--tipologia: " + TipologiaAttributo[this.tipologia] + "  |--testo " + this.testo + " |--\n";
    }
}