import { Interface } from "readline";
import { EntitaCartella } from "../../entity/EntitaCartella";
import { EntitaTypeorm } from "../../entity/EntitaTypeorm";
import { Controller } from "./model/Controller";
import { Error } from "./model/Error";
import { Interfaces } from "./model/Interfaces";
import { Model } from "./model/Model";
import { Repository } from "./model/Repository";
import { View } from "./model/View";

export class TypeORM extends EntitaCartella {

    controller: Controller;
    interfaces: Interfaces;
    error: Error
    model: Model;
    repository: Repository;
    view: View;

    constructor(path: string) {
        super(path + "/typeorm", "typeorm", "descrizione");

        console.log("Typeorm : ");
        console.log("nome : " + this.nomeCartella);
        console.log("path : " + this.path);

        this.controller = new Controller(this.path);
        this.interfaces = new Interfaces(this.path);
        this.error = new Error(this.path);
        this.model = new Model(this.path);
        this.repository = new Repository(this.path);
        this.view = new View(this.path);
    }

    Salva() {
        super.Salva();
        this.controller.Salva();
        this.interfaces.Salva();
        this.error.Salva();
        this.model.Salva();
        this.repository.Salva();
        this.view.Salva();
    }
    AggiungiEntitaBase(nome:string) {
        // adminRepository adminModel adminController
        const modelTmp :EntitaTypeorm= this.model.AggiungiEntita(nome);
        this.repository.AggiungiEntita(nome, modelTmp);
        this.controller.AggiungiEntita(nome, modelTmp);
    }
}


