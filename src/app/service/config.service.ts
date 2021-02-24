import { Injectable } from '@angular/core';

export interface ITableCol {
  key: string;
  title: string;
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

  constructor() { }
}
