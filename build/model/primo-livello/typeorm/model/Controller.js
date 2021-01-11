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
exports.Controller = void 0;
var EntitaCartella_1 = require("../../../entity/EntitaCartella");
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    function Controller(path) {
        return _super.call(this, path + "/controller", "controller", "descrizione") || this;
    }
    return Controller;
}(EntitaCartella_1.EntitaCartella));
exports.Controller = Controller;
