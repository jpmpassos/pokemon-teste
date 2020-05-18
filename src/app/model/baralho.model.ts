import { CardModel } from './card.model';

export class BaralhoModel {
    constructor(
        public id?: number,
        public descricao?: string,
        public cards?: CardModel[],
    ) { }
}