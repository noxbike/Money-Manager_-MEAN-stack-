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
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
