import Axios from 'axios';
import { Injectable } from '@angular/core';
import { __classPrivateFieldGet } from 'tslib';

export interface Fornecedor {
  id: string;
  nome: string;
  cnpj: number;
  telefone: string;
}

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  constructor() { }

  async listarFornecedor(): Promise<Fornecedor[]> {
    try {
      console.log('Buscando fornecedores...');
      const response = await Axios.get('http://localhost:3000/fornecedor');
      return response.data;
    } catch (error) {
      console.error("Erro: " + error);
      return [];
    }
  }

  async obterFornecedor(id: string): Promise<Fornecedor | undefined> {
    try {
      const response = await Axios.get(`http://localhost:3000/fornecedor/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async criarFornecedor(fornecedor: Fornecedor): Promise<boolean> {
    try {
      const novoId = (await this.listarFornecedor()).length + 1;
      fornecedor.id = novoId.toString();
      await Axios.post('http://localhost:3000/fornecedor', fornecedor);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async atualizarFornecedor(fornecedor: Fornecedor): Promise<boolean> {
    try {
      await Axios.put(`http://localhost:3000/fornecedor/${fornecedor.id}`, fornecedor);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deletarFornecedor(id: string): Promise<void> {
    try {
      await Axios.delete(`http://localhost:3000/fornecedor/${id}`);
    } catch (error) {
      console.error(error);
    }
  }
}
