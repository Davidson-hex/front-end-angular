import { AlertModalService } from './../../shared/alert-modal.service';
import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { AuthenticationService } from './../../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  senha = '';
  bsModalRef?: BsModalRef;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private alertService: AlertModalService
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.authenticate(this.email, this.senha).subscribe(
      () => {
        this.router.navigate(['livros']);
      },
      (error) => {
        const message = error.error;
        this.handleError(message);
      }
    );
  }

  handleError(message: string) {
    this.alertService.showAlertDanger(message);
  }
}
