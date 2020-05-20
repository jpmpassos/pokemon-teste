import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from 'src/app/model/card.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {

  @Input() card: CardModel;
  @Input() baralhoComunicacao: BehaviorSubject<CardModel>;

  constructor() { }

  ngOnInit() {
  }

  selecionarCard() {
    this.baralhoComunicacao.next(this.card);
  }

}
