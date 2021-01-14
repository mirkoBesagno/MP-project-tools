import { EntitaCartella } from "./entity/EntitaCartella";




export class Tools extends EntitaCartella {
  constructor(path: string) {
    super(path + "/tools", "tools", "descrizione");

    console.log("Tools : ");
    console.log("nome : " + this.nomeCartella);
    console.log("path : " + this.path);
  }
}
