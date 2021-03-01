import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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

  cols: ITableCol[] = this.config.orderTableColumns.filter(
    c => c.visible
  );

  sumList: {[param: string]: number} = {};

  sorterKey: string = '';
  sorterDirection: number = 1;

  orders$: Observable<Order[]> = this.orderService.list$.pipe(
    tap( list => {
      this.sumList.customers = list.length;
      this.sumList.orders = list.length;
      this.sumList.amount = list.reduce<number>(
        (prev, current) => prev + current.amount,
        0
      );
    })
  );

  constructor(
    private config: ConfigService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.orderService.getAll();
  }

  onRemove(order: Order): void {
    this.orderService.remove(order);
  }

  onSort(key: string): void {
    if (key === this.sorterKey) {
      this.sorterDirection = this.sorterDirection * -1;
    } else {
      this.sorterDirection = 1;
    }

    this.sorterKey = key;
  }

}
