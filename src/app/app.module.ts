import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Third-party modules.
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { InfoCardComponent } from './common/info-card/info-card.component';
import { CustomersComponent } from './page/customers/customers.component';
import { EditCustomerComponent } from './page/edit-customer/edit-customer.component';
import { OrdersComponent } from './page/orders/orders.component';
import { EditOrderComponent } from './page/edit-order/edit-order.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { ChartComponent } from './common/chart/chart.component';
import { ProductsComponent } from './page/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    InfoCardComponent,
    CustomersComponent,
    EditCustomerComponent,
    OrdersComponent,
    EditOrderComponent,
    SorterPipe,
    ChartComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
