import { Routes } from '@angular/router';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'produtos-lista', pathMatch: 'full' },
  { path: 'produtos-lista', component: ProdutosListaComponent },
  { path: 'produtos-form', component: ProdutosFormComponent },
  { path: 'produtos-form/:id', component: ProdutosFormComponent } // Rota para edição
];

