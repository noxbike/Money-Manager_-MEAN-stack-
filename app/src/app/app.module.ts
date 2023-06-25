import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalBalanceComponent } from './total-balance/total-balance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './filter/filter.component';
import { DividerMatComponent } from './mat-component/divider-mat/divider-mat.component';
import { TableauComponent } from './tableau/tableau.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MenuComponent } from './menu/menu.component';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './layout/home/home.component';
import { FactureComponent } from './facture/facture.component';
import { NgChartsModule } from 'ng2-charts';

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
    DividerMatComponent,
    TableauComponent,
    TopMenuComponent,
    TotalBalanceComponent,
    MenuComponent,
    FactureComponent,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
