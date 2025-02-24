import { ActivatedRoute, Router } from '@angular/router';
import { Produto, ProdutosService } from '../../../services/produtos.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RealPipe } from '../../../real.pipe';

@Component({
  selector: 'app-visualizar-produto',
  imports: [FormsModule, RealPipe],
  templateUrl: './visualizar-produto.component.html',
  styleUrl: './visualizar-produto.component.css'
})
export class VisualizarProdutoComponent {
  produto: Produto = { id: '', nome: '', preco: 0, marca: '' };

  idProduto: number = 0;

  constructor(private produtosService: ProdutosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idProduto = Number(this.route.snapshot.paramMap.get('id'));

    this.buscarProduto(this.idProduto.toString());
  }

  async buscarProduto(id: string): Promise<Produto | null> {
    try {
      const produto = await this.produtosService.obterProduto(id)

      if (produto) {
        this.produto = produto;
        return this.produto;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Erro: " + error);

      return null;
    }
  }
}
