import { AlertModalService } from './../../shared/alert-modal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../authentication/user/user.service';
import { Book } from './../books';
import { Observable, take, switchMap, EMPTY } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, Input } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input() bookId!: number;
  book$!: Observable<Book>;
  userId!: number | undefined;
  rentForm!: FormGroup;

  constructor(
    private booksService: BooksService,
    private activatedRouter: ActivatedRoute,
    private userService: UserService,
    private alert: AlertModalService
  ) {}

  ngOnInit(): void {
    this.bookId = this.activatedRouter.snapshot.params['bookId'];

    this.book$ = this.booksService.getBook(this.bookId);
    this.userService
      .returnUser()
      .subscribe((data) => {
        this.userId = data.id;
      })
      .unsubscribe();
  }

  onRefresh() {
    return (this.book$ = this.booksService.getBook(this.bookId));
  }

  rent() {
    this.booksService.showAlert(this.bookId);
    /*
    const title = 'Previsão de devolução';
    const message = 'Escolha uma data prevista para a devolução do livro';

    const resultModal$ = this.modal.showConfirm(title, message);
    resultModal$
      .asObservable()
      .pipe(
        take(1),
        switchMap(async (result) => (result ? this.testeT() : EMPTY))
      )
      .subscribe((result) => {
        this.testeF();
      });

      */
  }

  inactivate() {
    this.booksService.inactivateBook(this.bookId).subscribe(
      (result) => {
        if (result) {
          this.alert.showAlertSuccess('Livro inativado com sucesso');
          this.onRefresh();
        }
      },
      (error) => {
        this.alert.showAlertDanger(error.error);
      }
    );
  }

  activate() {
    this.booksService.activateBook(this.bookId).subscribe(
      (result) => {
        if (result) {
          this.alert.showAlertSuccess('Livro ativado com sucesso');
          this.onRefresh();
        }
      },
      (error) => {
        this.alert.showAlertDanger(error.error);
      }
    );
  }
}
