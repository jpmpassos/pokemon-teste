import { BaralhoModel } from 'src/app/model/baralho.model';
import { LocalStorageHelpers } from '../local-storage-helper';
import { isNullOrUndefined } from 'util';
import { Dal } from '../dal';

export class BaralhoDal extends Dal<BaralhoModel> {

    constructor() {
        super(BaralhoModel.name);
    }

    public salvar(baralhoModel: BaralhoModel): BaralhoModel {
        return this.insert(baralhoModel) as BaralhoModel;
    }

    public atualizar(baralhoModel: BaralhoModel) {
        this.update(baralhoModel);
    }

    public remover(baralhoModel: BaralhoModel) {
        this.delete(baralhoModel);
    }

    public todos(): BaralhoModel[] {
        return this.listAll();
    }

    public obter(id: number): BaralhoModel {
        return this.getId(id);
    }
}