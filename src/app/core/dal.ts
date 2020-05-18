import { LocalStorageHelpers } from './local-storage-helper';
import { isNullOrUndefined } from 'util';
import { CardModel } from '../model/card.model';

export class Dal<T> {

    constructor(
        private className: string
    ) { }


    private carregarLista(): any[] {
        let list = LocalStorageHelpers.getObjeto<T[]>(this.className);
        if (isNullOrUndefined(list)) {
            list = [];
        }
        return list;
    }

    private salvarLista(list: T[]) {
        LocalStorageHelpers.salvarObjeto<T[]>(this.className, list);
    }

    private nextSequencia(): number {
        let num = LocalStorageHelpers.get(this.className + "_Sequencia");
        let sequencia: number;
        if (isNullOrUndefined(num)) {
            sequencia = 1;
        } else {
            sequencia = Number.parseInt(num) + 1;
        }
        LocalStorageHelpers.salvar(this.className + "_Sequencia", sequencia.toString());
        return sequencia;
    }

    protected insert(value: any): any {
        value.id = this.nextSequencia();
        let list = this.carregarLista();
        list.push(value);
        this.salvarLista(list);
        return value;
    }

    protected update(value: any): boolean {
        let list = this.carregarLista();

        let oldValue = list.find((ob) => ob.id == value.id);

        if (!isNullOrUndefined(oldValue)) {
            list.splice(list.indexOf(oldValue), 1, value);
            this.salvarLista(list);
            return true;
        }
        return false;
    }

    protected delete(value: any): boolean {
        let list = this.carregarLista();

        let oldValue = list.find((ob) => ob.id == value.id);

        if (!isNullOrUndefined(oldValue)) {
            list.splice(list.indexOf(oldValue), 1);
            this.salvarLista(list);
            return true;
        }
        return false;
    }

    protected listAll(): T[] {
        return this.carregarLista();
    }


    protected getId(id: number): T {
        let list = this.carregarLista();

        let oldValue = list.find((ob) => ob.id == id);

        return oldValue;
    }
}