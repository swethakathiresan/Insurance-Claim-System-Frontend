import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSignup = false;
  isLoginSuccessVisible = false;
  isLoginFailedVisible = false;
  isSignupSuccessVisible = false;
  isSignupFailedVisible = false;

  username = '';
  password = '';
  newUsername = '';
  newPassword = '';
  email = '';

  constructor(private http: HttpClient) {}

  toggleForm(event: Event) {
    event.preventDefault();
    this.isSignup = !this.isSignup;
  }

  closeLoginSuccess() {
    this.isLoginSuccessVisible = false;
  }

  closeLoginFailed() {
    this.isLoginFailedVisible = false;
  }

  closeSignupSuccess() {
    this.isSignupSuccessVisible = false;
    this.toggleForm(new Event('click'));
  }

  closeSignupFailed() {
    this.isSignupFailedVisible = false;
  }

  login() {
    const credentials = { email: this.email, password: this.password };
    this.http.post('http://localhost:3000/login', credentials)
      .subscribe({
        next: () => { this.isLoginSuccessVisible = true; },
        error: () => { this.isLoginFailedVisible = true; }
      });
  }

  signup() {
    const newUser = { username: this.newUsername, password: this.newPassword, email: this.email };
    this.http.post('http://localhost:3000/signup', newUser)
      .subscribe({
        next: () => { this.isSignupSuccessVisible = true; },
        error: () => { this.isSignupFailedVisible = true; }
      });
  }
}
