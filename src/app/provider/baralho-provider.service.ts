import { Injectable } from '@angular/core';
import { BaralhoDal as BaralhoDao } from '../core/dal/baralho.dal';

@Injectable({
  providedIn: 'root'
})
export class BaralhoProviderService {

  dao: BaralhoDao = new BaralhoDao();
  
  constructor() { }
}
