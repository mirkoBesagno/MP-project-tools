
export namespace TipologiaAttributo {

    export function values() {
        return Object.keys(TipologiaAttributo).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}
