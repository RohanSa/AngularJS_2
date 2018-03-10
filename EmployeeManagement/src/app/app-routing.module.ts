import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeEditComponent }      from './employee-edit/employee-edit.component';
import { EmployeeViewComponent }      from './employee-view/employee-view.component';
import { EmployeeHomeComponent }      from './employee-home/employee-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/employeehome', pathMatch: 'full' },
  { path: 'employeehome', component: EmployeeHomeComponent    },
  { path: 'employeeedit', component: EmployeeEditComponent },
  { path: 'employeeview', component: EmployeeViewComponent }
];

@NgModule({
  
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

  
}