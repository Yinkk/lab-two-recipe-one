import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lab-two-recipe-one';

  @ViewChild('productList', {static: true})
  productList: ProductListComponent;

  
  ngOnInit(): void {
    this.productList.products = [
      {
        name: 'ส้มโอ',
        price: 222
      },
      {
        name: 'แตงโม',
        price: 333
      },
      {
        name: 'มะพร้าวน้ำหอม',
        price: 444
      },
    ];
  }
  constructor() {

  }

}
