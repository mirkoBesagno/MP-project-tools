import { Attributo } from "../../../entity/Attributo";
import { EntitaCartella } from "../../../entity/EntitaCartella";
import { EntitaTypeorm } from "../../../entity/EntitaTypeorm";

class EntitaModello extends EntitaTypeorm {
    attributi: Attributo[];
    nome: string;
    nomeModello: string;
    constructor(nome: string, path: string) {
        const nomeModello: string = nome.substr(0, 1).toUpperCase() + nome.substr(1);
        var testoTmp: string = `
        import { Entity } from "typeorm";

        export interface I${nomeModello}Model{
            
        };
        /**
         * 
         */
        @Entity()
        export class ${nomeModello}Model {

        }
        `;
        super(nome + ".model.ts", path, testoTmp);

        this.attributi = [];
        this.nome = nome;
        this.nomeModello = nomeModello;
    }
}

export class Model extends EntitaCartella {

    nome: string = "";
    listaEntitaModello: EntitaModello[] =[];
    listaEntita: EntitaTypeorm[] = [];

    constructor(path: string) {
        super(path + "/model", "model", "descrizione");
        console.log("Model : ");
        console.log("nome : " + this.nomeCartella);
        console.log("path : " + this.path);
    }

    AggiungiEntitaModello(nome: string) {
        this.listaEntitaModello.push(new EntitaModello(nome,this.path));
    }
}
