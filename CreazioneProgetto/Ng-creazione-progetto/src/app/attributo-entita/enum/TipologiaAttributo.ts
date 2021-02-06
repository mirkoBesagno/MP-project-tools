 import * as EnumTipologiaAttributo  from "./TipologiaAttributo.1"; 

export namespace TipologiaAttributo {

    export function values() {
        return Object.keys(EnumTipologiaAttributo.TipologiaAttributo).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}
