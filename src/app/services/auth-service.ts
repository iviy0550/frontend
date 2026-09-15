import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient = inject(HttpClient);

  private baseUrl = '/api/v1/users';

  register(userData: {
    name: string;
    email: string;
    password: string;
  }) {
    return this.httpClient.post(
      `${this.baseUrl}/signup`,
      userData
    );
  }

}