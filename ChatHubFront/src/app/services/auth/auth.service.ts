import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private username: string | null = null;

  login(username: string) { this.username = username; }
  getUsername() { return this.username; }
  isLoggedIn(): boolean { return !!this.username; }
}
