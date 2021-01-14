import { EntitaCartella } from "./entity/EntitaCartella";


export class Errore extends EntitaCartella {
    constructor(path:string) {
        super(path+"/error","error","descrizione");
        console.log("Error : ");
        console.log("nome : "+this.nomeCartella);
        console.log("path : "+this.path);
    }
}
