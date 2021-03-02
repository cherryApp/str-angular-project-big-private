import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { combineLatest, Subscription } from 'rxjs';
import { InfoCard } from 'src/app/common/info-card/info-card.component';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  cards: InfoCard[] = [
    {
      title: 'Customers',
      content: '102',
      cardClass: 'card-header-warning',
      footer: 'ide is jön valami',
      icon: 'account_circle',
    },
    {
      title: 'Products',
      content: '321',
      cardClass: 'card-header-success',
      footer: 'ide is jön valami',
      icon: 'store',
    },
    {
      title: 'Orders',
      content: 'Hali',
      cardClass: 'card-header-danger',
      footer: 'ide is jön valami',
      icon: 'inventory_2',
    },
    {
      title: '1. card',
      content: 'Hali',
      cardClass: 'card-header-info',
      footer: 'ide is jön valami',
      icon: 'update',
    },
  ];

  combinedSubscription: Subscription = new Subscription();

  orderChartLabels: Label[] = ['new', 'shipped', 'paid'];
  orderChartData: ChartDataSets[] = [
    { data: [0, 0, 0], label: 'Orders' },
  ];

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    this.combinedSubscription = combineLatest([
      this.productService.list$,
      this.orderService.list$,
      this.customerService.list$,
    ]).subscribe(
      data => {
        this.cards[0].content = String(data[2].length);
        this.cards[1].content = String(data[0].length);
        this.cards[2].content = String(data[1].length);

        // Order chart.
        const newOrders: number =
          data[1].filter( o => o.status === 'new' ).length;
        const shippedOrders: number =
          data[1].filter( o => o.status === 'shipped' ).length;
        const paidOrders: number =
          data[1].filter( o => o.status === 'paid' ).length;
        this.orderChartData[0].data = [newOrders, shippedOrders, paidOrders];
      }
    );

    this.productService.getAll();
    this.orderService.getAll();
    this.customerService.getAll();
  }

  ngOnDestroy(): void {
    this.combinedSubscription.unsubscribe();
  }

}
