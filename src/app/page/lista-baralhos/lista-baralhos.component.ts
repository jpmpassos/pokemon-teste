import { Component, OnInit } from '@angular/core';
import { BaralhoModel } from 'src/app/model/baralho.model';
import { BaralhoDal } from 'src/app/core/dal/baralho.dal';
import { isNullOrUndefined } from 'util';
import { ParamUtil } from 'src/app/util/param.util';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SalvarBaralhoDialog } from '../dialog/salvar-baralho/salvar-baralho.dialog';
import { BaralhoProviderService } from 'src/app/provider/baralho-provider.service';

@Component({
  selector: 'app-lista-baralhos',
  templateUrl: './lista-baralhos.component.html',
  styleUrls: ['./lista-baralhos.component.scss']
})
export class ListaBaralhosComponent implements OnInit {

  controleSearch = 0;
  listaBaralhos: BaralhoModel[];
  listaTodas: BaralhoModel[];

  baralhoComunicacao = new BehaviorSubject<BaralhoModel>(null);
  search = "";

  constructor(
    private _router: Router,
    private dialog: MatDialog,
    public baralhoDao: BaralhoProviderService
  ) { }

  ngOnInit() {
    this.carregarListaBaralho();

    this.baralhoComunicacao.subscribe((baralho) => {
      if (!isNullOrUndefined(baralho)) {
        this.editarBaralho(baralho)
      } else {
        this.carregarListaBaralho();
      }
    });
  }

  carregarListaBaralho() {
    this.listaBaralhos = this.baralhoDao.dao.todos();
    this.listaTodas = this.listaBaralhos;
    if (isNullOrUndefined(this.listaBaralhos))
      this.listaBaralhos = [];
  }

  editarBaralho(baralho: BaralhoModel) {
    ParamUtil.setParam('baralho', baralho);
    this._router.navigate(['/baralho']);
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
    if (this.search.trim() != "")
      this.listaBaralhos = this.listaTodas.filter((bar) => bar.descricao.indexOf(this.search) != -1);
    else
      this.listaBaralhos = this.listaTodas;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  openNovoBaralho(): void {
    const dialogRef = this.dialog.open(SalvarBaralhoDialog, {
      width: '250px',
      data: new BaralhoModel()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!isNullOrUndefined(result) && !isNullOrUndefined(result.descricao)) {
        console.log('The dialog was closed');
        console.log(result);
        this.baralhoDao.dao.salvar(result);
        this.carregarListaBaralho();
      }
    });
  }
}
