import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params} from  '@angular/router';
import {Product,ProductService,Comment} from '../shared/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product:Product;
comments:Comment[];
newRating: number = 5;
newComment: string = "";
  constructor(private routeInfo:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
  	let productId:number=this.routeInfo.snapshot.params["productId"];
  	this.product=this.productService.getProduct(productId);
  	this.comments=this.productService.getCommentsForProductId(productId);
  	// console.log(this.comments)

  }

}
