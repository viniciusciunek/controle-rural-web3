import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { EditarProdutoComponent } from './pages/produtos/editar-produto/editar-produto.component';
import { IndexDespesaComponent } from './pages/despesas/index-despesa/index-despesa.component';
import { NgModule } from '@angular/core';
import { NovaDespesaComponent } from './pages/despesas/nova-despesa/nova-despesa.component';
import { NovoProdutoComponent } from './pages/produtos/novo-produto/novo-produto.component';
import { ProdutosComponent } from './pages/produtos/index-produto/produtos.component';
import { VisualizarDespesaComponent } from './pages/despesas/visualizar-despesa/visualizar-despesa.component';
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

  { path: 'despesas', component: IndexDespesaComponent },
  {
    path: 'despesas', children: [
      { path: 'nova', component: NovaDespesaComponent },
      { path: 'visualizar/:id', component: VisualizarDespesaComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
