import { EntitaCartella } from "../../entity/EntitaCartella";


export class Configurazione extends EntitaCartella {
constructor(path:string){
    super(path+"/configuration", "configuration", "descrizione");
    
    console.log("Configurazione : ");
    console.log("nome : "+this.nomeCartella);
    console.log("path : "+this.path);
}
}