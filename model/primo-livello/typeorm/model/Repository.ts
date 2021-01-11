import { EntitaCartella } from "../../../entity/EntitaCartella";
import { EntitaTypeorm } from "../../../entity/EntitaTypeorm";

export class Repository extends EntitaCartella {

    testo: string = ``;

    listaEntita: EntitaTypeorm[] = [];

    constructor(path: string) {
        super(path + "/repository", "repository", "descrizione");
        console.log("Repository : ");
        console.log("nome : " + this.nomeCartella);
        console.log("path : " + this.path);
    }

    AggiungiEntita(nome: string, model: EntitaTypeorm) {

        let nomeModello = nome.substr(0, 1).toUpperCase() + nome.substr(1);
        const testo: string = `
        import { EntityRepository, Repository } from "typeorm";
        import { ${nomeModello}Model } from "../model/admin.model";

        export interface I${nomeModello}Repository{
            
        }

        @EntityRepository(${nomeModello}Model)
        export class ${nomeModello}Repository extends Repository<${nomeModello}Model> {
            
        }
        `;
        this.listaEntita.push(new EntitaTypeorm(nome + ".repository.ts", this.path, testo));
    }
}
