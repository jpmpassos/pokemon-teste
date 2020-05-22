import { CardModel } from './card.model';
import { isNullOrUndefined } from 'util';
import { StatusBaralhoEnum } from './status-baralho.enum';

export class BaralhoModel {
    constructor(
        public id?: number,
        public descricao?: string,
        public cards?: CardModel[],
        public status?: StatusBaralhoEnum
    ) {
        if (isNullOrUndefined(cards)) {
            cards = [];
        }
        status = cards.length < 24 ? StatusBaralhoEnum.INCOMPLETO : StatusBaralhoEnum.COMPLETO;
    }
}