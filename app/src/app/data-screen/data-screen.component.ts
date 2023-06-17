import { Component, OnInit } from '@angular/core';
import { ExpensesDataService } from '../services/expensesData/expenses-data.service';

@Component({
  selector: 'app-data-screen',
  templateUrl: './data-screen.component.html',
  styleUrls: ['./data-screen.component.scss']
})
export class DataScreenComponent implements OnInit {
  data: Array<any> = [];

  constructor(private _expensesService: ExpensesDataService) {

  }

  ngOnInit(): void {
    this._expensesService.generateData();
    this.data = this._expensesService.getExpenses();
  }
}
