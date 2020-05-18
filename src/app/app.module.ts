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

@NgModule({
  declarations: [
    AppComponent,
    ListaCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule
  ],

  providers: [
    PokemonTcgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
