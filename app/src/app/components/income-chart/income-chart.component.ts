import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Income } from 'src/app/interfaces/income';
import { Chart } from 'chart.js';
import { IncomesDataService } from 'src/app/services/incomesData/incomes-data.service';

@Component({
  selector: 'app-income-chart',
  templateUrl: './income-chart.component.html',
  styleUrls: ['./income-chart.component.scss'],
  standalone: true,
  imports:[ CommonModule ]
})
export class IncomeChartComponent {
  income: Income[] = []

  constructor(public _incomeDataService: IncomesDataService){
  }
  
  ngOnInit() {
    this.income = this._incomeDataService.getMonthIncomes()
  }

  sum():number{
    return this.income.reduce((total: number, item:Income)=> item.amount + total , 0)
  }
}
