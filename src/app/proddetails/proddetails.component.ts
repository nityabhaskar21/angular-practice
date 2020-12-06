import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { SifyService } from '../sify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html',
  styleUrls: ['./proddetails.component.css']
})
export class ProddetailsComponent implements OnInit {
  product: Product = new Product();

  constructor(public sifyService: SifyService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let pid = parseInt(params.get('prodid'));
      console.log(pid);
      this.sifyService.getProducts().subscribe(data => {
        let prods: Product[] = data;
        this.product = prods.filter(p => p.pid == pid)[0];
        console.log(this.product);
      });
    });
  }
}
