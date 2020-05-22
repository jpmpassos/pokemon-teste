import { BaralhoModel } from './baralho.model';
import { isNullOrUndefined } from 'util';

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
    }

    private processarDetalhes() {
        this.countTreinadores = 1;
        this.baralho.cards.forEach((card) => {
            if (card.supertype == "Pokémon")
                this.countPokemon++;
            if (card.supertype == "Trainer")
                this.countTreinadores++;
            if (!isNullOrUndefined(card.types) && card.types.length > 0)
                this.countCores++;
        });
    }
}