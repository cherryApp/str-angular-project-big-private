import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { ITableCol, ConfigService } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  cols: ITableCol[] = this.config.orderTableColumns;
  orders$: Observable<Order[]> = this.orderService.list$;

  constructor(
    private config: ConfigService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.orderService.getAll();
  }

}
