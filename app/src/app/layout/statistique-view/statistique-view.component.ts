import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CategorySpendingComponent } from 'src/app/components/category-spending/category-spending.component';
import { HealthChartComponent } from 'src/app/components/health-chart/health-chart.component';
import { IncomeChartComponent } from 'src/app/components/income-chart/income-chart.component';
import { SpendingChartComponent } from 'src/app/components/spending-chart/spending-chart.component';
@Component({
  selector: 'app-statistique-view',
  templateUrl: './statistique-view.component.html',
  styleUrls: ['./statistique-view.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CategorySpendingComponent, HealthChartComponent, IncomeChartComponent, SpendingChartComponent]
})
export class StatistiqueViewComponent {

}
