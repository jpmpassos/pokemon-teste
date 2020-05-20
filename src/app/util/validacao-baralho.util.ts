import { CardModel } from '../model/card.model';
import { BaralhoModel } from '../model/baralho.model';
import { isNullOrUndefined } from 'util';

export class ValdacaoBaralhoUtil {

    static isValidoCartasMesmoNome(card: CardModel, baralho: BaralhoModel) {
        if (isNullOrUndefined(baralho)) {
            return false;
        }
        if (isNullOrUndefined(baralho.cards)) {
            return true;
        }
        let listTemp = baralho.cards.filter((c) => c.name == card.name);
        if (isNullOrUndefined(listTemp) || listTemp.length < 4) {
            return true;
        }
        return false;
    }

    static isValidoCartasQuantMax(baralho: BaralhoModel) {
        if (isNullOrUndefined(baralho)) {
            return false;
        }
        if (isNullOrUndefined(baralho.cards)) {
            return true;
        }
        if (isNullOrUndefined(baralho.cards) || baralho.cards.length < 60) {
            return true;
        }
        return false;
    }

    static isValidoCartasQuantMinima(baralho: BaralhoModel) {
        if (isNullOrUndefined(baralho)) {
            return false;
        }
        if (isNullOrUndefined(baralho.cards)) {
            return false;
        }
        if (baralho.cards.length >= 24) {
            return true;
        }
        return false;
    }
}