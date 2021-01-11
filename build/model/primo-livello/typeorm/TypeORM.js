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
exports.TypeORM = void 0;
var EntitaCartella_1 = require("../../entity/EntitaCartella");
var Controller_1 = require("./model/Controller");
var Error_1 = require("./model/Error");
var Interfaces_1 = require("./model/Interfaces");
var Model_1 = require("./model/Model");
var Repository_1 = require("./model/Repository");
var View_1 = require("./model/View");
var TypeORM = /** @class */ (function (_super) {
    __extends(TypeORM, _super);
    function TypeORM(path) {
        var _this = _super.call(this, path + "/typeorm", "typeorm", "descrizione") || this;
        _this.controller = new Controller_1.Controller(_this.path);
        _this.interfaces = new Interfaces_1.Interfaces(_this.path);
        _this.error = new Error_1.Error(_this.path);
        _this.model = new Model_1.Model(_this.path);
        _this.repository = new Repository_1.Repository(_this.path);
        _this.view = new View_1.View(_this.path);
        return _this;
    }
    return TypeORM;
}(EntitaCartella_1.EntitaCartella));
exports.TypeORM = TypeORM;
