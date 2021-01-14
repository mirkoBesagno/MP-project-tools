import { Configurazione } from "./Configurazione";
import { EnvVar } from "./EnvVar";
import { Express } from "./express/Express";
import { Package } from "./Package";
import { Tools } from "./Tools";
import { Tsconfig } from "./Tsconfig";
import { TypeORM } from "./typeorm/TypeORM";


export class ProgettoModel {
  typeorm: TypeORM;
  express: Express;
  configurazione: Configurazione;
  tools: Tools;

  env: EnvVar;
  package: Package;
  tsconfig: Tsconfig;

  path: string;
  nome: string;
  dataCreazione: Date | undefined;

  constructor(path: string, nome: string, dataCreazione?: Date) {
    this.nome = nome;
    this.path = path + "/" + this.nome;
    console.log("Progetto : ");
    console.log("nome : " + this.nome);
    console.log("path : " + this.path);

    // cartelle
    this.express = new Express(this.path);
    this.typeorm = new TypeORM(this.path);
    this.configurazione = new Configurazione(this.path);
    this.tools = new Tools(this.path);
    // file
    this.env = new EnvVar(this.path);
    this.package = new Package(this.path, this.nome);
    this.tsconfig = new Tsconfig(this.path);
  }

  Salva() {
    //cartelle
    this.configurazione.Salva();
    this.express.Salva();
    this.tools.Salva();
    this.typeorm.Salva();

    //file
    this.env.Salva();
    this.package.Salva();
    this.tsconfig.Salva();
  }
}







