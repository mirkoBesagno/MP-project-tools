import { EntitaFile } from "./EntitaFile";

export class EntitaTypeorm extends EntitaFile {
    constructor(nome: string, path:string, testo?:string ) {
        if (!testo) {
            testo="testo";
        }
        super(path+"/"+nome,nome,"descrizione", testo );
    }
}