import { EntitaCartella } from "../../../entity/EntitaCartella";
import { EntitaTypeorm } from "../../../entity/EntitaTypeorm";
import { Model } from "./Model";

export class Controller extends EntitaCartella {

    listaEntita: EntitaTypeorm[] = [];

    constructor(path: string) {
        super(path + "/controller", "controller", "descrizione");


        console.log("Controller : ");
        console.log("nome : " + this.nomeCartella);
        console.log("path : " + this.path);
    }

    AggiungiEntita(nome: string, model: EntitaTypeorm) {

        let nomeModello = nome.substr(0, 1).toUpperCase() + nome.substr(1);

        const testo: string = `
            import { ${nomeModello}Model } from "${model.path}";

            export interface I${nomeModello}Controller{

            }

            export class ${nomeModello}Controller extends ${nomeModello}Model {

            }
        `;
        this.listaEntita.push(new EntitaTypeorm(nome + ".controller.ts", this.path, testo));
    }
}
