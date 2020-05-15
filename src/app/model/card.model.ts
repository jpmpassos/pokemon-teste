import { AttackModel } from './attack.model';
import { WeaknessModel } from './weakness.model';

export interface CardModel {
    id: string;
    name: string;
    nationalPokedexNumber: number;
    imageUrl: string;
    imageUrlHiRes: string;
    types: string[];
    supertype: string;
    subtype: string;
    evolvesFrom: string;
    hp: string;
    retreatCost: string[];
    number: string;
    artist: string;
    rarity: string;
    series: string;
    set: string;
    setCode: string;
    attacks: AttackModel[];
    weaknesses: WeaknessModel[];
}