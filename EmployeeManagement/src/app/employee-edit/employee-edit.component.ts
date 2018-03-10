import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee(name: string): void {
    this.employeeService.addEmployee(name);

  }


}
