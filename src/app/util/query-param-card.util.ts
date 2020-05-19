import { isNullOrUndefined } from 'util';

export class QueryParamCardUtil {
    private readonly _listaParam: String[];
    constructor() {
        this._listaParam = [];
    }

    page(value: number): QueryParamCardUtil {
        if (!isNullOrUndefined(value)) {
            this._listaParam.push("page=" + value.toString())
        }
        return this;
    }

    pageSize(value: number): QueryParamCardUtil {
        if (!isNullOrUndefined(value)) {
            this._listaParam.push("pageSize=" + value.toString())
        }
        return this;
    }

    name(value: String): QueryParamCardUtil {
        if (!isNullOrUndefined(value)) {
            this._listaParam.push("name=" + value.toString())
        }
        return this;
    }

    toParamQuery() {
        if (this._listaParam.length == 0) {
            return null;
        }
        
        let paramUrl = this._listaParam[0];

        for (let index = 1; index < this._listaParam.length; index++) {
            paramUrl += "&" + this._listaParam[index];
        }
        
        return paramUrl;
    }
}