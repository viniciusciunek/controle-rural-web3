import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProdutosComponent } from './pages/produtos/produtos.component';

export const routes: Routes = [
  { path: 'produtos', component: ProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
