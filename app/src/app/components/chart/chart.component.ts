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
  data : number[] = [];

  constructor(private _expensesDataService: ExpensesDataService){
    this.data = this.getData();
  }
  
  ngOnInit(): void {
    this._expensesDataService.generateData();
  }

  getData(): number[] {
    let expenseData = this._expensesDataService.getSumExpensesForEachDay();
    let day = new Date().getDay()
    let monday = new Date(new Date().setDate(new Date().getDate() - day+1))
    let endWeek = new Date(new Date().setDate(monday.getDate() + 7))

    let array = expenseData.filter((date) => date.date >= monday && date.date <= endWeek)
    let result = []
    for(let item of array){
      result.push(item.sum)
    }
    return result
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
        data: this.getData(),
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
