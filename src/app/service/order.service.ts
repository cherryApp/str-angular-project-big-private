import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceextends extends BaseService<Customer> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http, 'orders');
  }
}
