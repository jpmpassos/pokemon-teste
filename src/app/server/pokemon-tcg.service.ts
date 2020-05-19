import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CardModel } from '../model/card.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { QueryParamCardUtil } from '../util/query-param-card.util';

@Injectable({
  providedIn: 'root'
})
export class PokemonTcgService {
  constructor(private httpClient: HttpClient) { }

  paginado(page: number, pageSize: number, name: String): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>(environment.endpoint.card(
      new QueryParamCardUtil().page(page).pageSize(pageSize).name(name).toParamQuery()

    ),
      { observe: 'response' });
  }

}
