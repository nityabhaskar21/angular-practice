import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {
  emp: Emp;
  msg: string;
  constructor(
    public empService: EmpService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let empId = parseInt(params.get('eid'));
      this.emp = this.empService.emps.filter(e => e.empId == empId)[0];
    });
  }

  edit() {
    this.router.navigateByUrl('/view');
    this.msg = 'Edited';
  }
}
