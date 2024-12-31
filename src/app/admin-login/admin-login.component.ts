import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  adminData = [
    { email: 'swetha@impelox.com', password: 'swetha123' },
    { email: 'admin1@impelox.com', password: 'admin123' },
    { email: 'admin2@impelox.com', password: 'admin234' },
    { email: 'admin3@impelox.com', password: 'admin345' },
    { email: 'admin4@impelox.com', password: 'admin456' },
    { email: 'admin5@impelox.com', password: 'admin567' },
    { email: 'admin6@impelox.com', password: 'admin678' },
    { email: 'admin7@impelox.com', password: 'admin789' },
    { email: 'admin8@impelox.com', password: 'admin890' },
    { email: 'admin9@impelox.com', password: 'admin901' },
  ];

  constructor(private router: Router) {}

  login() {
    // Check if email domain is @impelox.com
    const isValidDomain = this.email.endsWith('@impelox.com');

    // Check if email and password match the sample admin data
    const isValidAdmin = this.adminData.some(
      (admin) => admin.email === this.email && admin.password === this.password
    );

    if (isValidDomain && isValidAdmin) {
      this.isLoginSuccessVisible = true;
      setTimeout(() => {
        this.isLoginSuccessVisible = false;
        this.router.navigate(['/admin-dashboard']); // Redirect to admin interface
      }, 2000);
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
