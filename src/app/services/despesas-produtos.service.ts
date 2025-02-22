import Axios from 'axios';
import { Injectable } from '@angular/core';

export interface DespesaProduto {
  id: string;
  despesa_id: string;
  produto_id: string;
  quantidade: number;
  valor_unitario: number;
  valor_total: number;
}

@Injectable({
  providedIn: 'root'
})
export class DespesasProdutosService {
  constructor() { }

  async listarDespesasProdutos(): Promise<DespesaProduto[]> {
    try {
      const response = await Axios.get('http://localhost:3000/despesas_produtos');

      return response.data
    } catch (error) {
      console.error("Erro: " + error);

      return [];
    }
  }

  async listarDespesasProdutosPorDespesa(despesaId: string): Promise<DespesaProduto[]> {
    try {
      const response = await Axios.get(`http://localhost:3000/despesas_produtos?despesa_id=${despesaId}`);

      return response.data
    }
    catch (error) {
      console.error("Erro: " + error);

      return [];
    }
  }

  async criarDespesaProduto(despesaProduto: DespesaProduto): Promise<boolean> {
    try {
      const novoId = (await this.listarDespesasProdutos()).length + 1

      despesaProduto.id = novoId.toString();

      await Axios.post('http://localhost:3000/despesas_produtos', despesaProduto);

      return true;
    } catch (error) {
      console.log(error)

      return false;
    }
  }

  async deletarDespesaProduto(id: string): Promise<void> {
    try {
      await Axios.delete(`http://localhost:3000/despesas_produtos/${id}`);
    } catch (error) {
      console.error(error);
    }
  }
}
