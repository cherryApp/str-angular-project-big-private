import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Customer } from 'src/app/model/customer';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customer$: Observable<Customer> = this.activatedRoute.params.pipe(
    switchMap( params => this.customerService.get(params.id) )
  );

  fields: ITableCol[] = this.config.customerTableColumns.filter(
    col => col.visible
  );

  constructor(
    private customerService: CustomerService,
    private config: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(ngForm: NgForm, customer: Customer): void {
    this.customerService.update(customer).subscribe(
      saved => this.router.navigate(['customers'])
    );
  }

}
