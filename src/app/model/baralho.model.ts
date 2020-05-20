import { CardModel } from './card.model';
import { isNullOrUndefined } from 'util';

export class BaralhoModel {
    constructor(
        public id?: number,
        public descricao?: string,
        public cards?: CardModel[],
    ) {
        if (isNullOrUndefined(cards))
            cards = [];
    }
}