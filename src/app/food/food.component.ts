import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  totalBill: number = 0;
  tipPrecentage: number = 0;
  noOfPerson: number = 0;
  tipPerPerson: number = 0;
  totalPerPerson: number = 0;

  constructor() {}

  ngOnInit(): void {}

  calcBill(): void {
    let tip = (this.totalBill * this.tipPrecentage) / 100;
    this.tipPerPerson = tip / this.noOfPerson;
    this.totalPerPerson = this.totalBill / this.noOfPerson;
  }
}
