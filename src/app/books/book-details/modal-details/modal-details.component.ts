import { AlertModalService } from './../../../shared/alert-modal.service';
import { BooksService } from './../../books.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { dateValidator } from './date.validators';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css'],
})
export class ModalDetailsComponent implements OnInit {
  dateForm!: FormGroup;
  @Input() bookId!: number;

  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private router: Router,
    private booksService: BooksService,
    private alertService: AlertModalService
  ) {}

  ngOnInit(): void {
    this.dateForm = this.formBuilder.group({
      date: ['', [dateValidator, Validators.required]],
    });
  }

  onClose() {
    this.bsModalRef.hide();
  }

  onConfirm() {
    const date = this.dateForm.get('date')?.value;

    const id = this.bsModalRef.content.bookId;
    this.booksService.rentBook(id, date).subscribe(
      (result) => {
        if (result) {
          this.alertService.showAlertSuccess('Livro alugado com sucesso');
          this.bsModalRef.hide();
          this.router.navigate(['/livros']);
        }
      },
      (error) => {
        this.alertService.showAlertDanger(error.error);
      }
    );
    /*
      .subscribe(
        (result) => {
          if (result) {
            this.router.navigate(['/livros']);
          }
        },
        (error) => {
          this.bsModalRef.hide();
          this.alertService.showAlertDanger(error.error);
        }
      )
      */
  }
}
