import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditarProdutoComponent } from './pages/produtos/editar-produto/editar-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexDespesaComponent } from './pages/despesas/index-despesa/index-despesa.component';
import { IndexRelatorioComponent } from './pages/relatorios/index-relatorio/index-relatorio.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { NovaDespesaComponent } from './pages/despesas/nova-despesa/nova-despesa.component';
import { NovoProdutoComponent } from './pages/produtos/novo-produto/novo-produto.component';
import { ProdutosComponent } from './pages/produtos/index-produto/produtos.component';
import { RegisterComponent } from './pages/register/register.component';
import { VisualizarDespesaComponent } from './pages/despesas/visualizar-despesa/visualizar-despesa.component';
import { VisualizarProdutoComponent } from './pages/produtos/visualizar-produto/visualizar-produto.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  { path: 'produtos', component: ProdutosComponent, canActivate: [AuthGuard] },
  {
    path: 'produtos', children: [
      { path: 'novo', component: NovoProdutoComponent, canActivate: [AuthGuard] },
      { path: 'editar/:id', component: EditarProdutoComponent, canActivate: [AuthGuard] },
      { path: 'visualizar/:id', component: VisualizarProdutoComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: 'despesas', component: IndexDespesaComponent, canActivate: [AuthGuard] },
  {
    path: 'despesas', children: [
      { path: 'nova', component: NovaDespesaComponent, canActivate: [AuthGuard] },
      { path: 'visualizar/:id', component: VisualizarDespesaComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: 'relatorios', component: IndexRelatorioComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, HttpClientModule],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
