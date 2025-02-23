import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Fornecedor, FornecedorService } from '../../../services/fornecedor.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-fornecedor',
  imports: [FormsModule],
  templateUrl: './editar-fornecedor.component.html',
  styleUrls: ['./editar-fornecedor.component.css']
})
export class EditarFornecedorComponent implements OnInit {
  fornecedorForm: Fornecedor = { id: '', nome: '', cnpj: 0, telefone: '' };
  idFornecedor: number = 0;

  constructor(
    private route: ActivatedRoute,
    private fornecedorService: FornecedorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idFornecedor = Number(this.route.snapshot.paramMap.get('id'));
    this.inicializarFormulario();
  }

  async inicializarFormulario(): Promise<void> {
    try {
      const fornecedor = await this.fornecedorService.obterFornecedor(this.idFornecedor.toString());
      if (fornecedor) {
        this.fornecedorForm = fornecedor;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async salvarFornecedor(): Promise<void> {
    if (this.fornecedorForm.telefone === '' || this.fornecedorForm.nome === '' || this.fornecedorForm.cnpj === 0) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      await this.fornecedorService.atualizarFornecedor({ ...this.fornecedorForm });
      alert('Fornecedor atualizado com sucesso!');
      this.limparFormulario();
      this.router.navigate(['/fornecedores']);
    } catch (error) {
      console.error(error);
      alert('Erro ao atualizar fornecedor!');
    }
  }

  limparFormulario(): void {
    this.fornecedorForm = { id: '', nome: '', cnpj: 0, telefone: '' };
    this.router.navigate(['/fornecedores']);
  }
}
