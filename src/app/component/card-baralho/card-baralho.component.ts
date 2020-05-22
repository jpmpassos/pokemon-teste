import { Component, OnInit, Input } from '@angular/core';
import { BaralhoDal } from 'src/app/core/dal/baralho.dal';
import { BaralhoModel } from 'src/app/model/baralho.model';
import { BehaviorSubject } from 'rxjs';
import { SalvarBaralhoDialog } from 'src/app/page/dialog/salvar-baralho/salvar-baralho.dialog';
import { isNullOrUndefined } from 'util';
import { MatDialog } from '@angular/material/dialog';
import { BaralhoProviderService } from 'src/app/provider/baralho-provider.service';
import { ConfirmacaoDialogModel } from 'src/app/model/confirmacao-dialogo.model';
import { ConfirmacaoDialogComponent } from 'src/app/page/dialog/confirmacao-dialog/confirmacao-dialog.component';
import { Router } from '@angular/router';
import { ParamUtil } from 'src/app/util/param.util';

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
    public baralhoDao: BaralhoProviderService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  selecionarCard() {
    this.baralhoComunicacao.next(this.baralho);
  }

  abrirDetalhes() {
    ParamUtil.setParam('baralho', this.baralho);
    this._router.navigate(['/detalhes']);
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

  async deletarBaralho() {
    if (<boolean>await this.confirmacaoDialogo("Confirma remover este Baralho?", "Confirmação")) {
      this.baralhoDao.dao.remover(this.baralho);
      this.baralhoComunicacao.next(null);
    }
  }

  async confirmacaoDialogo(mensagem, titulo): Promise<boolean> {
    return await new Promise<boolean>(resolve => {
      const dialogData = new ConfirmacaoDialogModel(titulo, mensagem);

      const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });

      dialogRef.afterClosed().subscribe(dialogResult => {
        resolve(dialogResult);
      });
    });
  }

}
