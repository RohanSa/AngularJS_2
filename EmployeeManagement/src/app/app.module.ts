import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeService }  from './employee.service';
import { LogService }  from './log.service';
import { EmployeeViewComponent } from './employee-view/employee-view.component'
import { AppRoutingModule } from './app-routing.module';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeEditComponent,
    EmployeeViewComponent,
    EmployeeHomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [ EmployeeService, LogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
