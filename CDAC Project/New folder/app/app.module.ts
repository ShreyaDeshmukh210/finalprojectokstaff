import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SparepartListComponent } from './sparepart-list/sparepart-list.component';
import { RecordListComponent } from './record-list/record-list.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ServicingTypeComponent } from './servicing-type/servicing-type.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './admin.service';
import { CustomerService } from './customer.service';
import { SparepartService } from './sparepart.service';
import { StaffService } from './staff.service';
import { RecordService } from './record.service';
import { SparepartAddComponent } from './sparepart-add/sparepart-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CustomerListComponent,
    SparepartListComponent,
    RecordListComponent,
    StaffListComponent,
    LoginComponent,
    SignupComponent,
    ServicingTypeComponent,
    SparepartAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AdminService,
    CustomerService,
    SparepartService,
    StaffService,
    RecordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
