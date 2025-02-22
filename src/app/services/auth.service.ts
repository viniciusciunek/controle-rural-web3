// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = 'http://localhost:3000/usuarios';


  async registerUser(userData: {
    nome: string;
    email: string;
    senha: string;
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  }): Promise<any> {
    try {
      // Verifica se o e-mail já está cadastrado
      const { data: usuarios } = await axios.get(`${this.apiURL}?email=${userData.email}`);
      if (usuarios.length > 0) {
        throw new Error('E-mail já cadastrado!');
      }

      const response = await axios.post(this.apiURL, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }


  async loginUser(email: string, senha: string): Promise<any> {
    try {
      const { data: usuarios } = await axios.get(`${this.apiURL}?email=${email}`);
      if (usuarios.length === 0) {
        throw new Error('Usuário não encontrado!');
      }

      const usuario = usuarios[0];
      if (usuario.senha !== senha) {
        throw new Error('Senha incorreta!');
      }

      return usuario;
    } catch (error) {
      throw error;
    }
  }
}
