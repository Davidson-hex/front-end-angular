import { Router } from '@angular/router';
import { AlertModalService } from './../../shared/alert-modal.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
})
export class NewBookComponent implements OnInit {
  newBookForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private booksServicce: BooksService,
    private alert: AlertModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newBookForm = this.formBuilder.group({
      author: ['', [Validators.required]],
      title: ['', [Validators.required]],
    });
  }

  addBook() {
    if (this.newBookForm.valid) {
      const title = this.newBookForm.get('title')?.value;
      const author = this.newBookForm.get('author')?.value;
      this.booksServicce.addBook(author, title).subscribe(
        (result) => {
          if (result) {
            this.alert.showAlertSuccess('Livro adicionado com sucesso');
            this.router.navigate(['/livros/listadelivros']);
          }
        },
        (error) => {
          this.alert.showAlertDanger(error.erro);
        }
      );
    }
  }
}
