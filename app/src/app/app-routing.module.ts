import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEstimateInvoiceComponent } from './layout/create-estimate-invoice/create-estimate-invoice.component';
import { HomeComponent } from './layout/home/home.component';
import { SettingComponent } from './layout/setting/setting.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'invoices', component: CreateEstimateInvoiceComponent},
  {path: 'settings', component: SettingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
