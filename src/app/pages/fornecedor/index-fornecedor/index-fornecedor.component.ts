import { Component, OnInit } from '@angular/core';
import { Fornecedor, FornecedorService } from '../../../services/fornecedor.service';
import { Router, RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { SuccessButtonComponent } from '../../../components/success-button/success-button.component';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './index-fornecedor.component.html',
  styleUrls: ['./index-fornecedor.component.css'],
  imports: [CommonModule, RouterLink, SuccessButtonComponent]
})
export class IndexFornecedorComponent implements OnInit {
  fornecedor: Fornecedor[] = [];
  label: string = '+ NOVO FORNECEDOR';

  constructor(private fornecedorService: FornecedorService, private router: Router) { }

  ngOnInit(): void {
    this.listarFornecedor();
  }

  async listarFornecedor(): Promise<Fornecedor[]> {
    try {
      const response = await this.fornecedorService.listarFornecedor();
      this.fornecedor = response;
      return this.fornecedor;
    } catch (error) {
      console.error("Erro: " + error);
      return [];
    }
  }

  async excluirFornecedor(id: string): Promise<void> {
    try {
      const confirmacao = confirm('Deseja realmente excluir este fornecedor?');

      if (!confirmacao) {
        return;
      }

      await this.fornecedorService.deletarFornecedor(id.toString());
      await this.listarFornecedor();
    } catch (error) {
      console.error(error);
      alert('Erro ao excluir fornecedor!');
    }
  }
}
