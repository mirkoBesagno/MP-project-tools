
import { AttributoController, Controller } from "./model/Controller";
import { Interfaces } from "../Interfaces";
import { AttributoModel, EntitaModello, Model } from "./model/Model";
import { AttributoRepository, Repository } from "./model/Repository";
import { Vista } from "./model/Vista";
import { Errore } from "../Errore";
import { EntitaCartella } from "../entity/EntitaCartella";

export class TypeORM extends EntitaCartella {

  controller: Controller;
  interfaces: Interfaces;
  error: Errore;
  model: Model;
  repository: Repository;
  view: Vista;

  constructor(path: string) {
    super(path + "/typeorm", "typeorm", "descrizione");

    console.log("Typeorm : ");
    console.log("nome : " + this.nomeCartella);
    console.log("path : " + this.path);

    this.controller = new Controller(this.path);
    this.interfaces = new Interfaces(this.path);
    this.error = new Errore(this.path);
    this.model = new Model(this.path);
    this.repository = new Repository(this.path);
    this.view = new Vista(this.path);
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
  AggiungiEntitaBase(nome: string) {
    // adminRepository adminModel adminController
    /* const modelTmp: EntitaTypeorm = this.model.AggiungiEntita(nome);
    this.repository.AggiungiEntita(nome, modelTmp);
    this.controller.AggiungiEntita(nome, modelTmp); */
  }
  AggiungiEntita_model_repository_controller(nome: string, listaAttributi: AttributoModel[]) {
    const modelTmp: EntitaModello = this.model.AggiungiEntitaModello(nome, listaAttributi);

    let tmpR: AttributoRepository[] = [];
    listaAttributi.forEach(element => {
      tmpR.push(new AttributoRepository(element.nomeAttributo));
    });
    this.repository.AggiungiEntitaRepository(nome, tmpR, modelTmp);

    let tmpC: AttributoController[] = [];
    listaAttributi.forEach(element => {
      tmpC.push(new AttributoController(element.nomeAttributo));
    });
    this.controller.AggiungiEntitaController(nome, tmpC, modelTmp);
  }
}
