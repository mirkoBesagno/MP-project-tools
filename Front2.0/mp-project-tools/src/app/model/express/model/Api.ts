import { EntitaCartella } from "../../entity/EntitaCartella";
import { EntitaExpress } from "../../entity/EntitaExpress";
import { EntitaApi } from "../../entity/EntitaApi";

class Relazione extends EntitaExpress {
    listaEntita: EntitaApi[] = [];
    nome: string;
    nomeAttore: string;
    constructor(nome: string, nomeAttore: string) {
        super("nome", "path", "testo");
        this.nome = nome;
        this.nomeAttore = nomeAttore;
    }
    Salva() {
        super.Salva(); //creo la cartella dell'api es admin

        let tmp = "";
        this.listaEntita.forEach(element => {
            tmp = tmp + "\n" + element.testo + "\n";
        });
        this.testo = `
        @Controller('api/${this.nomeAttore}/${this.nome}')
        export class MedicoToAffittoController extends Medico {
        ${tmp}
        }`;
    }
}
export class Attore extends EntitaCartella {
    nome: string;
    listaRelazioni: Relazione[] = [];
    constructor(nome: string) {
        super("path", "nomeCartella", "descrizione");
        this.nome = nome;
    }
    Salva() {
        super.Salva(); //creo la cartella dell'api es admin
        this.listaRelazioni.forEach(element => {
            element.Salva();
        });
    }
    CercaRelazione(nome: string): Relazione | undefined {
        this.listaRelazioni.forEach(element => {
            if (element.nome == nome) {
                return element;
            }
        });
        return undefined;
    }
}

export class Api extends EntitaCartella {

    listaEntita: Attore[] = [];

    CercaAttore(nome: string): Attore | undefined {
        this.listaEntita.forEach(element => {
            if (element.nome == nome) {
                return element;
            }
        });
        return undefined;
    }

    constructor(path: string) {
        super(path + "/api", "api", "descrizione");

        console.log("Api : ");
        console.log("nome : " + this.nomeCartella);
        console.log("path : " + this.path);
    }

    Salva() {
        super.Salva(); //creo la cartella API
        this.listaEntita.forEach(element => {
            element.Salva();//creo i file al loro interno tipo admin-to-admin... e creo la cartella dell'api es admin
        });
    }

    AggiungiAttore(nome: string) {
        if (this.CercaAttore(nome) == undefined) {
            this.listaEntita.push(new Attore(nome));
        }
        else {
            console.log("Gia presente.");

        }
    }

    AggungiRelazione(nome: string, verbo: string, fineurl: string, nomeAttore: string) {
        const attore = this.CercaAttore(nomeAttore);
        if (attore != undefined) {
            //const tmp: EntitaApi = new EntitaApi(verbo, nome, fineurl);
            const tmp: Relazione = new Relazione(nome, nomeAttore);
            if (attore.CercaRelazione(tmp.nome) == undefined) {
                attore.listaRelazioni.push(tmp);
            }
            else {
                console.log("Gia presente.");
            }
        }
    }

    AggiungiAPI(nomeApi: string, verbo: string, fineurl: string, nomeAttore: string, nomeRelazione: string) {
        const attore = this.CercaAttore(nomeAttore);
        if (attore != undefined) {
            const relazione = attore.CercaRelazione(nomeRelazione)
            if (relazione != undefined) {
                relazione.listaEntita.push(new EntitaApi(verbo, nomeApi, fineurl));
            }
            else {
                console.log("Gia presente.");
            }
        }
    }
}
