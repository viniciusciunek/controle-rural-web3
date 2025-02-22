import Axios from 'axios';
import { Injectable } from '@angular/core';

export interface Categoria {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})

export class CategoriasService {

  constructor() { }

  async listarCategorias(): Promise<Categoria[]> {
    try {
      console.log('Buscando Categoria...')

      const response = await Axios.get('http://localhost:3000/categorias');

      return response.data
    } catch (error) {
      console.error("Erro: " + error);

      return [];
    }
  }
}
