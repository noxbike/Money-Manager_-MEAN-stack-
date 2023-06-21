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

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
