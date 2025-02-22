import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EditarProdutoComponent } from './pages/produtos/editar-produto/editar-produto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { NovoProdutoComponent } from './pages/produtos/novo-produto/novo-produto.component';
import {LoginComponent} from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component'; 
import { ProdutosComponent } from './pages/produtos/index-produto/produtos.component';
import { VisualizarProdutoComponent } from './pages/produtos/visualizar-produto/visualizar-produto.component';

export const routes: Routes = [
  { path: 'produtos', component: ProdutosComponent },
  {
    path: 'produtos', children: [
      { path: 'novo', component: NovoProdutoComponent },
      { path: 'editar/:id', component: EditarProdutoComponent },
      { path: 'visualizar/:id', component: VisualizarProdutoComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
  // { path: 'despesas', component: IndexComponent },
  // {
  //   path: 'despesas', children: [
  //     { path: 'criar', component: CreateComponent },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, HttpClientModule ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
