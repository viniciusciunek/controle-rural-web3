import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Despesa, DespesasService } from '../../../services/despesas.service';
import { DespesaProduto, DespesasProdutosService } from '../../../services/despesas-produtos.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-visualizar-despesa',
  imports: [FormsModule, CommonModule],
  templateUrl: './visualizar-despesa.component.html',
  styleUrl: './visualizar-despesa.component.css'
})

export class VisualizarDespesaComponent {
  despesa: Despesa = { id: '', nome: '', descricao: '', valor_total: 0, data: '', categoria: '', };
  despesaProdutos: DespesaProduto[] = [];

  idDespesa = '';
  produtoNomes: { [key: string]: string } = {};


  constructor(private despesasService: DespesasService, private despesasProdutosService: DespesasProdutosService, private router: Router, private route: ActivatedRoute, private produtosService: ProdutosService) { }


  ngOnInit(): void {
    this.idDespesa = this.route.snapshot.paramMap.get('id') || '';

    this.buscarDespesa(this.idDespesa);
    this.listarDespesaProdutos(this.idDespesa);
  }

  async buscarDespesa(id: string): Promise<Despesa | null> {
    try {
      const despesa = await this.despesasService.obterDespesa(id)

      if (despesa) {
        this.despesa = despesa;
        return this.despesa;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Erro: " + error);

      return null;
    }
  }

  async listarDespesaProdutos(id: string): Promise<void> {
    try {
      this.despesaProdutos = await this.despesasProdutosService.listarDespesasProdutosPorDespesa(id);

      await Promise.all(this.despesaProdutos.map(async (p) => {
        const produto = await this.produtosService.obterProduto(p.produto_id);
        this.produtoNomes[p.produto_id] = produto?.nome || 'Produto não encontrado';
      }));
    } catch (error) {
      console.error("Erro: ", error);
    }
  }

  async obterNomeProduto(produtoId: string): Promise<string> {
    const produto = await this.produtosService.obterProduto(produtoId);

    return produto?.nome || '';
  }
}
