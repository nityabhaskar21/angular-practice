import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  style1 = { height: '200px', width: '200px' };
  str: string;

  @Output()
  notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  raiseEvent() {
    this.notify.emit(this.str);
  }
}
