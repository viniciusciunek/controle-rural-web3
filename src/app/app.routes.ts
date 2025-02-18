import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { NovoProdutoComponent } from './pages/produtos/novo-produto/novo-produto.component';
import { ProdutosComponent } from './pages/produtos/index-produto/produtos.component';

export const routes: Routes = [
  { path: 'produtos', component: ProdutosComponent },
  {
    path: 'produtos', children: [
      { path: 'novo', component: NovoProdutoComponent }
    ]
  }

  // { path: 'despesas', component: IndexComponent },
  // {
  //   path: 'despesas', children: [
  //     { path: 'criar', component: CreateComponent },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
