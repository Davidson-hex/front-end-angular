import { TokenService } from './../../authentication/token.service';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rent } from './book';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient, private token: TokenService) {}

  returnBook(idUser: number): Observable<Rent> {
    return this.http.get<Rent>(`${API}/livros/usuario/livro/${idUser}`);
  }

  finForId(idUser: number): Observable<boolean> {
    return this.http.get<boolean>(`${API}/livros/rent/user/${idUser}`);
  }

  returnBookId(id: number): Observable<any> {
    return this.http.get(`${API}/livros/devolver/${id}`);
  }
}
