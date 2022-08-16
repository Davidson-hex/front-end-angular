import { Historics } from './historic/historic';
import { ModalDetailsComponent } from './book-details/modal-details/modal-details.component';
import { Book, Books } from './books';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  bsModalRef?: BsModalRef;

  constructor(
    private http: HttpClient,
    private modalSerivice: BsModalService
  ) {}

  getBooks(): Observable<Books> {
    return this.http.get<Books>(`${API}/livros`);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${API}/livros/${id}`);
  }

  showAlert(bookId: number) {
    const bsModalRef: BsModalRef = this.modalSerivice.show(
      ModalDetailsComponent
    );
    bsModalRef.content.bookId = bookId;
  }

  rentBook(id: any, previsao_devolucao: any): Observable<any> {
    return this.http.post<any>(`${API}/livros/locar/${id}`, {
      previsao_devolucao,
    });
  }

  inactivateBook(id: any) {
    return this.http.post(`${API}/livros/inativar/${id}`, {});
  }

  activateBook(id: any) {
    return this.http.post(`${API}/livros/ativar/${id}`, {});
  }

  addBook(autor: string, titulo: string) {
    return this.http.post(`${API}/livros`, { autor, titulo });
  }

  getHistoric(idUser: any): Observable<Historics> {
    return this.http.get<Historics>(`${API}/livros/historico/${idUser}`);
  }
}
