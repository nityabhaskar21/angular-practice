import { Injectable } from '@angular/core';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  emps: Emp[] = [];
  constructor() {
    this.emps.push(
      { empId: 1001, empName: 'ram kumar', empSal: 5000, dept: 'hr' },
      { empId: 1004, empName: 'rohan kumar', empSal: 7000, dept: 'pr' },
      { empId: 1002, empName: 'sam kumar', empSal: 3000, dept: 'hr' },
      { empId: 1006, empName: 'mohan kumar', empSal: 4000, dept: 'pr' },
      { empId: 1003, empName: 'ravi kumar', empSal: 8000, dept: 'pr' }
    );
    console.log('emp service constructor');
  }

  addEmployee(emp: Emp) {
    this.emps.push(emp);
  }

  removeEmployee(eid: number) {
    this.emps = this.emps.filter(e => e.empId != eid);
  }
}
