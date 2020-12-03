import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
  name: string = '';
  income: number = 0;
  tax: number = 0;
  constructor() {}

  ngOnInit(): void {}
  calcTax(): void {
    if (this.income < 500000) {
      this.tax = this.income * 0.05;
    } else if (this.income > 500000 && this.income <= 1000000) {
      this.tax = this.income * 0.1;
    } else {
      this.tax = 100000 + (this.income - 1000000) * 0.0015;
    }
  }
}
