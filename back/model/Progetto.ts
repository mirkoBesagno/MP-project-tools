import { Configurazione } from "./primo-livello/configurazione/Configurazione";
import { Env } from "./primo-livello/Env";
import { Tools } from "./primo-livello/tools/tools";
import { Express } from "./primo-livello/express/Express";
import { Package } from "./primo-livello/Package";
import { Tsconfig } from "./primo-livello/Tsconfig";
import { TypeORM } from "./primo-livello/typeorm/TypeORM";

export class Progetto {
    typeorm: TypeORM;
    express: Express;
    configurazione: Configurazione;
    tools: Tools;

    env: Env;
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
        this.env = new Env(this.path);
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

