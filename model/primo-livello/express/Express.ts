import { Interface } from "readline";
import { EntitaCartella } from "../../entity/EntitaCartella";
import { Api } from "./model/Api";
import { Error } from "./model/Error";
import { Interfaces } from "./model/Interfaces";
import { Middleware } from "./model/Middleware";


export class Express extends EntitaCartella {
    api: Api;
    error: Error;
    interface: Interfaces;
    middleware: Middleware;

    constructor(path: string) {
        super(path + "/express", "express", "descrizione");

        console.log("Express : ");
        console.log("nome : " + this.nomeCartella);
        console.log("path : " + this.path);

        this.api = new Api(this.path);
        this.error = new Error(this.path);
        this.interface = new Interfaces(this.path);
        this.middleware = new Middleware(this.path);
    }

    Salva() {
        super.Salva();
        this.api.Salva();
        this.error.Salva();
        this.interface.Salva();
        this.middleware.Salva();
    }
    AggiungiEntitaAPI(){
        
    }
}