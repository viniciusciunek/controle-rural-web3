import { Injectable } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  quantidade: number;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {
  private produtos: Produto[] = [
    { id: 1, nome: 'Produto 1', quantidade: 1, valor: 100 },
    { id: 2, nome: 'Produto 2', quantidade: 2, valor: 200 },
    { id: 3, nome: 'Produto 3', quantidade: 3, valor: 300 },
    { id: 4, nome: 'Produto 4', quantidade: 4, valor: 400 },
    { id: 5, nome: 'Produto 5', quantidade: 5, valor: 500 },
    { id: 6, nome: 'Produto 6', quantidade: 6, valor: 600 },
    { id: 7, nome: 'Produto 7', quantidade: 7, valor: 700 },
    { id: 8, nome: 'Produto 8', quantidade: 8, valor: 800 },
    { id: 9, nome: 'Produto 9', quantidade: 9, valor: 900 },
    { id: 10, nome: 'Produto 10', quantidade: 10, valor: 1000 }
  ]

  constructor() { }

  listarProdutos(): Produto[] {
    return this.produtos;
  }

  obterProduto(id: number): Produto | undefined {
    return this.produtos.find(produto => produto.id === id);
  }

  criarProduto(produto: Produto): void {
    const novoId = this.produtos.length > 0
      ? Math.max(...this.produtos.map(p => p.id)) + 1
      : 1;
    produto.id = novoId;
    this.produtos.push(produto);
  }

  atualizarProduto(produto: Produto): void {
    const index = this.produtos.findIndex(p => p.id === produto.id);

    if (index !== -1) {
      this.produtos[index] = produto;
    }
  }

  deletarProduto(id: number): void {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }

}
