import { Component, OnInit } from '@angular/core';
import { Produto, ProdutosService } from '../../../services/produtos.service';
import { Router, RouterLink } from '@angular/router';

import Axios from 'axios';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuccessButtonComponent } from '../../../components/success-button/success-button.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  imports: [FormsModule, CommonModule, RouterLink, SuccessButtonComponent]
})

export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  produtoForm: Produto = { id: 0, nome: '', preco: 0, marca: '' };
  editMode: boolean = false;
  label: string = '+ NOVO PRODUTO';

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  async listarProdutos(): Promise<Produto[]> {
    try {
      const response = await this.produtosService.listarProdutos()

      this.produtos = response;

      return this.produtos;
    } catch (error) {
      console.error("Erro: " + error);

      return []
    }
  }

  async excluirProduto(id: number): Promise<void> {
    try {
      const confirmacao = confirm('Deseja realmente excluir este produto?');

      if (!confirmacao) {
        return;
      }

      await this.produtosService.deletarProduto(id);

      await this.listarProdutos();
    } catch (error) {
      console.error(error);
      alert('Erro ao excluir produto!');
    }
  }
}
