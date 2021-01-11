import { writeFileSync } from "fs-extra";

export class EntitaFile {
    path: string;
    nomeFile: string;
    descrizione: string;
    testo: string;
    
    constructor(path: string, nomeFile: string, descrizione: string, testo:string) {
        this.path=path;
        this.nomeFile = nomeFile;
        this.descrizione = descrizione;
        this.testo = testo;
    }
    
    Salva(){
        try {
            writeFileSync(this.path, this.testo);
            console.log('File creato !!!!! ');
            console.log('Nome : ' + this.nomeFile);
            console.log("Percorso : "+this.path);            
            
        } catch (error) {
            console.log("Errore : " + error);
        }
    }
}
