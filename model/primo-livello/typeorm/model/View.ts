import { EntitaCartella } from "../../../entity/EntitaCartella";

export class View  extends EntitaCartella {
    constructor(path:string) {
        super(path+"/view","view","descrizione");
        console.log("View : ");
        console.log("nome : "+this.nomeCartella);
        console.log("path : "+this.path);
    }
}
