import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ProdutosComponent } from './pages/produtos/index-produto/produtos.component';

export const routes: Routes = [
  { path: 'produtos', component: ProdutosComponent },

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
