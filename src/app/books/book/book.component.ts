import { AlertModalService } from './../../shared/alert-modal.service';
import { BookService } from './book.service';
import { UserService } from './../../authentication/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Rent } from './book';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  rent$!: Observable<Rent>;
  userId!: number;
  isRent!: boolean;
  bookId!: number;

  constructor(
    private userService: UserService,
    private bookService: BookService,
    private router: Router,
    private alertService: AlertModalService,
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit(): void {
    this.userService.returnUser().subscribe((user) => {
      const userId = user.id ?? 0;
      return (this.userId = userId);
    });
    this.bookService.finForId(this.userId).subscribe((result) => {
      this.isRent = result;
      if (this.isRent === false) {
        console.log('Igual a false');
      } else {
        console.log('Igual a true');
        this.rent$ = this.bookService.returnBook(this.userId);
        this.bookService.returnBook(this.userId).subscribe((result) => {
          this.bookId = result.id_livro;
        });
      }
    });
  }

  returnBook() {
    this.bookService.returnBookId(this.bookId).subscribe(
      (result) => {
        if (result) {
          this.alertService.showAlertSuccess('Livro devolvido com sucesso');
          this.bsModalRef.hide();
          this.router.navigate(['/livros/listadelivros']);
        }
      },
      (error) => {
        this.alertService.showAlertDanger(error.error);
      }
    );
  }
}
