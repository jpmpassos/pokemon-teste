import { BaralhoModel } from './baralho.model';
import { isNullOrUndefined } from 'util';
import { CardModel } from './card.model';

export class DetalhesModel {
    baralho: BaralhoModel;
    countPokemon: number;
    countTreinadores: number;
    countCores: number;
    constructor(
        baralho: BaralhoModel
    ) {
        this.baralho = baralho;
        this.processarDetalhes();
        this.processarCores();
    }

    private processarDetalhes() {
        this.countCores = 0;
        this.countPokemon = 0;
        this.countTreinadores = 0;
        for (let index = 0; index < this.baralho.cards.length; index++) {
            let card = this.baralho.cards[index];
            if (card.supertype == "Pokémon")
                this.countPokemon++;
            if (card.supertype == "Trainer")
                this.countTreinadores++;
        }
    }

    private processarCores() {
        let list = this.baralho.cards.sort(this.compararType);
        let card = this.baralho.cards[0];
        if (!isNullOrUndefined(card.types)) this.countCores++;
        for (let index = 1; index < list.length; index++) {
            let card2 = list[index];
            let result = this.compararType(card2, card);
            if (result != 0) {
                if (!isNullOrUndefined(card2.types)) {
                    this.countCores++;
                    card = card2;
                }
            }
        }
    }

    compararType(c1: CardModel, c2: CardModel): number {
        if (c1.types == c2.types) return 0;
        if (isNullOrUndefined(c1.types)) return 1;
        if (isNullOrUndefined(c2.types)) return -1;
        if (c1.types.length == c2.types.length) {
            for (let index = 0; index < c1.types.length; index++) {
                if (c1.types[index] > c2.types[index]) {
                    return 1;
                } else if (c1.types[index] < c2.types[index]) {
                    return -1;
                }
            }
            return 0
        } else if (c1.types.length != c2.types.length) {
            let maxLength = c1.types.length > c2.types.length ? c1.types.length : c2.types.length;
            for (let index = 0; index < maxLength; index++) {
                if (c1.types.length >= index)
                    return 1;
                if (c2.types.length >= index)
                    return -1;
                if (c1.types[index] > c2.types[index]) {
                    return 1;
                } else if (c1.types[index] < c2.types[index]) {
                    return -1;
                }
            }
            return 0
        }
    }


}