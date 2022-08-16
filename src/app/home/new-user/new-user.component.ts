import { Router } from '@angular/router';
import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  public newUserForm!: FormGroup;
  verifyExists!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  register() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.newUserService.registerNewUser(newUser).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  verify(): void {
    if (this.newUserForm.get('email')?.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.newUserService
        .verifyUserExisits(newUser.email)
        .subscribe((result) => {
          this.verifyExists = result;
        });
    }
  }
}
