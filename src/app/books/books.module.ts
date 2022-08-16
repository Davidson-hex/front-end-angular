import { HeadersModule } from './../components/headers/headers.module';
import { MessageModule } from './../shared/message/message.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ModalDetailsComponent } from './book-details/modal-details/modal-details.component';
import { NewBookComponent } from './new-book/new-book.component';
import { HistoricComponent } from './historic/historic.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookComponent,
    BookDetailsComponent,
    ModalDetailsComponent,
    NewBookComponent,
    HistoricComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    HeadersModule,
  ],
  exports: [BookListComponent],
  entryComponents: [ModalDetailsComponent],
})
export class BooksModule {}
