import { Component, OnInit } from '@angular/core';
import { PokemonTcgService } from 'src/app/server/pokemon-tcg.service';
import { CardModel } from 'src/app/model/card.model';

@Component({
  selector: 'app-lista-cards',
  templateUrl: './lista-cards.component.html',
  styleUrls: ['./lista-cards.component.scss']
})
export class ListaCardsComponent implements OnInit {

  listaCads: CardModel[];

  constructor(
    private _pokemonTcgService: PokemonTcgService
  ) { }

  ngOnInit() {
    this.carregarCards();
  }

  carregarCards() {
    this._pokemonTcgService.listarTodos().subscribe((o) => {
      console.log(o.cards);
      this.listaCads = o.cards;
    }, (error) => {
      console.log(error);
    });
  }

}
