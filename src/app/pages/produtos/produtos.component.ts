import { Component, OnInit } from '@angular/core';
import { Produto, ProdutosService } from './../../services/produtos.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  imports: [
    FormsModule, CommonModule
  ]
})

export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];
  produtoForm: Produto = { id: 0, nome: '', quantidade: 0, valor: 0 };
  editMode: boolean = false;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.produtos = this.produtosService.listarProdutos()
  }

  salvarProduto(): void {
    if (this.editMode) {
      this.produtosService.atualizarProduto(this.produtoForm);
    } else {
      this.produtosService.criarProduto({ ...this.produtoForm });
    }
    this.limparFormulario();
    this.listarProdutos();
  }

  editar(prod: Produto): void {
    this.editMode = true;
    this.produtoForm = { ...prod };
  }

  deletar(id: number): void {
    this.produtosService.deletarProduto(id);
    this.listarProdutos();
  }

  limparFormulario(): void {
    this.produtoForm = { id: 0, nome: '', quantidade: 0, valor: 0 };
    this.editMode = false;
  }
}
