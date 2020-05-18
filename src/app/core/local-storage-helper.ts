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
        localStorage.setItem(key, btoa(jsonStr));
    }

    static getObjeto<T>(key: string): T {
        let jsonStr = localStorage.getItem(key);
        if (!isNullOrUndefined(jsonStr))
            return JSON.parse(atob(jsonStr)) as T;
        else
            return null;
    }

    static delete(key: string) {
        localStorage.removeItem(key);
    }
}