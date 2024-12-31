import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  sidebarOpen = false;
  isLoginRoute = false;
  isAdminLoginRoute = false; // Track if we are on the admin-login route
  isPolicyUserRoute = false;
  isAdminDashboardRoute = false;
  isClaimsListRoute = false;
  isClaimsDetailsRoute = false;

  user: any;

  constructor(private router: Router, private authService: AuthService) {
    this.user = this.authService.getUserData();
    console.log('THIS USER : ', this.user);
  }

  ngOnInit(): void {
    // Listen to route changes to detect the current route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginRoute = event.url === '/login';
        this.isAdminLoginRoute = event.url === '/admin-login'; 
        this.isPolicyUserRoute = event.url === '/policyuser';
        this.isAdminDashboardRoute = event.url === '/admin-dashboard'; 
        this.isClaimsListRoute = event.url === '/claims-list';
        this.isClaimsDetailsRoute = event.url.startsWith('/claims/');

      }
    });
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
