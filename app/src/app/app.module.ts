import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalBalanceComponent } from './total-balance/total-balance.component';
import { DataScreenComponent } from './data-screen/data-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './filter/filter.component';
import { DividerMatComponent } from './mat-component/divider-mat/divider-mat.component';
import { TableauComponent } from './tableau/tableau.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalBalanceComponent,
    DataScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FilterComponent,
    DividerMatComponent,
    TableauComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
