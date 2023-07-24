import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from "chart.js";
import { ExpensesDataService } from '../../services/expensesData/expenses-data.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  title = 'charts';
  
  constructor(private _expensesDataService: ExpensesDataService){
   
  }

  ngOnInit(): void {
    this._expensesDataService.spendingOfTheWeek();
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    datasets: [
      {
        data: this._expensesDataService.totalSpendingWeek,
        label: 'spending',
        fill: true,
        tension: 0.5,
        borderColor: '#42adf5',
        backgroundColor: 'rgba(66, 173, 245, 0.2)',
        pointBackgroundColor: 'rgba(66, 173, 245, 1)',
        pointBorderColor: 'rgba(66, 173, 245, 1)',
      },
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales:{
      y: {
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
    }
  }
}

  public lineChartLegend = false;
}
