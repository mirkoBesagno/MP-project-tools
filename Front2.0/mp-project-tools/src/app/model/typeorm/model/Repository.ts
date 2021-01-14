import { EntitaCartella } from "../../entity/EntitaCartella";
import { EntitaTypeorm } from "../../entity/EntitaTypeorm";
import { EntitaModello } from "./Model";


export class AttributoRepository {
    /* verbo: string;
    fineurl: string; */
    testo: string;
    nome: string;
    constructor(nome: string/* verbo: string, , fineurl: string */) {
        /* this.verbo = verbo;
        this.nome = nome;
        this.fineurl = fineurl;
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
        `; */
        this.testo="";
        this.nome=nome;
    }
    GetTesto():string{
        return " |--nome: "+this.nome+" |--\n";
    }
}
export class EntitaRepository extends EntitaTypeorm {
    /* nome: string;
    nomeModello: string; */
    attributi: AttributoRepository[];
    nome: string;
    testoInterface: string="";
    testoBody: string="";
    testoRisultato: string;
    constructor(path: string, nome: string, attributi: AttributoRepository[], model:EntitaModello) {
        super(nome + ".repository.ts", path);
        this.nome = nome;
        this.attributi = attributi;

        let nomeModello = nome.substr(0, 1).toUpperCase() + nome.substr(1);
        this.testoRisultato = `
        import { EntityRepository, Repository } from "typeorm";
        import { ${nomeModello}Model } from "${model.path}";

        export interface I${nomeModello}Repository{

        }

        @EntityRepository(${nomeModello}Model)
        export class ${nomeModello}Repository extends ${nomeModello}Model {

        }
        `;
        this.attributi=attributi;
    }
    AggiungiAttributo(attributo: AttributoRepository) {
        if (this.TrovaAttributo(attributo) == undefined) {
            this.attributi.push(attributo);
        }
    }
    TrovaAttributo(attributo: AttributoRepository) {
        this.attributi.forEach(element => {
            if (element.nome == attributo.nome) {
                return element;
            }
        });
        return undefined;
    }
    Salva() {
        super.SetTesto(this.testoRisultato);
        super.Salva();
    }
}
export class Repository extends EntitaCartella {
    testo: string = ``;

    listaEntitaRepository: EntitaRepository[] = [];

    constructor(path: string) {
        super(path + "/repository", "repository", "descrizione");
        console.log("Repository : ");
        console.log("nome : " + this.nomeCartella);
        console.log("path : " + this.path);
    }

    AggiungiEntitaRepository(nome: string, listaAttributi: AttributoRepository[], model:EntitaModello) {
        const tmp = this.TrovaRepository(nome)
        if (tmp) {
            for (let index = 0; index < listaAttributi.length; index++) {
                const element = listaAttributi[index];
                tmp.AggiungiAttributo(element);
            }
            return tmp;
        }
        else {
            const temp = new EntitaRepository( this.path, nome, listaAttributi, model)
            this.listaEntitaRepository.push(temp);
            return temp;
        }
    }

    TrovaRepository(nome: string): EntitaRepository | undefined {
        this.listaEntitaRepository.forEach(element => {
            if (element.nome == nome) {
                return element;
            }
        });
        return undefined;
    }
    Salva() {
        super.Salva();
        this.listaEntitaRepository.forEach(element => {
            element.Salva();
        });
    }
}
