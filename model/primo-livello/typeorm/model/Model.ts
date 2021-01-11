import { EntitaCartella } from "../../../entity/EntitaCartella";
import { EntitaTypeorm } from "../../../entity/EntitaTypeorm";

export class Model extends EntitaCartella {

    nome: string = "";

    listaEntita: EntitaTypeorm[] = [];

    constructor(path: string) {
        super(path + "/model", "model", "descrizione");
        console.log("Model : ");
        console.log("nome : " + this.nomeCartella);
        console.log("path : " + this.path);
    }

    AggiungiEntita(nome: string) {
        let nomeModello = nome.substr(0, 1).toUpperCase() + nome.substr(1);
        const testo: string = `
            import { Entity } from "typeorm";

            export interface I${nomeModello}Model{
                
            };
            /**
             * 
             */
            @Entity()
            /* @Unique(["username", "email"])
            @Unique(["username"]) */
            export class ${nomeModello}Model {

            }
            `;
        const result = new EntitaTypeorm(nome + ".model.ts", this.path, testo)
        this.listaEntita.push(result);
        return result;
    }
}
