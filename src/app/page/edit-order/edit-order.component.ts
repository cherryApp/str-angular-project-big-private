import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { Address } from 'src/app/model/address';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { ITableCol, ConfigService } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  order$: Observable<Order> = this.activatedRoute.params.pipe(
    switchMap( params => this.orderService.get(params.id) )
  );

  fields: ITableCol[] = this.config.orderTableColumns.filter(
    col => col.visible
  );

  choosenCustomer: Customer = new Customer();
  choosenProduct: Product = new Product();

  constructor(
    private orderService: OrderService,
    private config: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    ) { }

  search = (text$: Observable<string>) => text$.pipe(
      debounceTime(300),
      switchMap(
        txt => this.customerService.like('firstName', txt)
      )
    )

  ngOnInit(): void {
  }

  customerResultFormatter(customer: Customer): string {
    return `${customer.firstName} ${customer.lastName}`;
  }

  customerIputFormatter(customer: Customer): string {
    if (!customer.id) {
      return '';
    }
    return `(${customer.id}) ${customer.firstName} ${customer.lastName}`;
  }

  onUpdate(ngForm: NgForm, order: Order): void {
    order.customerID = this.choosenCustomer.id;
    this.orderService.update(order).subscribe(
      saved => this.router.navigate(['customers'])
    );
  }

}
