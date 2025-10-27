import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  username: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.username.trim()) {
      this.auth.login(this.username);
      this.router.navigate(['/home']);
    }
  }
}
