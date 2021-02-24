import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Order } from 'src/app/model/order';
import { ITableCol, ConfigService } from 'src/app/service/config.service';
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

  constructor(
    private orderService: OrderService,
    private config: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(ngForm: NgForm, customer: Order): void {
    this.orderService.update(customer).subscribe(
      saved => this.router.navigate(['customers'])
    );
  }

}
