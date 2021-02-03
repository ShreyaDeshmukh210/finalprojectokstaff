import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { AdminComponent } from './admin/admin.component';
import { LeaveComponent } from './leave/leave.component';
import { ViewleaveComponent } from './viewleave/viewleave.component';
import { LoginoutComponent } from './loginout/loginout.component';
import { PayslipComponent } from './payslip/payslip.component';
import { SalaryComponent } from './salary/salary.component';
import { NewregistrationviewComponent } from './newregistrationview/newregistrationview.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { HeaderComponent } from './header/header.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { LoginComponent } from './login/login.component';
import { SerchallemployeeComponent } from './serchallemployee/serchallemployee.component';
import { ShowsalaryComponent } from './showsalary/showsalary.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EmployeeComponent,
    ManagerComponent,
    AdminComponent,
    LeaveComponent,
    ViewleaveComponent,
    LoginoutComponent,
    PayslipComponent,
    SalaryComponent,
    NewregistrationviewComponent,
    UpdateprofileComponent,
    HeaderComponent,
    DashboardComponent,
    SearchemployeeComponent,
    SerchallemployeeComponent,
    ShowsalaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{ 
 
}
