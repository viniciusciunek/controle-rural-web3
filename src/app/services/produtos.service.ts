import Axios from 'axios';
import { Injectable } from '@angular/core';
import { __classPrivateFieldGet } from 'tslib';

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

  async criarProduto(produto: Produto): Promise<boolean> {
    try {
      const novoId = (await this.listarProdutos()).length + 1

      produto.id = novoId;

      const response = await Axios.post('http://localhost:3000/produtos', produto);

      return true;
    } catch (error) {
      console.log(error)

      return false;
    }
  }

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
