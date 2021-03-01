import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  cols: ITableCol[] = this.config.customerTableColumns.filter(
    c => c.visible
  );
  customers$: Observable<Customer[]> = this.customerService.list$;

  constructor(
    private config: ConfigService,
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    this.customerService.getAll();
  }

}
