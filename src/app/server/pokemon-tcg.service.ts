import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardModel } from '../model/card.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonTcgService {
  constructor(private httpClient: HttpClient) { }

  listarTodos() {
    return this.httpClient.get<CardModel[]>(environment.endpoint.CARD);
  }

}
