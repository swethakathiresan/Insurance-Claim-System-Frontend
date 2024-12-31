import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PolicyuserComponent } from './policyuser/policyuser.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import { ClaimsDetailsComponent } from './claims-details/claims-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLoginComponent,
    PolicyuserComponent,
    AdminDashboardComponent,
    ClaimsListComponent,
    ClaimsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
