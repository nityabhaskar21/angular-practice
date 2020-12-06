import { Component, OnInit } from '@angular/core';

import { SifyService } from '../sify.service';
import { ActivatedRoute } from '@angular/router';
import { Emp } from '../emp';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {
  emps: Emp = new Emp();
  constructor(public sifyService: SifyService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let eid = parseInt(params.get('eid'));
      console.log(eid);
      this.sifyService.getEmps().subscribe(data => {
        let emp: Emp[] = data;
        this.emps = emp.filter(e => e.eid == eid)[0];
        console.log(this.emps);
      });
    });
  }
}
