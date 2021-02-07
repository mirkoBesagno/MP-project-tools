import { AttributoEntita } from "../attributo-entita/attributo-entita.entita";
import { TipologiaAttributo } from "../attributo-entita/enum/TipologiaAttributo.1";
import { ListaAttributoEntita } from "../lista-attributo-entita/lista-attributo-entita.entita";
import { Utility } from "../utility/utility.entita";
import { TipologiaEntita } from "./enum/TipologiaEntita";

export interface IEntitaER {

    id: string;

    nomeEntita: string;
    tipologiaEntitaER: TipologiaEntita;
}

export class EntitaER implements IEntitaER {

    id = "";
    testoEr = "";
    listaAttributi: ListaAttributoEntita = new ListaAttributoEntita();
    tipologiaEntitaER: TipologiaEntita;

    nomeEntita: string = "";

    constructor() {

    }


    AggiungiAttributo(item: AttributoEntita) {
        this.listaAttributi.AggiungiAttributo(item);
    }
    private _tipologiaEntitaErString;
    public get tipologiaEntitaErString() {
        
        if (this._tipologiaEntitaErString!= undefined || this._tipologiaEntitaErString !='') {
            return this._tipologiaEntitaErString;
            } else {
                return TipologiaEntita[TipologiaEntita.attore];
            }
        return TipologiaEntita[this.tipologiaEntitaER]
    }
    public set tipologiaEntitaErString(value) {
        this.ModificaTipologiaEntita(value);
    }
    ModificaTipologiaEntita(item: string) {
        //debugger;
        this.tipologiaEntitaER;
        if (item == TipologiaEntita[TipologiaEntita.attore]) {
            this.tipologiaEntitaER = TipologiaEntita.attore;
            this._tipologiaEntitaErString = TipologiaEntita[TipologiaEntita.attore]
        }
        else if (item == TipologiaEntita[TipologiaEntita.entita]) {
            this.tipologiaEntitaER = TipologiaEntita.entita;
            this._tipologiaEntitaErString = TipologiaEntita[TipologiaEntita.entita]
        }
        else {
            this._tipologiaEntitaErString = TipologiaEntita[TipologiaEntita.entita]
        }
    }

    GetPerDiagrammaER() {
      debugger;
        let ritorno: string = "";
        for (let index = 0; index < this.listaAttributi.listaAttributoEntita.length; index++) {
            const element = this.listaAttributi.listaAttributoEntita[index];
            switch (TipologiaAttributo[element.tipologia]) {
                case "forkey":
                case "fk":
                    ritorno = ritorno + "<br>  " + element.tipoAttributo + " --|> " + this.nomeEntita + " "; /* <br> */
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

    /* 
      AggiornaEntita() {
        this.nomiEntita = [];
        try {
    
          for (let index = 0; index < Utility.Progetto.listaEntitaER.length; index++) {
            const element = Utility.Progetto.listaEntitaER[index];
            this.nomiEntita.push(element.nomeEntita);
          }
        } catch (error) {
          console.log("Errore : " + error);
    
        }
      }
    
      AggiungiAttributo() {
        this.entitaSelezionata.AggiungiAttributo(this.attributoNuovo);
        this.attributoNuovo = new AttributoEntita();
        document.getElementById('tipologiaEntita').focus();
        this.CreaDiagrammaER();
      }
    
      ModificaTipologiaAttributoNuovo(item: string) {
        this.attributoNuovo.tipologia = item;
        if (item == TipologiaAttributo[TipologiaAttributo.vettore] || item == TipologiaAttributo[TipologiaAttributo.forkey]) {
          this.possibilitaTipoAttributo = Utility.Progetto.GetListaNomiEntitaER();
        }
      }
    
      CreaDiagrammaER() {
        if (this.entitaSelezionata.GetPerDiagrammaER() != '' || this.entitaSelezionata.GetPerDiagrammaER() != undefined) {
          const tmp = "classDiagram " + this.entitaSelezionata.GetPerDiagrammaER();
          this.testoEr = tmp.toString(); 
        }
      }
      
      possibilitaTipoAttributo: string[] = [];
      ModificaTipoAttributoNuovo(item: string) {
        this.attributoNuovo.tipoAttributo = item;
        if (this.attributoNuovo.tipologia == TipologiaAttributo[TipologiaAttributo.vettore] ||
          this.attributoNuovo.tipologia == TipologiaAttributo[TipologiaAttributo.forkey]) {
          this.attributoNuovo.nomeAttributo = this.attributoNuovo.tipologia + item.substring(0, 1).toUpperCase() + item.substr(1);
        }
      } */
}