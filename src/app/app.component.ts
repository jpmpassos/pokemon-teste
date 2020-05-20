import { Component } from '@angular/core';
import { PokemonTcgService } from './server/pokemon-tcg.service';
import { log } from 'util';
import { BaralhoModel } from './model/baralho.model';
import { BaralhoDal } from './core/dal/baralho.dal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-teste';

  baralhoDal: BaralhoDal;

  constructor(private _pokemonTcgService: PokemonTcgService) {
/*
    this.baralhoDal = new BaralhoDal();

    this._pokemonTcgService.paginado(1, 20, "").subscribe((l) => {
      console.log(l);
    }, (error) => {
      console.log(error);
    });*/
  }

  inseririBaralho() {
    let baralho = new BaralhoModel();
    baralho.cards = null;
    baralho.descricao = 'teste';

    let baralhoInserido = this.baralhoDal.salvar(baralho);
    console.log(baralhoInserido);
  }

  atualizarBaralho() {
    let baralho = new BaralhoModel();
    baralho.cards = null;
    baralho.descricao = 'teste2asdasd';
    baralho.id = 22;

    this.baralhoDal.atualizar(baralho);

    console.log(this.baralhoDal.todos());
  }

  deletarBaralho() {
    let baralho = new BaralhoModel();
    baralho.cards = null;
    baralho.descricao = 'teste2';
    baralho.id = 27;

    this.baralhoDal.remover(baralho);

    console.log(this.baralhoDal.todos());
  }

  obter() {
    console.log(this.baralhoDal.obter(22));
  }
}
