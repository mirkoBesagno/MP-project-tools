"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Package = void 0;
var EntitaFile_1 = require("../entity/EntitaFile");
var Package = /** @class */ (function (_super) {
    __extends(Package, _super);
    function Package(path) {
        return _super.call(this, path + "/package.json", "package", "descrizione", "testo") || this;
    }
    return Package;
}(EntitaFile_1.EntitaFile));
exports.Package = Package;
