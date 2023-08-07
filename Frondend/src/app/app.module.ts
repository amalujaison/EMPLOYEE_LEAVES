import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { EditLeaveComponent } from './edit-leave/edit-leave.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import { DeleteLeaveComponent } from './delete-leave/delete-leave.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    AccountsComponent,
    AddLeaveComponent,
    EditLeaveComponent,
    ViewLeaveComponent,
    DeleteLeaveComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
