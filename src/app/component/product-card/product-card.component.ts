import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  public product: any;
  public svgColor="red";

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.product=res;
    })
  }
  
}
