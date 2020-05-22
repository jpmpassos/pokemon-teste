import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaralhoPageComponent } from './page/baralho-page/baralho-page.component';
import { ListaBaralhosComponent } from './page/lista-baralhos/lista-baralhos.component';
import { DetalhesBaralhoComponent } from './page/detalhes-baralho/detalhes-baralho.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista-baralhos', pathMatch: 'full' },
  { path: 'baralho', component: BaralhoPageComponent },
  { path: 'lista-baralhos', component: ListaBaralhosComponent },
  { path: 'detalhes', component: DetalhesBaralhoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
