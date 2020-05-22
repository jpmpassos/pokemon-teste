import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonTcgService } from './server/pokemon-tcg.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaCardsComponent } from './page/lista-cards/lista-cards.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardPokemonComponent } from './component/card-pokemon/card-pokemon.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { BaralhoPageComponent } from './page/baralho-page/baralho-page.component';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { SalvarBaralhoDialog } from './page/dialog/salvar-baralho/salvar-baralho.dialog';
import { ListaBaralhosComponent } from './page/lista-baralhos/lista-baralhos.component';
import { CardBaralhoComponent } from './component/card-baralho/card-baralho.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MensagensSnackComponent } from './page/snack/mensagens.snack';
import { ConfirmacaoDialogComponent } from './page/dialog/confirmacao-dialog/confirmacao-dialog.component';
import { DetalhesBaralhoComponent } from './page/detalhes-baralho/detalhes-baralho.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCardsComponent,
    CardPokemonComponent,
    BaralhoPageComponent,
    SalvarBaralhoDialog,
    ListaBaralhosComponent,
    CardBaralhoComponent,
    MensagensSnackComponent,
    ConfirmacaoDialogComponent,
    DetalhesBaralhoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  entryComponents: [
    SalvarBaralhoDialog,
    ConfirmacaoDialogComponent,
    MensagensSnackComponent
  ],
  providers: [
    PokemonTcgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
