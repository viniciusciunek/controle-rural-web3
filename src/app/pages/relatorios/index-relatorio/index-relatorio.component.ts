import { Component, OnInit } from '@angular/core';
import { Despesa, DespesasService } from '../../../services/despesas.service';

import { CategoriasService } from '../../../services/categorias.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-index-relatorio',
  templateUrl: './index-relatorio.component.html',
  styleUrls: ['./index-relatorio.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class IndexRelatorioComponent implements OnInit {
  totalDespesas = 0;
  despesasPorCategoria: any[] = [];
  totalProdutosCadastrados = 0;
  mediaPrecoProdutos = 0;
  despesasMensais: any[] = [];
  carregando = true;

  constructor(
    private despesasService: DespesasService,
    private categoriasService: CategoriasService,
    private produtosService: ProdutosService
  ) { }

  async ngOnInit() {
    try {
      const [despesas, categorias, produtos] = await Promise.all([
        this.despesasService.listarDespesas(),
        this.categoriasService.listarCategorias(),
        this.produtosService.listarProdutos()
      ]);

      this.carregarRelatorios(despesas, categorias, produtos);

    } catch (error) {
      console.error('Erro ao carregar relatórios:', error);
      alert('Erro ao carregar dados dos relatórios');
    } finally {
      this.carregando = false;
    }
  }

  private carregarRelatorios(despesas: any[], categorias: any[], produtos: any[]) {
    this.totalDespesas = despesas.reduce((total, atual) => total + atual.valor_total, 0);

    this.despesasPorCategoria = categorias.map(categoria => ({
      nome: categoria.nome,
      total: despesas
        .filter(d => d.categoria === categoria.nome)
        .reduce((acc, curr) => acc + curr.valor_total, 0)
    }));

    this.totalProdutosCadastrados = produtos.length;
    this.mediaPrecoProdutos = produtos.length > 0
      ? produtos.reduce((acc, curr) => acc + curr.preco, 0) / produtos.length
      : 0;

    const meses = Array.from({ length: 6 }, (_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      return date;
    }).reverse();

    this.despesasMensais = meses.map(data => {
      const mes = data.toLocaleString('pt-BR', { month: 'long' });
      const total = despesas
        .filter(d => {
          const dataDespesa = new Date(d.data);
          return dataDespesa.getMonth() === data.getMonth() &&
            dataDespesa.getFullYear() === data.getFullYear();
        })
        .reduce((acc, curr) => acc + curr.valor_total, 0);

      return { mes: mes.charAt(0).toUpperCase() + mes.slice(1), total };
    });
  }
}
