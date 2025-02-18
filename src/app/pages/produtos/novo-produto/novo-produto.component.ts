import { Produto, ProdutosService } from '../../../services/produtos.service';

import Axios from 'axios';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-produto',
  imports: [FormsModule],
  templateUrl: './novo-produto.component.html',
  styleUrl: './novo-produto.component.css'
})

export class NovoProdutoComponent {
  produtos: Produto[] = [];
  produtoForm: Produto = { id: 0, nome: '', preco: 0, marca: '' };
  editMode: boolean = false;

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  async listarProdutos(): Promise<Produto[]> {
    try {
      console.log('Buscando produtos...')

      const response = await Axios.get('http://localhost:3000/produtos');

      console.log("Setando produtos...")

      this.produtos = response.data;

      console.log("Pronto!")

      return this.produtos;
    } catch (error) {
      console.error("Erro: " + error);

      return []
    }
  }

  salvarProduto(): void {
    if (this.produtoForm.marca === '' || this.produtoForm.nome === '' || this.produtoForm.preco === 0) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      this.produtosService.criarProduto({ ...this.produtoForm });

      alert('Produto cadastrado com sucesso!');

      this.limparFormulario();

      this.listarProdutos();

      this.router.navigate(['/produtos']);
    } catch (error) {
      alert('Erro ao cadastrar produto!');
    }

  }

  // editar(prod: Produto): void {
  //   this.editMode = true;
  //   this.produtoForm = { ...prod };
  // }

  // deletar(id: number): void {
  //   this.produtosService.deletarProduto(id);
  //   this.listarProdutos();
  // }

  limparFormulario(): void {
    this.produtoForm = { id: 0, nome: '', preco: 0, marca: '' };
  }
}
