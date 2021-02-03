import { ShowsalaryComponent } from './showsalary/showsalary.component';
import { NewregistrationviewComponent } from './newregistrationview/newregistrationview.component';
import { SerchallemployeeComponent } from './serchallemployee/serchallemployee.component';
import { ViewleaveComponent } from './viewleave/viewleave.component';
import { PayslipComponent } from './payslip/payslip.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { LeaveComponent } from './leave/leave.component';
import { SalaryComponent } from './salary/salary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path:'showsalary', component:ShowsalaryComponent
  },
  {
    path:'searchallemployee', component:SerchallemployeeComponent
  },
  {      
    path:'login' , component:LoginComponent
  },
  {      
    path:'register' , component:RegisterComponent
  },
  {      
    path:'admin' , component:AdminComponent,
    children: 
    [
      {
        path:'dashboard', component:DashboardComponent
      },
      {
        path:'salary', component:SalaryComponent
      },
      {
        path:'newregisterview', component:NewregistrationviewComponent
      },
      
      {
        path:'generatepayslip', component:PayslipComponent
      },
      {
        path:'updateprofile', component:UpdateprofileComponent
      },
      {
        path:'searchemployee', component:SearchemployeeComponent
      },
      {
        path:'searchallemployee', component:SerchallemployeeComponent
      },
      {
        path:'', redirectTo: 'dashboard' , pathMatch: 'full'
      },
      {
        path:'loginout' , component:LoginComponent
      }

    ],
  
  },
  {      
    path:'employee' , component:EmployeeComponent,
    children: 
    [
      {
        path:'dashboard', component:DashboardComponent
      },
      {
        path:'applyleave', component:LeaveComponent
      },
      {
        path:'updateprofile', component:UpdateprofileComponent
      },
  
      {
        path:'', redirectTo: 'dashboard' , pathMatch: 'full'
      },
      {
        path:'showsalary', component:ShowsalaryComponent
      },
      {
        path:'generatepayslip', component:PayslipComponent
      },
    
      {
        path:'loginout' , component:LoginComponent
      },

    ],
  
  },

  {      
    path:'manager' , component:ManagerComponent,
    children: 
    [
      {
        path:'dashboard', component:DashboardComponent
      },
      {
        path:'viewleave', component:ViewleaveComponent
      },
      {
        path:'updateprofile', component:UpdateprofileComponent
      },
        {
        path:'searchallemployee', component:SerchallemployeeComponent
      },
      {
        path:'', redirectTo: 'dashboard' , pathMatch: 'full'
      },
      {
        path:'loginout' , component:LoginComponent
      }

    ],
  
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
