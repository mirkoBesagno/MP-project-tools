import { EntitaFile } from "../entity/EntitaFile";


export class Env extends EntitaFile {
constructor(path:string){
    const testo :string = `NODE_ENV=development`;
    super(path+ "/.env", "env", "descrizione", testo);
    
    console.log("Env : ");
    console.log("nome : "+this.nomeFile);
    console.log("path : "+this.path);
}
}