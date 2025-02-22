import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto, ProdutosService } from '../../../services/produtos.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-produto',
  imports: [FormsModule],
  templateUrl: './editar-produto.component.html',
  styleUrl: './editar-produto.component.css'
})

export class EditarProdutoComponent implements OnInit {
  produtoForm: Produto = { id: 0, nome: '', preco: 0, marca: '' };
  idProduto: number = 0;

  constructor(private route: ActivatedRoute, private produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
    this.idProduto = Number(this.route.snapshot.paramMap.get('id'));

    this.inicializarFormulario()
  }

  async inicializarFormulario(): Promise<void> {
    try {
      const produto = await this.produtosService.obterProduto(this.idProduto)

      if (produto) {
        this.produtoForm = produto;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async salvarProduto(): Promise<void> {
    if (this.produtoForm.marca === '' || this.produtoForm.nome === '' || this.produtoForm.preco === 0) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      await this.produtosService.atualizarProduto({ ...this.produtoForm });

      alert('Produto atualizado com sucesso!');

      this.limparFormulario();

      this.router.navigate(['/produtos']);
    } catch (error) {
      console.error(error);

      alert('Erro ao atualizar produto!');
    }
  }

  limparFormulario(): void {
    this.produtoForm = { id: 0, nome: '', preco: 0, marca: '' };

    this.router.navigate(['/produtos']);
  }
}
