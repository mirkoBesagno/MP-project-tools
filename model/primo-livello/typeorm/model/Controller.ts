import { stringify } from "querystring";
import { EntitaCartella } from "../../../entity/EntitaCartella";
import { EntitaTypeorm } from "../../../entity/EntitaTypeorm";
import { EntitaModello, Model } from "./Model";

export class AttributoController {
    testo: string;
    nome: string;
    constructor(nome: string) {
        this.testo="";
        this.nome=nome;
    }
    GetTesto():string{
        return "  |--nome: "+this.nome+" |--\n";
    }
}
export class EntitaController extends EntitaTypeorm {    
    /* nome: string;
    nomeModello: string; */
    attributi: AttributoController[];
    nome: string;
    testoInterface: string="";
    testoBody: string="";
    testoRisultato: string;
    constructor(path: string, nome: string, attributi: AttributoController[], model:EntitaModello) {
        super(nome + ".controller.ts", path);
        this.nome = nome;
        this.attributi = attributi;

        let nomeModello = nome.substr(0, 1).toUpperCase() + nome.substr(1);
        this.testoRisultato = `
        import { ${nomeModello}Model } from "${model.path}";

        export interface I${nomeModello}Controller{
            ${this.testoInterface}
        }
        
        export class ${nomeModello}Controller extends ${nomeModello}Model {
            ${this.testoBody}
        }
        `;
        this.attributi=attributi;
    }
    Salva(){
        this.attributi.forEach(element => {
            this.testoBody = this.testoBody + element.GetTesto();            
        });
        super.SetTesto(this.testoRisultato);
        super.Salva();
    }
    AggiungiAttributo(attributo: AttributoController) {
        if (this.TrovaAttributo(attributo) == undefined) {
            this.attributi.push(attributo);
        }
    }
    TrovaAttributo(attributo: AttributoController) {
        this.attributi.forEach(element => {
            if (element.nome == attributo.nome) {
                return element;
            }
        });
        return undefined;
    }
}
export class Controller extends EntitaCartella {

    testo: string = ``;

    listaEntitaController: EntitaController[] = [];

    constructor(path: string) {
        super(path + "/controller", "controller", "descrizione");


        console.log("Controller : ");
        console.log("nome : " + this.nomeCartella);
        console.log("path : " + this.path);
    }

    Salva(){
        super.Salva();
        this.listaEntitaController.forEach(element => {
            element.Salva();
        });
    }
    
    AggiungiEntitaController(nome: string, listaAttributi: AttributoController[], model:EntitaModello) {
        const tmp = this.TrovaController(nome)
        if (tmp) {
            for (let index = 0; index < listaAttributi.length; index++) {
                const element = listaAttributi[index];
                tmp.AggiungiAttributo(element);
            }
            return tmp;
        }
        else {
            const temp = new EntitaController(this.path, nome, listaAttributi, model)
            this.listaEntitaController.push(temp);
            return temp;
        }
    } 

    TrovaController(nome: string): EntitaController | undefined {
        this.listaEntitaController.forEach(element => {
            if (element.nome == nome) {
                return element;
            }
        });
        return undefined;
    }
}
