import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, Subscription } from 'rxjs';
import { Product } from 'src/app/Models/Product/Product';
import { ProductService } from 'src/app/Services/Products/ProductService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit , OnDestroy {


  displayedColumns: string[] = ['title', 'price', 'description', 'color', 'size'];
  dataSource = new MatTableDataSource<Product>();
  private subscription: Subscription | undefined;

  constructor(private productService: ProductService) { }

  async ngOnInit() {

    this.subscription = (await this.productService.getProducts()).subscribe(
      (response) => {
        this.dataSource.data = response;
  


      },
      (error) => {
        console.error(error);
    
      }
    );
  }

  ngOnDestroy() {
 //  this.subscription.unsubscribe();
  }

}
