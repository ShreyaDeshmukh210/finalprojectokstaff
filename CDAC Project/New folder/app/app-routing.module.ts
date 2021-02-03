import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RecordListComponent } from './record-list/record-list.component';
import { ServicingTypeComponent } from './servicing-type/servicing-type.component';
import { SignupComponent } from './signup/signup.component';
import { SparepartListComponent } from './sparepart-list/sparepart-list.component';
import { StaffListComponent } from './staff-list/staff-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'staff-list', component: StaffListComponent },
  { path: 'sparepart-list', component: SparepartListComponent },
  { path: 'record-list', component: RecordListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'servicing-type', component: ServicingTypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
