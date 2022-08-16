import { HistoricComponent } from './historic/historic.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'listadelivros',
    component: BookListComponent,
  },
  {
    path: 'novolivro',
    component: NewBookComponent,
  },
  {
    path: 'movimentacao',
    component: HistoricComponent,
  },
  {
    path: ':bookId',
    component: BookDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
