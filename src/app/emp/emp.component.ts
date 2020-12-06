import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { SifyService } from '../sify.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  emps: Emp[] = [];

  constructor(public sifyService: SifyService) {}

  ngOnInit(): void {
    this.sifyService.getEmps().subscribe(data => (this.emps = data));
  }
}
