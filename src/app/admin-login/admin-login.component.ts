import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';
  isLoginSuccessVisible = false;
  isLoginFailedVisible = false;

  login() {
    if (this.email === 'admin@admin.com' && this.password === 'admin123') {
      this.isLoginSuccessVisible = true;
    } else {
      this.isLoginFailedVisible = true;
    }
  }

  closeLoginSuccess() {
    this.isLoginSuccessVisible = false;
  }

  closeLoginFailed() {
    this.isLoginFailedVisible = false;
  }
}
