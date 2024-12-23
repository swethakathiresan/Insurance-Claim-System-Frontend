import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';  // Import LoginComponent
import { AdminLoginComponent } from './admin-login/admin-login.component'; // Import AdminLoginComponent

const routes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'admin-login', component: AdminLoginComponent },  // Ensure Admin Login route is here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
