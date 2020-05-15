import { Component } from '@angular/core';
import { PokemonTcgService } from './server/pokemon-tcg.service';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-teste';

  constructor(private _pokemonTcgService: PokemonTcgService) {
    _pokemonTcgService.listarTodos().subscribe((l) => {
      console.log(l);
    }, (error) => {
      console.log(error);
    });
  }
}
