import { EntitaFile } from "../entity/EntitaFile";


export class Package extends EntitaFile {
constructor(path:string, nomeProgetto:string){
    const testo :string = `
    {
        "name": "${nomeProgetto}",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "start": "ts-node ./index.ts",
          "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "devDependencies": {
          "@types/express": "^4.17.9",
          "@types/node": "^14.14.20",
          "ts-node": "^9.1.1",
          "tsconfig-paths": "^3.9.0",
          "typescript": "^4.1.3"
        },
        "dependencies": {
          "@overnightjs/core": "^1.7.5",
          "@overnightjs/logger": "^1.2.0",
          "express": "^4.17.1",
          "@types/bcrypt": "^3.0.0",
          "@types/helmet": "^4.0.0",
          "@types/jsonwebtoken": "^8.5.0",
          "@types/pg": "^7.14.6",
          "bcrypt": "^5.0.0",
          "body-parser": "^1.19.0",
          "class-validator": "^0.12.2",
          "http-status-codes": "^2.1.4",
          "jsonwebtoken": "^8.5.1",
          "pg": "^8.4.2",
          "prompt-sync": "^4.2.0",
          "reflect-metadata": "^0.1.13",
          "ts-node": "^9.0.0",
          "typedoc": "^0.19.2",
          "typeorm": "^0.2.29",
          "urllib": "^2.36.1"
        }
      }
      `;
    super(path+ "/package.json", "package", "descrizione", testo);
    
    console.log("Package : ");
    console.log("nome : "+this.nomeFile);
    console.log("path : "+this.path);
}
}