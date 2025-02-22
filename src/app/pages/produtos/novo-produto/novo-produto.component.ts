import { Produto, ProdutosService } from '../../../services/produtos.service';

import Axios from 'axios';
import { Component } from '@angular/core';
import { ErrorButtonComponent } from '../../../components/error-button/error-button.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SuccessButtonComponent } from '../../../components/success-button/success-button.component';

@Component({
  selector: 'app-novo-produto',
  imports: [FormsModule, SuccessButtonComponent, ErrorButtonComponent],
  templateUrl: './novo-produto.component.html',
  styleUrl: './novo-produto.component.css'
})

export class NovoProdutoComponent {
  produtoForm: Produto = { id: '', nome: '', preco: 0, marca: '' };
  labelSuccess = "SALVAR"
  labelError = "CANCELAR"

  constructor(private produtosService: ProdutosService, private router: Router) { }

  async salvarProduto(): Promise<void> {
    if (this.produtoForm.marca === '' || this.produtoForm.nome === '' || this.produtoForm.preco === 0) {
      alert('Preencha todos os campos!  ');
      return;
    }

    try {
      await this.produtosService.criarProduto({ ...this.produtoForm });

      alert('Produto cadastrado com sucesso!');

      this.limparFormulario();

      this.router.navigate(['/produtos']);
    } catch (error) {
      console.error(error);

      alert('Erro ao cadastrar produto!');
    }
  }

  limparFormulario(): void {
    this.produtoForm = { id: '', nome: '', preco: 0, marca: '' };

    this.router.navigate(['/produtos']);
  }
}
