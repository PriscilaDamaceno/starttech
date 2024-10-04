import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.models';
import { ProdutoService } from '../produto.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-produtos-lista',
  imports: [RouterModule,CommonModule],
  standalone: true,
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})

export class ProdutosListaComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtos = this.produtoService.getProdutos();
  }

  deletarProduto(id: number): void {
    this.produtoService.deleteProduto(id);
    this.produtos = this.produtoService.getProdutos(); // Atualiza a lista após exclusão
  }
}
