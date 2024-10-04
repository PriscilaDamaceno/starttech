import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa o FormsModule
import { Produto } from '../models/produto.models';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos-form',
  standalone: true,
  imports: [FormsModule],// FormsModule aqui
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {
  produto: Produto = {
    id: 0,
    nome: '',
    quantidade: 0,
    preco: 0
  };

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verifica se há um ID na rota para edição
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const produtoId = Number(id);
      const produtoExistente = this.produtoService.getProdutoById(produtoId);
      if (produtoExistente) {
        this.produto = { ...produtoExistente };
      }
    }
  }

  // Adicione o método salvarProduto()
  salvarProduto(): void {
    if (this.produto.id === 0) {
      // Novo produto
      const novoId = this.produtoService.getProdutos().length + 1;
      this.produto.id = novoId;
      this.produtoService.addProduto(this.produto);
    } else {
      // Editar produto existente
      this.produtoService.updateProduto(this.produto);
    }
    this.router.navigate(['/produtos-lista']);
  }
}
