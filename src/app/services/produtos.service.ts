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

  async obterProduto(id: number): Promise<Produto | undefined> {
    try {
      const response = await Axios.get(`http://localhost:3000/produtos/${id}`);

      return response.data;
    } catch (error) {
      console.error(error)

      return undefined;
    }
  }

  async criarProduto(produto: Produto): Promise<boolean> {
    try {
      const novoId = (await this.listarProdutos()).length + 1

      produto.id = novoId;

      await Axios.post('http://localhost:3000/produtos', produto);

      return true;
    } catch (error) {
      console.log(error)

      return false;
    }
  }

  async atualizarProduto(produto: Produto): Promise<boolean> {
    try {
      await Axios.put(`http://localhost:3000/produtos/${produto.id}`, produto);

      return true;
    } catch (error) {
      console.log(error)

      return false;
    }
  }

  async deletarProduto(id: number): Promise<void> {
    try {
      await Axios.delete(`http://localhost:3000/produtos/${id}`);
    } catch (error) {
      console.error(error);
    }
  }
}
