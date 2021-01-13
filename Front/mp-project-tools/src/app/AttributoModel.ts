

export class AttributoModel {
  nomeAttributo: string;
  tipologia: string;
  tipoAttributo: string;
  testo: string;
  constructor(nomeAttributo: string, tipoAttributo: string, tipologia: string) {
    this.nomeAttributo = nomeAttributo;
    this.tipoAttributo = tipoAttributo;
    this.tipologia = tipologia;
    this.testo = "";
  }
  GetTesto(): string {
    return " |--nomeAtt: " + this.nomeAttributo + "  |--tipologia: " + this.tipologia + "  |--testo " + this.testo + " |--\n";
  }
}
export class EntitaFile {
  path: string;
  nomeFile: string;
  descrizione: string;
  testo: string;

  constructor(path: string, nomeFile: string, descrizione: string, testo: string) {
    this.path = path;
    this.nomeFile = nomeFile;
    this.descrizione = descrizione;
    this.testo = testo;
  }

  Salva() {
    /* try {
        writeFileSync(this.path, this.testo);
        console.log('File creato !!!!! ');
        console.log('Nome : ' + this.nomeFile);
        console.log("Percorso : "+this.path);
        
    } catch (error) {
        console.log("Errore : " + error);
    } */
  }
  SetTesto(testo: string) {
    this.testo = testo;
  }
}
export class EntitaTypeorm extends EntitaFile {
  constructor(nome: string, path: string, testo?: string) {
    if (!testo) {
      testo = "testo";
    }
    super(path + "/" + nome, nome, "descrizione", testo);
  }
  SetTesto(item: string) {
    super.SetTesto(item);
  }
}

export class EntitaModello extends EntitaTypeorm {
  attributi: AttributoModel[];
  nome: string;
  nomeModello: string;
  testoInterface: string;
  testoBody: string;
  testoRisultato: string;
  constructor(nome: string, path: string, listaAttributi: AttributoModel[]) {
    const nomeModello: string = nome.substr(0, 1).toUpperCase() + nome.substr(1);


    super(nome + ".model.ts", path, "");

    this.testoInterface = "";
    this.testoBody = "";
    this.attributi = listaAttributi;
    this.nome = nome;
    this.nomeModello = nomeModello;

    this.testoRisultato = `
        import { Entity } from "typeorm";

        export interface I${nomeModello}Model{
            ${this.testoInterface}
        };
        /**
         * 
         */
        @Entity()
        export class ${nomeModello}Model {
            ${this.testoBody}
        }
        `;
  }
  Salva() {
    super.SetTesto(this.testoRisultato);
    super.Salva();
  }
  AggiungiAttributoModel(attributo: AttributoModel) {
    if (this.TrovaAttributoModel(attributo) == undefined) {
      this.attributi.push(attributo);
    }
  }
  TrovaAttributoModel(attributo: AttributoModel) {
    this.attributi.forEach(element => {
      if (element.nomeAttributo == attributo.nomeAttributo) {
        return element;
      }
    });
    return undefined;
  }
}

export class EntitaCartella {
  path: string;
  nomeCartella: string;
  descrizione: string;
  constructor(path: string, nomeCartella: string, descrizione: string) {
    this.path = path;
    this.nomeCartella = nomeCartella;
    this.descrizione = descrizione;
  }

  Salva() {
    /* try {
        mkdirpSync(this.path);
        console.log('Cartella salvata !!!!! ');
        console.log('Nome : ' + this.nomeCartella);
        console.log("Percorso : "+this.path);
        
    } catch (error) {
        console.log("Errore : " + error);
    } */
  }
}

export class Model extends EntitaCartella {

  nome: string = "";
  listaEntitaModello: EntitaModello[] = [];

  constructor(path: string) {
    super(path + "/model", "model", "descrizione");
    console.log("Model : ");
    console.log("nome : " + this.nomeCartella);
    console.log("path : " + this.path);
  }

  AggiungiEntitaModello(nome: string, listaAttributi: AttributoModel[]): EntitaModello {
    const tmp = this.TrovaModello(nome);
    if (tmp) {
      for (let index = 0; index < listaAttributi.length; index++) {
        const element = listaAttributi[index];
        tmp?.AggiungiAttributoModel(element);
      }
      return tmp;
    }
    else {
      const temp = new EntitaModello(nome, this.path, listaAttributi);
      this.listaEntitaModello.push(temp);
      return temp;
    }
  }

  TrovaModello(nome: string): EntitaModello | undefined {
    this.listaEntitaModello.forEach(element => {
      if (element.nome == nome) {
        return element;
      }
    });
    return undefined;
  }
  Salva() {
    super.Salva();
    this.listaEntitaModello.forEach(element => {
      element.Salva();
    });
  }
}

