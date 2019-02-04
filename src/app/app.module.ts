import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductTypeComponent } from './pages/product-type/product-type.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderListModule } from 'primeng/orderlist';
import { ModalModule } from 'ngb-modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DeleteComponent } from './modal-windows/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductTypeComponent,
    NavbarComponent,
    DashboardComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    OrderListModule,
    ModalModule,
    NgbModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DeleteComponent]
})
export class AppModule { }
