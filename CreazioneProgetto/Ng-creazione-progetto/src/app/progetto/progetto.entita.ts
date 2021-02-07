/* import { exec } from "child-process-promise"; */

import { AttributoEntita } from "../attributo-entita/attributo-entita.entita";
import { TipologiaAttributo } from "../attributo-entita/enum/TipologiaAttributo.1";
import { EntitaER } from "../entita-er/entita-er.entita";

export class Progetto {

    listaComandi = [
        {
            "comando": "npm install",
            "eseguite": false,
            "daEseguire": false
        }, {
            "comando": "npm install",
            "eseguite": false,
            "daEseguire": false
        }
    ];
    percorso: string = "";
    nomeProgetto: string = "";
    testoFile: string = "";
    nomeFile: string = "";
    estensioneFile: string = "";

    //************************************ */


    listaEntitaER: EntitaER[] = [];

    /* typeorm: TypeORM;
    express: Express;
    configurazione: Configurazione;
    tools: Tools; 
  
    env: EnvVar;
    package: Package;
    tsconfig: Tsconfig;
  */
    dataCreazione: Date | undefined;

    constructor(path: string, nome: string, dataCreazione?: Date) {
        this.nomeProgetto = nome;
        this.percorso = path + "/" + this.nomeProgetto;
        console.log("Progetto : ");
        console.log("nome : " + this.nomeProgetto);
        console.log("path : " + this.percorso);

        /* // cartelle
        this.express = new Express(this.path);
        this.typeorm = new TypeORM(this.path);
        this.configurazione = new Configurazione(this.path);
        this.tools = new Tools(this.path);
        // file
        this.env = new EnvVar(this.path);
        this.package = new Package(this.path, this.nome);
        this.tsconfig = new Tsconfig(this.path); */

    }

    AggiungiEntita(item: EntitaER) {
        let presente: boolean = false;
        
        //debugger;
        this.listaEntitaER.forEach(element => {
            if (element.nomeEntita == item.nomeEntita) {
                presente = true;
                for (let index = element.listaAttributi.GetLenght(); index < item.listaAttributi.GetLenght(); index++) {
                    const element2 = item.listaAttributi[index];
                    element.AggiungiAttributo(element2);
                }
            }
        });
        if (!presente) {
            this.listaEntitaER.push(item);
        }
    }


    GetEntitaPerDiagrammaEr() {
        //debugger;
        let testo: string = "";
        for (let index = 0; index < this.listaEntitaER.length; index++) {
            const element = this.listaEntitaER[index];
            testo = testo + element.GetPerDiagrammaER();
        };
        return testo;
    }

    GetListaNomiEntitaER(): string[] {
        let vett: string[] = [];
        for (let index = 0; index < this.listaEntitaER.length; index++) {
            const element = this.listaEntitaER[index];
            vett.push(element.nomeEntita);
        }
        return vett;
    }

    Salva() {
        /* //cartelle
        this.configurazione.Salva();
        this.express.Salva();
        this.tools.Salva();
        this.typeorm.Salva();
    
        //file
        this.env.Salva();
        this.package.Salva();
        this.tsconfig.Salva(); */
    }

    PosizioneElemento(item: string) {
        for (let index = 0; index < this.listaEntitaER.length; index++) {
            const element = this.listaEntitaER[index];
            if (element.nomeEntita == item) {
                return index;
            }
        }
        return -1;
    }
    CreaPrototipoAttributoOpposto(tipologiaOriginale: TipologiaAttributo/* , nomeEntitaOriginale:string */) {
        //debugger;
        if (tipologiaOriginale == TipologiaAttributo.vettore) {
            var attnew = new AttributoEntita();
            attnew.tipologia = TipologiaAttributo.forkey;
            /* attnew.ModificaTipoAttributo(nomeEntitaOriginale); */
            //attnew.tipoAttributo = entTmp.nomeEntita;
            return attnew;
        }
        else if (tipologiaOriginale == TipologiaAttributo.forkey) {
            var attnew = new AttributoEntita();
            attnew.tipologia = TipologiaAttributo.vettore;
            /* attnew.ModificaTipoAttributo(nomeEntitaOriginale); */
            //attnew.tipoAttributo = entTmp.nomeEntita;
            return attnew;
        }
    }
    /* 
      AggiungiEntita(item: EntitaER) {
        let trovato: boolean = false;
        this.listaEntitaER.forEach(element => {
          if (element.nomiEntita == item.nomiEntita) {
            trovato = true;
            element.tiopoEntita = item.tiopoEntita;
            element.AggiungiAttributi(item.listaAttributi);
          }
        });
        if (!trovato) {
          this.listaEntita.push(item);
        }
      }
      GetEntitaPerDiagrammaEr() {
        let testo: string = "";
        this.listaEntitaER.forEach(element => {
          testo = testo + element.GetPerDiagrammaER();
        });
        return testo;
      }
      GetListaNomiEntita(): string[] {
        let vett: string[] = [];
        for (let index = 0; index < this.listaEntita.length; index++) {
          const element = this.listaEntita[index];
          vett.push(element.nomeEntita);
    
        }
        return vett;
      }
      GetListaNomiEntitaER(): string[] {
        let vett: string[] = [];
        for (let index = 0; index < this.listaEntitaER.length; index++) {
          const element = this.listaEntitaER[index];
          vett.push(element.nomeEntita);
        }
        return vett;
      } */


    /**
     * La cartella fa riferimento a percorso del progetto, settare la variabile prima se no è vuota: ""
     */
    /* SpostatiNellaCartella() {
        exec(`cd ${this.percorso}`)
            .then(function (result) {
                var stdout = result.stdout;
                var stderr = result.stderr;
                console.log('stdout: ', stdout);
                console.log('stderr: ', stderr);
            })
            .catch(function (err) {
                console.error('ERROR: ', err);
            });
    }

    CreoFile() {
        //creazione di un index.js
        //echo some-text  > filename.txt
        exec(`echo ${this.testoFile}  > ${this.nomeFile}.${this.estensioneFile}`)
            .then(function (result) {
                var stdout = result.stdout;
                var stderr = result.stderr;
                console.log('stdout: ', stdout);
                console.log('stderr: ', stderr);
            })
            .catch(function (err) {
                console.error('ERROR: ', err);
            });
    }
    LancioNPMInit() {
        //lancio promt npm init
        exec(`npm init`)
            .then(function (result) {
                var stdout = result.stdout;
                var stderr = result.stderr;
                console.log('stdout: ', stdout);
                console.log('stderr: ', stderr);
            })
            .catch(function (err) {
                console.error('ERROR: ', err);
            });
    }
    LancioCreazioneAngular() {

        //lancio di angular ng new {nomeProgetto}
        exec(`ng new ${this.nomeProgetto}`)
            .then(function (result) {
                var stdout = result.stdout;
                var stderr = result.stderr;
                console.log('stdout: ', stdout);
                console.log('stderr: ', stderr);
            })
            .catch(function (err) {
                console.error('ERROR: ', err);
            });
    } */
}