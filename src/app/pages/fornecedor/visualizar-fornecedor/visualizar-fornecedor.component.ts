import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor, FornecedorService } from '../../../services/fornecedor.service';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-visualizar-fornecedor',
  imports: [FormsModule],
  templateUrl: './visualizar-fornecedor.component.html',
  styleUrls: ['./visualizar-fornecedor.component.css']
})
export class VisualizarFornecedorComponent {
  fornecedor: Fornecedor = { id: '', nome: '', cnpj: 0, telefone: '' };

  idFornecedor: number = 0;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idFornecedor = Number(this.route.snapshot.paramMap.get('id'));
    this.buscarFornecedor(this.idFornecedor.toString());
  }

  async buscarFornecedor(id: string): Promise<Fornecedor | null> {
    try {
      const fornecedor = await this.fornecedorService.obterFornecedor(id);

      if (fornecedor) {
        this.fornecedor = fornecedor;
        return this.fornecedor;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Erro: " + error);
      return null;
    }
  }
}
