import { Component, OnInit } from '@angular/core';
import { BaralhoModel } from 'src/app/model/baralho.model';
import { ParamUtil } from 'src/app/util/param.util';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetalhesModel } from 'src/app/model/detalhes.model';

@Component({
  selector: 'app-detalhes-baralho',
  templateUrl: './detalhes-baralho.component.html',
  styleUrls: ['./detalhes-baralho.component.scss']
})
export class DetalhesBaralhoComponent implements OnInit {

  detalhe: DetalhesModel;

  constructor(
    private _router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    let baralho = ParamUtil.getParam('baralho');
    if (isNullOrUndefined(baralho)) {
      this._router.navigate(['/']);
      this.abrirSnackBar("Nenhum Baralho selecionado!", "ERRO");
    }
    this.detalhe = new DetalhesModel(baralho);
  }

  abrirSnackBar(mensagem: string, acao: string) {
    this._snackBar.open(mensagem, acao, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
