import { EntitaCartella } from "../../entity/EntitaCartella";

export class Middleware  extends EntitaCartella {
    constructor(path:string) {
        super(path+"/middleware","middleware","descrizione");

        console.log("Middleware : ");
        console.log("nome : "+this.nomeCartella);
        console.log("path : "+this.path);
    }
}
