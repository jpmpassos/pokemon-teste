import { isNullOrUndefined } from 'util';

export class LocalStorageHelpers {
    static salvar(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    static get(key: string) {
        return localStorage.getItem(key);
    }

    static salvarObjeto<T>(key: string, value: T) {
        let jsonStr = JSON.stringify(value)
        localStorage.setItem(key, this.encripto(jsonStr));
    }

    static getObjeto<T>(key: string): T {
        let jsonStr = localStorage.getItem(key);
        if (!isNullOrUndefined(jsonStr))
            return JSON.parse(this.dencripto(jsonStr)) as T;
        else
            return null;
    }

    static delete(key: string) {
        localStorage.removeItem(key);
    }

    private static encripto(jsonStr) {
        return jsonStr;
        //return btoa(jsonStr);
    }

    private static dencripto(jsonStr) {
        return jsonStr;
        //return atob(jsonStr);
    }
}