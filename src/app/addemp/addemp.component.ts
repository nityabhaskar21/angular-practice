import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  emp: Emp = new Emp();
  msg: string;

  @ViewChild('frm')
  form: NgForm;
  constructor(public empService: EmpService) {}

  ngOnInit(): void {}

  add() {
    this.empService.addEmployee(this.emp);
    this.msg = 'Employee Added';
    this.emp = new Emp();
    this.form.reset();
  }
}
