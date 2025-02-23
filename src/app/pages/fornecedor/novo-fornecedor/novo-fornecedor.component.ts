import { Fornecedor, FornecedorService } from '../../../services/fornecedor.service';
import Axios from 'axios';
import { Component } from '@angular/core';
import { ErrorButtonComponent } from '../../../components/error-button/error-button.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SuccessButtonComponent } from '../../../components/success-button/success-button.component';

@Component({
  selector: 'app-novo-fornecedor',
  imports: [FormsModule, SuccessButtonComponent, ErrorButtonComponent],
  templateUrl: './novo-fornecedor.component.html',
  styleUrls: ['./novo-fornecedor.component.css']
})
export class NovoFornecedorComponent {
  fornecedorForm: Fornecedor = { id: '', nome: '', cnpj: 0, telefone: '' };
  labelSuccess = "SALVAR";
  labelError = "CANCELAR";

  constructor(private fornecedorService: FornecedorService, private router: Router) { }

  async salvarFornecedor(): Promise<void> {
    if (this.fornecedorForm.telefone === '' || this.fornecedorForm.nome === '' || this.fornecedorForm.cnpj === 0) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      await this.fornecedorService.criarFornecedor({ ...this.fornecedorForm });

      alert('Fornecedor cadastrado com sucesso!');

      this.limparFormulario();

      this.router.navigate(['/fornecedor']);
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar fornecedor!');
    }
  }

  limparFormulario(): void {
    this.fornecedorForm = { id: '', nome: '', cnpj: 0, telefone: '' };
    this.router.navigate(['/fornecedor']);
  }
}
