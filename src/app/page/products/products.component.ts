import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  list$: Observable<Product[]> = this.productService.list$;
  cols: ITableCol[] = this.config.productTableColumns;

  sorterKey: string = '';
  sorterDirection: number = 1;

  constructor(
    private productService: ProductService,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    this.productService.getAll();
  }

  onSort(key: string): void {
    if (key === this.sorterKey) {
      this.sorterDirection *= -1;
    } else {
      this.sorterDirection = 1;
    }

    this.sorterKey = key;
  }

}
