import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  style1 = { height: '300px', width: '200px' };
  @Input('iname')
  strname: string;

  @Input('inputimg')
  strimage: string;
  constructor() {}

  ngOnInit(): void {}
}
