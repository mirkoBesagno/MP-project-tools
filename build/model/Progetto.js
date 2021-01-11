"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progetto = void 0;
var Configurazione_1 = require("./primo-livello/configurazione/Configurazione");
var Env_1 = require("./primo-livello/Env");
var tools_1 = require("./primo-livello/tools/tools");
var Express_1 = require("./primo-livello/express/Express");
var Package_1 = require("./primo-livello/Package");
var Tsconfig_1 = require("./primo-livello/Tsconfig");
var TypeORM_1 = require("./primo-livello/typeorm/TypeORM");
var Progetto = /** @class */ (function () {
    function Progetto(path, nome, dataCreazione) {
        this.nome = nome;
        this.path = path + "/" + nome;
        // cartelle
        this.express = new Express_1.Express(path);
        this.typeorm = new TypeORM_1.TypeORM(path);
        this.configurazione = new Configurazione_1.Configurazione(path);
        this.tools = new tools_1.Tools(path);
        // file
        this.env = new Env_1.Env(path);
        this.package = new Package_1.Package(path);
        this.tsconfig = new Tsconfig_1.Tsconfig(path);
    }
    Progetto.prototype.Salva = function () {
        //cartelle
        this.configurazione.Salva();
        this.express.Salva();
        this.tools.Salva();
        this.typeorm.Salva();
        //file
        this.env.Salva();
        this.package.Salva();
        this.tsconfig.Salva();
    };
    return Progetto;
}());
exports.Progetto = Progetto;
