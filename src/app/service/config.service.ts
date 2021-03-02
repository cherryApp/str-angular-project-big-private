import { Injectable } from '@angular/core';

export interface ITableCol {
  key: string;
  title: string;
  type?: string;
  icon?: string;
  order?: number;
  pattern?: string;
  required?: boolean;
  visible?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiUrl: string = 'http://localhost:3000';

  customerTableColumns: ITableCol[] = [
    {
      key: 'id',
      title: '#',
    },
    {
      key: 'firstName',
      title: 'Fname',
      visible: true,
    },
    {
      key: 'lastName',
      title: 'Lname',
      visible: true,
    },
    {
      key: 'email',
      title: 'Email',
      visible: true,
    },
    {
      key: 'active',
      title: 'Active',
    },
  ];

  orderTableColumns: ITableCol[] = [
    {
      key: 'id',
      title: '#',
    },
    {
      key: 'customerID',
      title: 'Customer',
      visible: true,
    },
    {
      key: 'productID',
      title: 'Product',
      visible: true,
    },
    {
      key: 'amount',
      title: 'Amount',
      visible: true,
    },
    {
      key: 'status',
      title: 'Status',
      visible: true,
    },
  ];

  productTableColumns: ITableCol[] = [
    {
      key: 'id',
      title: '#',
    },
    {
      key: 'name',
      title: 'Name',
      visible: true,
    },
    {
      key: 'type',
      title: 'Type',
      visible: true,
    },
    {
      key: 'catID',
      title: 'Category',
      visible: true,
    },
    {
      key: 'price',
      title: 'Price',
      visible: true,
    },
    {
      key: 'featured',
      title: 'Feat.',
      visible: true,
      type: 'checkbox',
    },
    {
      key: 'active',
      title: 'Act.',
      visible: true,
      type: 'checkbox',
    },
  ];

  constructor() { }
}
