import { NewUser } from './new-user';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private http: HttpClient) {}

  registerNewUser(newUser: NewUser) {
    return this.http.post(`${API}/usuarios/cadastro`, newUser);
  }

  verifyUserExisits(email: string) {
    return this.http.get<boolean>(`${API}/usuarios/existe/${email}`);
  }
}
