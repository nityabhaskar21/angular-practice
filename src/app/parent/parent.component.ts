import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  str: string;
  style1 = { width: '200px', height: '200px' };
  imgname: string;

  constructor() {}

  ngOnInit(): void {}

  setImage(strimage: string) {
    this.imgname = strimage;
  }
}
