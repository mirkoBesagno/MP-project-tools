import { EntitaCartella } from "../../../entity/EntitaCartella";

export class Interfaces  extends EntitaCartella {
    constructor(path:string) {
        super(path+"/interfaces","interfaces","descrizione");
    
        console.log("Interface : ");
        console.log("nome : "+this.nomeCartella);
        console.log("path : "+this.path);
    }
}