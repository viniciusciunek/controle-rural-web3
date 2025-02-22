import { Despesa, DespesasService } from '../../../services/despesas.service';
import { Router, RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DespesasProdutosService } from '../../../services/despesas-produtos.service';
import { SuccessButtonComponent } from '../../../components/success-button/success-button.component';

@Component({
  selector: 'app-index-despesa',
  imports: [CommonModule, RouterLink, SuccessButtonComponent],
  templateUrl: './index-despesa.component.html',
  styleUrl: './index-despesa.component.css'
})
export class IndexDespesaComponent {
  despesas: Despesa[] = [];
  label: string = '+ NOVA DESPESA';

  constructor(private despesasService: DespesasService, private router: Router, private despesasProdutosService: DespesasProdutosService) { }

  ngOnInit(): void {
    this.listarDespesas();
  }

  async listarDespesas(): Promise<Despesa[]> {
    try {
      const response = await this.despesasService.listarDespesas()

      this.despesas = response;

      console.log(this.despesas)

      return this.despesas;
    } catch (error) {
      console.error("Erro: " + error);

      return []
    }
  }

  formatarData(data: string): string {
    if (!data) return '';

    const [ano, mes, dia] = data.split('-');

    return `${dia}/${mes}/${ano}`;
  }

  async excluirDespesa(id: string): Promise<void> {
    try {
      const confirmacao = confirm('Deseja realmente excluir esta despesa?');

      if (!confirmacao) return;

      await this.despesasService.deletarDespesa(id)

      const produtosDespesa = await this.despesasProdutosService.listarDespesasProdutosPorDespesa(id);

      produtosDespesa.forEach(async (produtoDespesa) => {
        await this.despesasProdutosService.deletarDespesaProduto(produtoDespesa.id);
      });

      await this.listarDespesas();
    } catch (error) {
      console.error(error);

      alert('Erro ao excluir despesa');
    }
  }
}
