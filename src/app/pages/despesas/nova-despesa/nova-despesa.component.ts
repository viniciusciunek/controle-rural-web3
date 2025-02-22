import { Categoria, CategoriasService } from '../../../services/categorias.service';
import { Component, OnInit } from '@angular/core';
import { Despesa, DespesasService } from '../../../services/despesas.service';
import { Produto, ProdutosService } from '../../../services/produtos.service';

import { CommonModule } from '@angular/common';
import { DespesasProdutosService } from '../../../services/despesas-produtos.service';
import { ErrorButtonComponent } from '../../../components/error-button/error-button.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SuccessButtonComponent } from '../../../components/success-button/success-button.component';

@Component({
  selector: 'app-nova-despesa',
  imports: [FormsModule, SuccessButtonComponent, ErrorButtonComponent, CommonModule],
  templateUrl: './nova-despesa.component.html',
  styleUrl: './nova-despesa.component.css'
})

export class NovaDespesaComponent implements OnInit {
  despesaForm: Despesa = { id: '', nome: '', descricao: '', categoria: '', valor_total: 0.00, data: new Date().toISOString().split('T')[0] };
  produtoForm = { id_produto: '', quantidade: 0, valor_unitario: 0.00 };

  categorias: Categoria[] = [];
  produtos: Produto[] = [];
  produtosAdicionados: any = [];

  labelSuccess: string = "SALVAR"
  labelError: string = "CANCELAR"
  labelAdicionarProduto: string = "+"

  constructor(private despesasService: DespesasService, private router: Router, private categoriaService: CategoriasService, private produtoService: ProdutosService, private despesasProdutosService: DespesasProdutosService) { }

  ngOnInit(): void {
    this.popularDados();
  }

  async popularDados(): Promise<void> {
    this.categorias = await this.categoriaService.listarCategorias();

    this.produtos = await this.produtoService.listarProdutos();
  }

  async salvarDespesa(): Promise<void> {
    console.log(this.despesaForm);

    if (this.despesaForm.nome === '' || this.despesaForm.descricao === '' || this.despesaForm.valor_total === 0 || this.despesaForm.data === '' || this.despesaForm.categoria === '') {
      alert('Preencha todos os campos!  ');
      return;
    } else if (this.produtosAdicionados.length === 0) {
      alert('Adicione ao menos um produto!');
      return;
    }

    try {
      const despesa = await this.despesasService.criarDespesa({ ...this.despesaForm });

      this.produtosAdicionados.forEach((element: any) => {
        this.despesasProdutosService.criarDespesaProduto({
          id: '',
          despesa_id: despesa?.id || '',
          produto_id: element.id_produto,
          quantidade: element.quantidade,
          valor_unitario: element.valor_unitario,
          valor_total: element.valor_total
        });
      });

      alert('Despesa cadastrada com sucesso!');

      this.limparFormulario();
    } catch (error) {
      console.error(error);

      alert('Erro ao cadastrar produto!');
    }
  }

  async adicionarProduto(): Promise<void> {
    if (this.produtoForm.id_produto === '' || this.produtoForm.quantidade === 0 || this.produtoForm.valor_unitario === 0.00 || this.produtoForm.valor_unitario <= 0 || this.produtoForm.quantidade <= 0) {
      alert('Preencha todos os campos, ou verifique as quantidades!');

      return;
    } else if (this.produtosAdicionados.find((produto: any) => produto.id_produto === Number(this.produtoForm.id_produto))) {
      alert('Produto já adicionado!');

      return;
    }

    const produto = await this.produtoService.obterProduto(this.produtoForm.id_produto);

    const data = {
      nome: produto?.nome,
      id_produto: Number(this.produtoForm.id_produto),
      quantidade: this.produtoForm.quantidade,
      valor_unitario: this.produtoForm.valor_unitario,
      valor_total: this.produtoForm.quantidade * this.produtoForm.valor_unitario
    }

    if (!produto) {
      alert('Produto não encontrado!');
      return;
    }

    this.despesaForm.valor_total += data.valor_total;

    this.produtosAdicionados.push(data);

    this.produtoForm = { id_produto: '', quantidade: 0, valor_unitario: 0.00 };
  }

  removerProduto(index: number): void {
    if (index > -1) {
      this.despesaForm.valor_total -= this.produtosAdicionados[index].valor_total;

      this.produtosAdicionados.splice(index, 1);
    }
  }

  limparFormulario(): void {
    this.despesaForm = { id: '', nome: '', descricao: '', valor_total: 0.00, data: '', categoria: '' };

    this.produtoForm = { id_produto: '', quantidade: 0, valor_unitario: 0.00 };

    this.router.navigate(['/despesas']);
  }
}
