// src/app/pages/register/register.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: [],
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],

      cep: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{5}-\d{3}$/),
          Validators.minLength(9),
          Validators.maxLength(9)
        ]
      ],
      rua: [''],
      bairro: [''],
      localidade: [''],
      uf: ['']
    });
  }

  formatCep(event: any): void {
    let value: string = event.target.value;
    value = value.replace(/\D/g, '');
    value = value.slice(0, 8);
    if (value.length > 5) {
      value = value.replace(/(\d{5})(\d+)/, '$1-$2');
    }
    this.registerForm.get('cep')?.setValue(value, { emitEvent: false });
  }


  async buscarCep() {
    const cep = this.registerForm.get('cep')?.value;
    const cepNumerico = cep.replace('-', '');
    if (cepNumerico && cepNumerico.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cepNumerico}/json/`);
        if (response.data.erro) {
          this.errorMessage = 'CEP não encontrado!';
        } else {
          this.registerForm.patchValue({
            rua: response.data.logradouro,
            bairro: response.data.bairro,
            localidade: response.data.localidade,
            uf: response.data.uf,
          });
          this.errorMessage = '';
        }
      } catch (error) {
        this.errorMessage = 'Erro ao buscar CEP!';
      }
    }
  }


  async onSubmit() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Preencha todos os campos corretamente.';
      return;
    }

    try {
      const novoUsuario = await this.authService.registerUser(this.registerForm.value);
      this.successMessage = `Usuário ${novoUsuario.nome} cadastrado com sucesso!`;
      this.registerForm.reset();
      this.errorMessage = '';
    } catch (error: any) {
      this.errorMessage = error.message || 'Erro ao cadastrar usuário.';
    }
  }

  isInvalid(field: string): boolean {
    const control = this.registerForm.get(field);
    return !!(control && control.invalid && control.touched);
  }
}