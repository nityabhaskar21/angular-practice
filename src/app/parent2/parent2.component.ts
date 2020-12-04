import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {
  style1 = { height: '200px', width: '200px' };
  strname: string;

  constructor() {}

  ngOnInit(): void {}

  captureEvent(e) {
    this.strname = e;
  }
}
