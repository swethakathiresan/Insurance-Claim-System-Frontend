import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PolicyuserComponent } from './policyuser/policyuser.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import { ClaimsDetailsComponent } from './claims-details/claims-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'policyuser', component: PolicyuserComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'reports', component: AdminDashboardComponent },
  { path: 'claims-list', component: ClaimsListComponent },
  { path: 'claims-details', component: ClaimsDetailsComponent },
  { path: 'claims', component: ClaimsListComponent },
  { path: 'claims/:id', component: ClaimsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
