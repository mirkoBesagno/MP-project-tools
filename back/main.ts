const chiedi = require('prompt-sync')();
import { EntitaExpress } from "./model/entity/EntitaExpress";
import { EntitaTypeorm } from "./model/entity/EntitaTypeorm";
import { Express } from "./model/primo-livello/express/Express";
import { Api, Attore } from "./model/primo-livello/express/model/Api";
import { AttributoModel } from "./model/primo-livello/typeorm/model/Model";
import { Progetto } from "./model/Progetto";


export function Main() {
    try {
        console.log(`
        0) exit
        1) inizializza progetto
        2) carica progetto (prossimamente)
        `);
        const scelta = chiedi("Scegli :");
        if (scelta != '0') {
            switch (scelta) {
                case '1':
                    const nomeProgetto: string = chiedi("Inserisci il nome del progetto : ");
                    const pathProgetto: string = chiedi("Inserisci il path dove crearlo : ");
                    const data: Date = new Date(Date.now());
                    const progettoTmp = new Progetto(pathProgetto, nomeProgetto, data);
                    MenuProgetto(progettoTmp);
                    Main();
                    break;
                default:
                    Main();
                    break;
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}

export function MenuProgetto(progetto: Progetto) {
    try {
        console.log(`
        0) exit
        1) Aggiungi entita
        2) Salva
        `);
        const scelta = chiedi("Scegli :");
        if (scelta != '0') {
            switch (scelta) {
                case '1':
                    if (progetto != undefined) {
                        AggiungiEntita(progetto);
                    }
                    MenuProgetto(progetto);
                    break;
                case '2':
                    if (progetto != undefined) {
                        progetto.Salva();
                        console.log("Si consiglia di eseguire questi comandi : npm init, npm install");
                    }
                    MenuProgetto(progetto);
                    break;
                default:
                    MenuProgetto(progetto);
                    break;
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}

export function AggiungiEntita(progetto: Progetto) {
    try {
        console.log(` Che tipo di entita :
        0) exit
        1) typeorm
        2) express
        `);
        const scelta = chiedi("Scegli :");
        if (scelta != '0') {
            switch (scelta) {
                case '1':
                    /*  const nomeTypeorm: string = chiedi("Inserischi nome entita :");
                     const attributi: Attributo[] = [];
                     AggiungiEntitaTypeORM(progetto, nomeTypeorm, attributi); */
                    MenuTypeORM(progetto);
                    AggiungiEntita(progetto);
                    break;
                case '2':
                    const nomeExpress: string = chiedi("Inserischi nome entita :");

                    AggiungiEntita(progetto);
                default:
                    AggiungiEntita(progetto);
                    break;
            }
        }
        else {

        }
    }
    catch (error) {
        console.log(error);
    }
}
export function MenuTypeORM(progetto: Progetto) {
    try {
        console.log(`Inserisci entita ER :
        0) exit
        1) si (predefinita)
        `);
        const nome = chiedi("nome : ");
        let resto: Boolean = true;
        console.log("per terminare digitare exit");
        let listaAttributi: AttributoModel[] = [];
        let listaApi: Attore[] = [];
        while (resto) {
            resto = true;
            const nomeAttributo: string = chiedi("nomeAttributo : ");
            if (nomeAttributo == "exit") {
                resto = false;
            }
            const tipologia: string = chiedi("tipologia (fk=f;vett=v;altro=a): ");
            if (tipologia == "exit") {
                resto = false;
            }

            let tipoAttributo: string = "";
            if (tipologia == 'a') {
                tipoAttributo = chiedi("tipoAttributo (varchar=v;int=i;date=d): ");
            }
            if (tipoAttributo == "exit") {
                resto = false;
            }

            //----
            const tipoEntita: string = chiedi("tipoEntita (entita=e; attore:a) : ");
            if (tipoEntita == 'a') {
                listaApi.push(new Attore(nomeAttributo));
            }
            if (tipoEntita == 'exit') {
                resto = false;
            }

            const attributo: AttributoModel = new AttributoModel(nomeAttributo, tipoAttributo, tipologia);
            if (resto == true) {
                listaAttributi.push(attributo);
            }
        }
        progetto.typeorm.AggiungiEntita_model_repository_controller(nome, listaAttributi);
        //progetto.express.api.AggiungiAttore();
    }
    catch (error) {
        console.log(error);
    }

}

export function AggiungiEntitaTypeORM(progetto: Progetto, nome: string, attributo: AttributoModel) {
    /* const modelTmp :EntitaTypeorm = */ //progetto.typeorm.model.AggiungiEntitaModello(nome);
    /* progetto.typeorm.repository.AggiungiEntita(nome, modelTmp);
    progetto.typeorm.controller.AggiungiEntita(nome, modelTmp); */
}

export function AggiungiEntitaTypeExpress(progetto: Progetto, nome: string) {
    /* const modelTmp: EntitaTypeorm = progetto.typeorm.model.AggiungiEntitaModello(nome);
    progetto.typeorm.repository.AggiungiEntita(nome, modelTmp);
    progetto.typeorm.controller.AggiungiEntita(nome, modelTmp); */
}