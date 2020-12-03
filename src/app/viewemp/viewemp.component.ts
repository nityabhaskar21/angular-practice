import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
  //providers: [EmpService]
})
export class ViewempComponent implements OnInit {
  fname: string;
  searchstr: string = '';
  constructor(public empService: EmpService) {}

  ngOnInit(): void {}

  setField(str: string) {
    this.fname = str;
  }

  remove(eid: number) {
    this.empService.removeEmployee(eid);
  }
}
