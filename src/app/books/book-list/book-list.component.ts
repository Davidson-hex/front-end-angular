import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { Books } from '../books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books!: Books;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((result) => {
      this.books = result;
    });
  }
}
