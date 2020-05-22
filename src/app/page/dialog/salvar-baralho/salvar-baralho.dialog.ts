import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaralhoModel } from 'src/app/model/baralho.model';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'salvar-baralho-dialog',
    templateUrl: 'salvar-baralho-dialog.html',
})
export class SalvarBaralhoDialog {

    isEsditando = false;

    constructor(
        public dialogRef: MatDialogRef<SalvarBaralhoDialog>,
        @Inject(MAT_DIALOG_DATA) public baralho: BaralhoModel
    ) {
        console.log(baralho);
        
    }

    fechar(): void {
        this.dialogRef.close();
    }

    salvar(): void {
        this.dialogRef.close(this.baralho);
    }

}