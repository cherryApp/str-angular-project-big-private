export class Order {
  [param: string]: any;
  id: number = 0;
  customerID: number = 0;
  productID: number = 0;
  amount: number = 0;
  status: 'new'|'shipped'|'paid' = 'new';
}
