import { Component, OnInit, Input } from '@angular/core';
import { PokemonTcgService } from 'src/app/server/pokemon-tcg.service';
import { CardModel } from 'src/app/model/card.model';
import { PageEvent } from '@angular/material/paginator';
import { isNullOrUndefined } from 'util';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lista-cards',
  templateUrl: './lista-cards.component.html',
  styleUrls: ['./lista-cards.component.scss']
})
export class ListaCardsComponent implements OnInit {
  controleSearch = 0;
  page = 0;
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  search = "";

  listaCads: CardModel[];

  pageEvent: PageEvent;

  @Input() baralhoComunicacao: BehaviorSubject<CardModel>;

  constructor(
    private _pokemonTcgService: PokemonTcgService
  ) { }

  ngOnInit() {
    this.carregarCards();
  }

  carregarCards() {
    this._pokemonTcgService.paginado(this.page + 1, this.pageSize, this.search).subscribe((response) => {
      console.log(response.body.cards);
      this.listaCads = response.body.cards;
      this.length = Number.parseInt(response.headers.get('Total-Count'));
    }, (error) => {
      console.log(error);
    });
  }

  async processarSearch() {
    this.controleSearch++;
    if (this.controleSearch > 1)
      return;
    await this.delay(1000);
    if (this.controleSearch > 1) {
      this.controleSearch = 0;
      this.processarSearch();
      return;
    }
    this.controleSearch = 0;
    this.page = 0;
    this.carregarCards();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  processarPage(pageEvent) {

    this.pageEvent = pageEvent;
    console.log(pageEvent);

    this.page = pageEvent.pageIndex + 1;
    this.pageSize = pageEvent.pageSize;

    this.carregarCards();
  }

}
