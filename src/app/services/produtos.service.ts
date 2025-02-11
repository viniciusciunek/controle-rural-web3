import Axios from 'axios';
import { Injectable } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  marca: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {
  constructor() { }

  async listarProdutos(): Promise<Produto[]> {
    try {
      console.log('Buscando produtos...')

      const response = await Axios.get('http://localhost:3000/produtos');

      return response.data
    } catch (error) {
      console.error("Erro: " + error);

      return [];
    }
  }

  // obterProduto(id: number): Produto | undefined {
  //   return this.produtos.find(produto => produto.id === id);
  // }

  // criarProduto(produto: Produto): void {
  //   const novoId = this.produtos.length > 0
  //     ? Math.max(...this.produtos.map(p => p.id)) + 1
  //     : 1;
  //   produto.id = novoId;
  //   this.produtos.push(produto);
  // }

  // atualizarProduto(produto: Produto): void {
  //   const index = this.produtos.findIndex(p => p.id === produto.id);

  //   if (index !== -1) {
  //     this.produtos[index] = produto;
  //   }
  // }

  // deletarProduto(id: number): void {
  //   this.produtos = this.produtos.filter(p => p.id !== id);
  // }
}
