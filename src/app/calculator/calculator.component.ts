import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  amt: number = 0;
  years: number = 0;
  rate: number = 0;
  res: string = '';

  constructor() {}

  ngOnInit(): void {}

  calcSimple(): void {
    this.res = ((this.amt * this.years * this.rate) / 100).toFixed(2);
  }

  calcCompound(): void {
    this.res = (
      this.amt * Math.pow(1 + this.rate / 100, this.years) -
      this.amt
    ).toFixed(2);
  }
}
