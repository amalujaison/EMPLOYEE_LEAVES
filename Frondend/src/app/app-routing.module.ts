import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AuthComponent } from './auth/auth.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { EditLeaveComponent } from './edit-leave/edit-leave.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  {path:'profile',component:AccountsComponent },
  {path:'',component:AuthComponent },
  {path:'add-leave',component:AddLeaveComponent},
  {path:'edit-leave/:leaveId',component:EditLeaveComponent },
  {path:'view-leave',component:ViewLeaveComponent },
  {path:'dashboard',component:DashboardComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
