import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './page/customers/customers.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { EditCustomerComponent } from './page/edit-customer/edit-customer.component';
import { EditOrderComponent } from './page/edit-order/edit-order.component';
import { OrdersComponent } from './page/orders/orders.component';
import { ProductsComponent } from './page/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'customers/:id',
    component: EditCustomerComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'orders/:id',
    component: EditOrderComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:id',
    component: EditOrderComponent,
  },
  {
    path: '**',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
