import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalBalanceComponent } from './components/total-balance/total-balance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './components/filter/filter.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChartComponent } from './components/chart/chart.component';
import { HomeComponent } from './layout/home/home.component';
import { FactureComponent } from './components/facture/facture.component';
import { NgChartsModule } from 'ng2-charts';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import { CreateEstimateInvoiceComponent } from './layout/create-estimate-invoice/create-estimate-invoice.component';
import { StatistiqueViewComponent } from './layout/statistique-view/statistique-view.component';
import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';
import { NewEstimateComponent } from './components/new-estimate/new-estimate.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { NewDocumentComponent } from './layout/new-document/new-document.component';
import { NewRecipientComponent } from './components/new-recipient/new-recipient.component';
import { AddServicesComponent } from './components/add-services/add-services.component';
import { SettingComponent } from './layout/setting/setting.component';
import { CategorySpendingComponent } from './components/category-spending/category-spending.component';
import { HealthChartComponent } from './components/health-chart/health-chart.component';
import { IncomeChartComponent } from './components/income-chart/income-chart.component';
import { SpendingChartComponent } from './components/spending-chart/spending-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FilterComponent,
    TableauComponent,
    TopMenuComponent,
    TotalBalanceComponent,
    MenuComponent,
    FactureComponent,
    AddExpenseComponent,
    AddIncomeComponent,
    CreateEstimateInvoiceComponent,
    StatistiqueViewComponent,
    NgChartsModule,
    NewInvoiceComponent,
    NewEstimateComponent,
    ViewInvoiceComponent,
    NewDocumentComponent,
    NewRecipientComponent,
    AddServicesComponent,
    SettingComponent,
    CategorySpendingComponent,
    HealthChartComponent,
    IncomeChartComponent,
    SpendingChartComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
