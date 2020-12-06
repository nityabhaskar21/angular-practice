import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { SifyService } from '../sify.service';

@Component({
  selector: 'app-prodbreif',
  templateUrl: './prodbreif.component.html',
  styleUrls: ['./prodbreif.component.css']
})
export class ProdbreifComponent implements OnInit {
  prods: Product[] = [];

  constructor(public sifyService: SifyService) {}

  ngOnInit(): void {
    this.sifyService.getProducts().subscribe(data => (this.prods = data));
  }
}
