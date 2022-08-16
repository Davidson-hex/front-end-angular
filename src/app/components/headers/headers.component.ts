import { Router } from '@angular/router';
import { UserService } from './../../authentication/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent {
  user$ = this.userService.returnUser();

  constructor(private userService: UserService, private router: Router) {}
  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
