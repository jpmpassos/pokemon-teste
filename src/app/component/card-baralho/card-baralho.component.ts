import { Component, OnInit, Input } from '@angular/core';
import { BaralhoDal } from 'src/app/core/dal/baralho.dal';
import { BaralhoModel } from 'src/app/model/baralho.model';
import { BehaviorSubject } from 'rxjs';
import { SalvarBaralhoDialog } from 'src/app/page/dialog/salvar-baralho.dialog';
import { isNullOrUndefined } from 'util';
import { MatDialog } from '@angular/material/dialog';
import { BaralhoProviderService } from 'src/app/provider/baralho-provider.service';

@Component({
  selector: 'app-card-baralho',
  templateUrl: './card-baralho.component.html',
  styleUrls: ['./card-baralho.component.scss']
})
export class CardBaralhoComponent implements OnInit {

  @Input() baralho: BaralhoModel;
  @Input() baralhoComunicacao: BehaviorSubject<BaralhoModel>;

  constructor(
    public dialog: MatDialog,
    public baralhoDao: BaralhoProviderService
  ) { }

  ngOnInit() {
  }

  selecionarCard() {
    this.baralhoComunicacao.next(this.baralho);
  }

  openEditarBaralho(): void {
    const dialogRef = this.dialog.open(SalvarBaralhoDialog, {
      width: '250px',
      data: this.baralho
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!isNullOrUndefined(result) && !isNullOrUndefined(result.descricao)) {
        console.log('Atualizando Baralho');
        console.log(result);
        this.baralho = result;
        this.baralhoDao.dao.atualizar(this.baralho);
      }
    });
  }

  deletarBaralho(): void {
    this.baralhoDao.dao.remover(this.baralho);
    this.baralhoComunicacao.next(null);
  }

}
