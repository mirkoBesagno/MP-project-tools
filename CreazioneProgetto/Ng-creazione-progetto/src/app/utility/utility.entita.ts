import { Progetto } from "../progetto/progetto.entita";

export class Utility {

    static Progetto: Progetto;
    static ElenecoTipoAttributoPerAltro(){
        return [
            "number","string","boolean"
        ];
    }
}