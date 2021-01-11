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
exports.Repository = void 0;
var EntitaCartella_1 = require("../../../entity/EntitaCartella");
var Repository = /** @class */ (function (_super) {
    __extends(Repository, _super);
    function Repository(path) {
        return _super.call(this, path + "/ropository", "repository", "descrizione") || this;
    }
    return Repository;
}(EntitaCartella_1.EntitaCartella));
exports.Repository = Repository;
