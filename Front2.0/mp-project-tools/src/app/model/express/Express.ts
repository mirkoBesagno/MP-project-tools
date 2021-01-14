import { EntitaCartella } from "../entity/EntitaCartella";
import { Interfaces } from "../Interfaces";
import { Api, Attore } from "./model/Api";
import { Middleware } from "./model/Middleware";
import { Errore } from "../Errore";




export class Express extends EntitaCartella {
  api: Api;
  error: Errore;
  interface: Interfaces;
  middleware: Middleware;

  constructor(path: string) {
    super(path + "/express", "express", "descrizione");

    console.log("Express : ");
    console.log("nome : " + this.nomeCartella);
    console.log("path : " + this.path);

    this.api = new Api(this.path);
    this.error = new Errore(this.path);
    this.interface = new Interfaces(this.path);
    this.middleware = new Middleware(this.path);
  }

  AggiungiAttore(nome: string) {
    if (this.api.CercaAttore(nome) == undefined) {
      this.api.listaEntita.push(new Attore(nome));
    }
    else {
      //this.api.CercaAttore(nome).
    }
  }


  Salva() {
    super.Salva();
    this.api.Salva();
    this.error.Salva();
    this.interface.Salva();
    this.middleware.Salva();
  }
  AggiungiEntitaAPI(item: Api) {
  }
}
