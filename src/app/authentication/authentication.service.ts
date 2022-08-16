import { UserService } from './user/user.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}
  authenticate(email: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        `${API}/usuarios/login`,
        {
          email: email,
          senha: password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.userService.saveToken(authToken);
        })
      );
  }
}
