import { mkdirpSync } from "fs-extra";

export class EntitaCartella {
    path: string;
    nomeCartella: string;
    descrizione: string;
    constructor(path: string, nomeCartella: string, descrizione: string) {
        this.path=path;
        this.nomeCartella = nomeCartella;
        this.descrizione = descrizione;
    }
    
    Salva(){
        try {
            mkdirpSync(this.path);
            console.log('Cartella salvata !!!!! ');
            console.log('Nome : ' + this.nomeCartella);
            console.log("Percorso : "+this.path);            
            
        } catch (error) {
            console.log("Errore : " + error);
        }
    }
}
