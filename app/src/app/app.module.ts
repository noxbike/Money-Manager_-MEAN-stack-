import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalBalanceComponent } from './total-balance/total-balance.component';
import { FilterComponent } from './filter/filter.component';
import { DataScreenComponent } from './data-screen/data-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalBalanceComponent,
    FilterComponent,
    DataScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
