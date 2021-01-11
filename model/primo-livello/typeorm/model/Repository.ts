import { EntitaCartella } from "../../../entity/EntitaCartella";
import { EntitaTypeorm } from "../../../entity/EntitaTypeorm";

class EntitaRepository {
    nome: string;
    testo: string;
    constructor(verbo: string, nome: string, fineurl: string) {
        this.nome = nome;
        this.testo = `            
        @${verbo}('${fineurl}')
        private async api${nome}(req: Request, res: Response): Promise<Response> {
            try {
                LogBase(req);
                return res.status(StatusCodes.OK).send('Strumento creato.');
            } catch (error) {
                return res.status().send('Errore : ' + error);
            }
        }
            `;
    }
}

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
        import { ${nomeModello}Model } from "${model.path}";

        export interface I${nomeModello}Repository{
            
        }

        @EntityRepository(${nomeModello}Model)
        export class ${nomeModello}Repository extends Repository<${nomeModello}Model> {
            
        }
        `;
        this.listaEntita.push(new EntitaTypeorm(nome + ".repository.ts", this.path, testo));
    }
}
