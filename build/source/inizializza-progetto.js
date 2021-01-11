"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.progetto = void 0;
var fs_extra_1 = require("fs-extra");
function CreaCartella(path) {
    return __awaiter(this, void 0, void 0, function () {
        var configuration, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    configuration = 'configuration';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fs_extra_1.mkdir(path)];
                case 2:
                    _a.sent();
                    console.log('Creata cartella : ' + configuration);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("Errore : " + error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function CreaFile(path, testo) {
    return __awaiter(this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs_extra_1.writeFile(path, testo)];
                case 1:
                    _a.sent();
                    console.log('Creato il file in : ' + path);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log("Error : " + error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var progetto = /** @class */ (function () {
    function progetto(parameters) {
        this.struttura = {
            "progetto": {
                "path": "",
                "nome": "",
                "dataCreazione": ""
            },
            "livello-1": {
                "configurazione": {
                    "path": "/configuration",
                    "nomeCartella": "configuration",
                    "descrizione": "",
                    "livello-2": {}
                },
                "express": {
                    "path": "/express",
                    "nomeCartella": "express",
                    "descrizione": "",
                    "livello-2": {
                        "api": {
                            "path": "/api",
                            "nomeCartella": "api",
                            "descrizione": "",
                            "livello-3": {}
                        },
                        "error": {
                            "path": "/error",
                            "nomeCartella": "error",
                            "descrizione": "",
                            "livello-3": {}
                        },
                        "interfaces": {
                            "path": "/interfaces",
                            "nomeCartella": "interfaces",
                            "descrizione": "",
                            "livello-3": {}
                        },
                        "middleware": {
                            "path": "/middleware",
                            "nomeCartella": "middleware",
                            "descrizione": "",
                            "livello-3": {}
                        },
                        "route": {
                            "path": "/route",
                            "nomeCartella": "route",
                            "descrizione": "",
                            "livello-3": {}
                        },
                        "server.ts": {
                            "path": "",
                            "nomeFile": "",
                            "descrizione": "",
                            "testo": ""
                        },
                    }
                },
                "typeorm": {
                    "path": "/typeorm",
                    "nomeCartella": "typeorm",
                    "descrizione": "",
                    "livello-2": {
                        "controller": {
                            "path": "/controller",
                            "nomeCartella": "controller",
                            "descrizione": "",
                            "livello-3": {}
                        },
                        "error": {
                            "path": "/error",
                            "nomeCartella": "error",
                            "descrizione": "",
                            "livello-3": {}
                        },
                        "interfaces": {
                            "path": "/interfaces",
                            "nomeCartella": "interfaces",
                            "descrizione": "",
                            "livello-3": {}
                        },
                        "model": {
                            "path": "/model",
                            "nomeCartella": "model",
                            "descrizione": "",
                            "livello-3": {}
                        },
                        "repository": {
                            "path": "/repository",
                            "nomeCartella": "repository",
                            "descrizione": "",
                            "livello-3": {}
                        },
                        "view": {
                            "path": "/view",
                            "nomeCartella": "view",
                            "descrizione": "",
                            "livello-3": {}
                        },
                        "database.ts": {
                            "path": "/database.ts",
                            "nomeFile": "database.ts",
                            "descrizione": "",
                            "testo": ""
                        }
                    }
                },
                "tools": {
                    "path": "/tools",
                    "nomeCartella": "tools",
                    "descrizione": "",
                    "livello-2": {}
                },
                ".env": {
                    "path": "",
                    "nomeFile": "",
                    "descrizione": "",
                    "testo": ""
                },
                "package.json": {
                    "path": "",
                    "nomeFile": "",
                    "descrizione": "",
                    "testo": "\n    {\n        \"name\": \"\",\n        \"version\": \"1.0.0\",\n        \"description\": \"\",\n        \"main\": \"index.js\",\n        \"scripts\": {\n          \"start\": \"ts-node ./index.ts\",\n          \"test\": \"echo \"Error: no test specified\" && exit 1\"\n        },\n        \"keywords\": [],\n        \"author\": \"\",\n        \"license\": \"ISC\",\n        \"devDependencies\": {\n          \"@types/express\": \"^4.17.9\",\n          \"@types/node\": \"^14.14.20\",\n          \"ts-node\": \"^9.1.1\",\n          \"tsconfig-paths\": \"^3.9.0\",\n          \"typescript\": \"^4.1.3\"\n        },\n        \"dependencies\": {\n          \"@overnightjs/core\": \"^1.7.5\",\n          \"express\": \"^4.17.1\",    \n          \"@types/bcrypt\": \"^3.0.0\",\n          \"@types/helmet\": \"^4.0.0\",\n          \"@types/jsonwebtoken\": \"^8.5.0\",\n          \"@types/pg\": \"^7.14.6\",\n          \"bcrypt\": \"^5.0.0\",\n          \"body-parser\": \"^1.19.0\",\n          \"class-validator\": \"^0.12.2\",\n          \"http-status-codes\": \"^2.1.4\",\n          \"jsonwebtoken\": \"^8.5.1\",\n          \"pg\": \"^8.4.2\",\n          \"prompt-sync\": \"^4.2.0\",\n          \"reflect-metadata\": \"^0.1.13\",\n          \"ts-node\": \"^9.0.0\",\n          \"typedoc\": \"^0.19.2\",\n          \"typeorm\": \"^0.2.29\",\n          \"urllib\": \"^2.36.1\"\n        }\n      }\n      "
                },
                "tsconfig.json": {
                    "path": "",
                    "nomeFile": "",
                    "descrizione": "",
                    "testo": "\n    {\n        \"compilerOptions\": {\n          /* Visit https://aka.ms/tsconfig.json to read more about this file */\n      \n          /* Basic Options */\n          // \"incremental\": true,                   /* Enable incremental compilation */\n          \"target\": \"es5\",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */\n          \"module\": \"commonjs\",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */\n          // \"lib\": [],                             /* Specify library files to be included in the compilation. */\n          // \"allowJs\": true,                       /* Allow javascript files to be compiled. */\n          // \"checkJs\": true,                       /* Report errors in .js files. */\n          // \"jsx\": \"preserve\",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */\n          // \"declaration\": true,                   /* Generates corresponding '.d.ts' file. */\n          // \"declarationMap\": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */\n          // \"sourceMap\": true,                     /* Generates corresponding '.map' file. */\n          // \"outFile\": \"./\",                       /* Concatenate and emit output to single file. */\n          // \"outDir\": \"./\",                        /* Redirect output structure to the directory. */\n          // \"rootDir\": \"./\",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */\n          // \"composite\": true,                     /* Enable project compilation */\n          // \"tsBuildInfoFile\": \"./\",               /* Specify file to store incremental compilation information */\n          // \"removeComments\": true,                /* Do not emit comments to output. */\n          // \"noEmit\": true,                        /* Do not emit outputs. */\n          // \"importHelpers\": true,                 /* Import emit helpers from 'tslib'. */\n          // \"downlevelIteration\": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */\n          // \"isolatedModules\": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */\n      \n          /* Strict Type-Checking Options */\n          \"strict\": true,                           /* Enable all strict type-checking options. */\n          // \"noImplicitAny\": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */\n          // \"strictNullChecks\": true,              /* Enable strict null checks. */\n          // \"strictFunctionTypes\": true,           /* Enable strict checking of function types. */\n          // \"strictBindCallApply\": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */\n          // \"strictPropertyInitialization\": true,  /* Enable strict checking of property initialization in classes. */\n          // \"noImplicitThis\": true,                /* Raise error on 'this' expressions with an implied 'any' type. */\n          // \"alwaysStrict\": true,                  /* Parse in strict mode and emit \"use strict\" for each source file. */\n      \n          /* Additional Checks */\n          // \"noUnusedLocals\": true,                /* Report errors on unused locals. */\n          // \"noUnusedParameters\": true,            /* Report errors on unused parameters. */\n          // \"noImplicitReturns\": true,             /* Report error when not all code paths in function return a value. */\n          // \"noFallthroughCasesInSwitch\": true,    /* Report errors for fallthrough cases in switch statement. */\n          // \"noUncheckedIndexedAccess\": true,      /* Include 'undefined' in index signature results */\n      \n          /* Module Resolution Options */\n          // \"moduleResolution\": \"node\",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */\n          // \"baseUrl\": \"./\",                       /* Base directory to resolve non-absolute module names. */\n          // \"paths\": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */\n          // \"rootDirs\": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */\n          // \"typeRoots\": [],                       /* List of folders to include type definitions from. */\n          // \"types\": [],                           /* Type declaration files to be included in compilation. */\n          // \"allowSyntheticDefaultImports\": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */\n          \"esModuleInterop\": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */\n          // \"preserveSymlinks\": true,              /* Do not resolve the real path of symlinks. */\n          // \"allowUmdGlobalAccess\": true,          /* Allow accessing UMD globals from modules. */\n      \n          /* Source Map Options */\n          // \"sourceRoot\": \"\",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */\n          // \"mapRoot\": \"\",                         /* Specify the location where debugger should locate map files instead of generated locations. */\n          // \"inlineSourceMap\": true,               /* Emit a single file with source maps instead of having a separate file. */\n          // \"inlineSources\": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */\n      \n          /* Experimental Options */\n          // \"experimentalDecorators\": true,        /* Enables experimental support for ES7 decorators. */\n          // \"emitDecoratorMetadata\": true,         /* Enables experimental support for emitting type metadata for decorators. */\n      \n          /* Advanced Options */\n          \"skipLibCheck\": true,                     /* Skip type checking of declaration files. */\n          \"forceConsistentCasingInFileNames\": true  /* Disallow inconsistently-cased references to the same file. */\n        }\n      }\n      \n    "
                },
            }
        };
        this.opzioni = {
            mode: 384,
        };
    }
    progetto.prototype.InizializzazioneProgetto = function (nomeProgetto, pathProgetto) {
        var _this = this;
        try {
            this.struttura.progetto.path = pathProgetto;
            this.struttura.progetto.nome = nomeProgetto;
            var opzioni = {
                mode: 384,
            };
            var livello1 = this.struttura["livello-1"];
            CreaCartella(this.struttura.progetto.path + livello1.configurazione.path)
                .then(function () { return console.log("Cartella creato con successo"); })
                .catch(function (error) { return console.log("Error : " + error); });
            CreaCartella(this.struttura.progetto.path + livello1.express.path)
                .then(function () {
                console.log("Cartella creato con successo");
                var pattmp = _this.struttura.progetto.path + _this.struttura["livello-1"].express.path;
                var strutturaTmp = _this.struttura["livello-1"].express["livello-2"];
                CreaCartella(pattmp + strutturaTmp.api.path)
                    .then(function () { return console.log("Cartella creato con successo"); })
                    .catch(function (error) { return console.log("Error : " + error); });
                CreaCartella(pattmp + strutturaTmp.error.path)
                    .then(function () { return console.log("Cartella creato con successo"); })
                    .catch(function (error) { return console.log("Error : " + error); });
                CreaCartella(pattmp + strutturaTmp.interfaces.path)
                    .then(function () { return console.log("Cartella creato con successo"); })
                    .catch(function (error) { return console.log("Error : " + error); });
                CreaCartella(pattmp + strutturaTmp.middleware.path)
                    .then(function () { return console.log("Cartella creato con successo"); })
                    .catch(function (error) { return console.log("Error : " + error); });
                CreaCartella(pattmp + strutturaTmp.route.path)
                    .then(function () { return console.log("Cartella creato con successo"); })
                    .catch(function (error) { return console.log("Error : " + error); });
                CreaFile(pattmp + strutturaTmp["server.ts"].path, strutturaTmp["server.ts"].testo)
                    .then(function () { return console.log("File creato con successo"); })
                    .catch(function (error) { return console.log("Error : " + error); });
            })
                .catch(function (error) { return console.log("Error : " + error); });
            CreaCartella(this.struttura.progetto.path + livello1.tools.path)
                .then(function () { return console.log("Cartella creato con successo"); })
                .catch(function (error) { return console.log("Error : " + error); });
            CreaCartella(this.struttura.progetto.path + livello1.typeorm.path)
                .then(function () {
                console.log("Cartella creato con successo");
                var pattmp = _this.struttura.progetto.path + _this.struttura["livello-1"].typeorm.path;
                var strutturaTmp = _this.struttura["livello-1"].typeorm["livello-2"];
                CreaCartella(pattmp + strutturaTmp.controller.path)
                    .then(function () { return console.log("Cartella creato con successo"); })
                    .catch(function (error) { return console.log("Error : " + error); });
                CreaCartella(pattmp + strutturaTmp.error.path)
                    .then(function () { return console.log("Cartella creato con successo"); })
                    .catch(function (error) { return console.log("Error : " + error); });
                CreaCartella(pattmp + strutturaTmp.interfaces.path)
                    .then(function () { return console.log("Cartella creato con successo"); })
                    .catch(function (error) { return console.log("Error : " + error); });
                CreaCartella(pattmp + strutturaTmp.model.path)
                    .then(function () { return console.log("Cartella creato con successo"); })
                    .catch(function (error) { return console.log("Error : " + error); });
                CreaCartella(pattmp + strutturaTmp.repository.path)
                    .then(function () { return console.log("Cartella creato con successo"); })
                    .catch(function (error) { return console.log("Error : " + error); });
                CreaCartella(pattmp + strutturaTmp.view.path)
                    .then(function () { return console.log("Cartella creato con successo"); })
                    .catch(function (error) { return console.log("Error : " + error); });
                CreaFile(pattmp + strutturaTmp["database.ts"].path, strutturaTmp["database.ts"].testo)
                    .then(function () { return console.log("File creato con successo"); })
                    .catch(function (error) { return console.log("Error : " + error); });
            })
                .catch(function (error) { return console.log("Error : " + error); });
            CreaFile(this.struttura.progetto.path + livello1["tsconfig.json"].path, livello1["tsconfig.json"].testo)
                .then(function () { return console.log("File creato con successo"); })
                .catch(function (error) { return console.log("Error : " + error); });
            CreaFile(this.struttura.progetto.path + livello1["tsconfig.json"].path, livello1["tsconfig.json"].testo)
                .then(function () { return console.log("File creato con successo"); })
                .catch(function (error) { return console.log("Error : " + error); });
            //CreaPrimoLivello(struttura);
            /* for (const item in struttura) {
                if (Object.prototype.hasOwnProperty.call(struttura, item)) {
                    const element = struttura[item];
                    CreaCartella(struttura.progetto.path+element.path);
                }
            } */
        }
        catch (error) {
        }
    };
    progetto.prototype.AggiungiEntitaAttore = function (nomeEntita) {
        var livello2 = this.struttura["livello-1"].typeorm["livello-2"];
        var path = this.struttura.progetto.path + this.struttura["livello-1"].typeorm.path;
        var t = "";
        livello2.controller["livello-3"][nomeEntita] =
            {
                "path": "",
                "nomeFile": "",
                "descrizione": "",
                "testo": ""
            };
        /* CreaFile(path + livello2.controller
            ,
            struttura["livello-1"]["tsconfig.json"].testo)
            .then(() => console.log("File creato con successo"))
            .catch(error => console.log("Error : " + error)); */
    };
    return progetto;
}());
exports.progetto = progetto;
/*
function CreaPrimoLivello(struttura) {

    CreaCartella(struttura.progetto.path + struttura["livello-1"].configurazione.path)
        .then(() => console.log("Cartella creato con successo"))
        .catch(error => console.log("Error : " + error));
    CreaCartella(struttura.progetto.path + struttura["livello-1"].express.path)
        .then(() => console.log("Cartella creato con successo"))
        .catch(error => console.log("Error : " + error));
    CreaCartella(struttura.progetto.path + struttura["livello-1"].tools.path)
        .then(() => console.log("Cartella creato con successo"))
        .catch(error => console.log("Error : " + error));
    CreaCartella(struttura.progetto.path + struttura["livello-1"].typeorm.path)
        .then(() => console.log("Cartella creato con successo"))
        .catch(error => console.log("Error : " + error));

    CreaFile(struttura.progetto.path + struttura["livello-1"]["tsconfig.json"].path,
        struttura["livello-1"]["tsconfig.json"].testo)
        .then(() => console.log("File creato con successo"))
        .catch(error => console.log("Error : " + error));
    CreaFile(struttura.progetto.path + struttura["livello-1"]["tsconfig.json"].path,
        struttura["livello-1"]["tsconfig.json"].testo)
        .then(() => console.log("File creato con successo"))
        .catch(error => console.log("Error : " + error));
}

function CreaSecondoLivello(struttura) {


    CreaCartella(struttura.progetto.path + struttura["livello-1"].)
        .then(() => console.log("Cartella creato con successo"))
        .catch(error => console.log("Error : " + error));


    CreaCartella(struttura.progetto.path + struttura["livello-1"].typeorm.path)
        .then(() => console.log("Cartella creato con successo"))
        .catch(error => console.log("Error : " + error));

    CreaFile(struttura.progetto.path + struttura["livello-1"]["tsconfig.json"].path,
        struttura["livello-1"]["tsconfig.json"].testo)
        .then(() => console.log("File creato con successo"))
        .catch(error => console.log("Error : " + error));
} */ 
