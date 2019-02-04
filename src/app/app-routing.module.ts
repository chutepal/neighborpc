import { DeleteComponent } from './modal-windows/delete/delete.component';
import { AuthService } from './auth.service';
import { ProductTypeComponent } from './pages/product-type/product-type.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'productType',
    component: ProductTypeComponent,
    canActivate: [AuthService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
    {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthService]
  },
  {
    path: 'delete',
    component: DeleteComponent,
    canActivate: [AuthService]
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
