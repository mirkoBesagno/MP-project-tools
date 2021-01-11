const chiedi = require('prompt-sync')();
import { Attributi } from "./model/entity/Attributo";
import { EntitaTypeorm } from "./model/entity/EntitaTypeorm";
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
                    const nomeTypeorm:string=chiedi("Inserischi nome entita :");
                    const attributi:Attributi = [];
                    AggiungiEntitaTypeORM(progetto,nomeTypeorm, attributi);
                    AggiungiEntita(progetto);
                    break;
                case '2':                    
                    const nomeExpress:string=chiedi("Inserischi nome entita :");
                    
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

export function AggiungiEntitaTypeORM(progetto: Progetto, nome: string, attributi:Attributi) {
    /* const modelTmp :EntitaTypeorm = */ progetto.typeorm.model.AggiungiEntitaModello(nome);
    /* progetto.typeorm.repository.AggiungiEntita(nome, modelTmp);
    progetto.typeorm.controller.AggiungiEntita(nome, modelTmp); */
}

export function AggiungiEntitaTypeExpress(progetto: Progetto, nome: string) {
    const modelTmp :EntitaTypeorm = progetto.typeorm.model.AggiungiEntita(nome);
    progetto.typeorm.repository.AggiungiEntita(nome, modelTmp);
    progetto.typeorm.controller.AggiungiEntita(nome, modelTmp);
}