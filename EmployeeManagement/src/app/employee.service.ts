import { Injectable } from '@angular/core';
import { EMPLOYEES } from './mock-employees'
import { Employee } from './Employee';
import { LogService } from './log.service'
@Injectable()
export class EmployeeService {

  employees = EMPLOYEES;

  constructor(private logService: LogService) { }

  addEmployee(name: string): void {
    name = name.trim();

    if (!name) { return; }

    var maxid = 0;

    this.employees.map(function (obj) {
      if (obj.id > maxid) maxid = obj.id;
    });

    var emp = new Employee({ id: maxid + 1, name: name });

    this.employees.push(emp);

    this.logService.logMessage(`Employee is created with id ${emp.id} and name is ${emp.name}`);

  }

  getAllEmployees(): Employee[] {

    return this.employees;

  }

}
