import { Component, OnInit } from '@angular/core';
import { BaralhoModel } from 'src/app/model/baralho.model';
import { CardModel } from 'src/app/model/card.model';
import { BehaviorSubject } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { MatDialog } from '@angular/material/dialog';
import { ParamUtil } from 'src/app/util/param.util';
import { Router } from '@angular/router';
import { BaralhoProviderService } from 'src/app/provider/baralho-provider.service';
import { ValdacaoBaralhoUtil } from 'src/app/util/validacao-baralho.util';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-baralho-page',
  templateUrl: './baralho-page.component.html',
  styleUrls: ['./baralho-page.component.scss']
})
export class BaralhoPageComponent implements OnInit {

  baralhoComunicacao = new BehaviorSubject<CardModel>(null);

  baralho: BaralhoModel;

  listaCards: CardModel[] = [];
  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private baralhoDao: BaralhoProviderService,
    private _snackBar: MatSnackBar
  ) {
   
  }

  ngOnInit() {
    this.baralho = ParamUtil.getParam("baralho");

    if (isNullOrUndefined(this.baralho)) {
      this._router.navigate(['/']);
      this.abrirSnackBar("Nenhum Baralho selecionado!", "ERRO");
    } else {
      if (!isNullOrUndefined(this.baralho.cards))
        this.listaCards = this.baralho.cards;
    }

    this.baralhoComunicacao.subscribe((card) => {
      console.log("Entrou no submit");
      this.processarInserirCard(card);
    })
  }

  processarInserirCard(card: CardModel) {
    if (!isNullOrUndefined(card) && this.validacaoInserirCard(card)) {
      if (isNullOrUndefined(this.baralho.cards))
        this.baralho.cards = this.listaCards;
      this.baralho.cards.push(card);
      this.baralhoDao.dao.atualizar(this.baralho)
    }
  }

  removerCard(card: CardModel) {
    if (!isNullOrUndefined(card)) {
      this.baralho.cards.splice(this.baralho.cards.indexOf(card), 1);
      this.baralhoDao.dao.atualizar(this.baralho)
    }
  }

  validacaoInserirCard(card): boolean {
    if (!ValdacaoBaralhoUtil.isValidoCartasMesmoNome(card, this.baralho)) {
      this.abrirSnackBar("É permitido apenas 4 cartas com o mesmo nome!", "ERRO");
      return false;
    }
    if (!ValdacaoBaralhoUtil.isValidoCartasQuantMax(this.baralho)) {
      this.abrirSnackBar("É permitido apenas 60 cartas no baralho!", "ERRO");
      return false;
    }
    return true;
  }

  abrirSnackBar(mensagem: string, acao: string) {
    this._snackBar.open(mensagem, acao, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
