import Axios from 'axios';
import { Injectable } from '@angular/core';

export interface Despesa {
  id: string;
  nome: string;
  descricao: string;
  valor_total: number;
  data: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})

export class DespesasService {
  constructor() { }

  async listarDespesas(): Promise<Despesa[]> {
    try {
      console.log('Buscando Despesas...')

      const response = await Axios.get('http://localhost:3000/despesas');

      return response.data
    } catch (error) {
      console.error("Erro: " + error);

      return [];
    }
  }

  async obterDespesa(id: string): Promise<Despesa | undefined> {
    try {
      const response = await Axios.get(`http://localhost:3000/despesas/${id}`);

      return response.data;
    } catch (error) {
      console.error(error)

      return undefined;
    }
  }

  async criarDespesa(despesa: Despesa): Promise<Despesa | undefined | null> {
    try {
      const novoId = (await this.listarDespesas()).length + 1

      despesa.id = novoId.toString();

      const despesaNova = await Axios.post('http://localhost:3000/despesas', despesa);

      return despesaNova.data;
    } catch (error) {
      console.log(error)

      return null;
    }
  }

  // async atualizarDespesa(Despesa: Despesa): Promise<boolean> {
  //   try {
  //     await Axios.put(`http://localhost:3000/despesas/${Despesa.id}`, Despesa);

  //     return true;
  //   } catch (error) {
  //     console.log(error)

  //     return false;
  //   }
  // }

  async deletarDespesa(id: string): Promise<void> {
    try {
      await Axios.delete(`http://localhost:3000/despesas/${id}`);
    } catch (error) {
      console.error(error);
    }
  }
}
