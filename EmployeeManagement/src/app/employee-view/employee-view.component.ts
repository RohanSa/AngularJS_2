import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee'
import { EmployeeService } from '../employee.service';
import { JsonPipe } from '@angular/common/src/pipes';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee(): void {

    this.employees = this.employeeService.getAllEmployees()
    console.log(this.employees);
  }

}
