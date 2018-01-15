import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import {Product} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
private products:Product[];
private keyword:string;
private titleFilter:FormControl=new FormControl();
private imgUrl="http://placehold.it/320x150"
  constructor(private productService:ProductService) { 
  	this.titleFilter.valueChanges.debounceTime(500).subscribe(value=>this.keyword=value) //观察者模式 订阅 //rxjs 响应式编程  当停止输入500ms以后才发射数据给subscribe
  }

  ngOnInit() {
  	this.products=this.productService.getProducts();
  }

}
 