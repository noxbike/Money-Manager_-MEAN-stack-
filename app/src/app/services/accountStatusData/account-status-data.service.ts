import { Injectable, OnInit } from '@angular/core';
import { ExpensesDataService } from '../expensesData/expenses-data.service';
import { IncomesDataService } from '../incomesData/incomes-data.service';

@Injectable({
  providedIn: 'root'
})
export class AccountStatusDataService implements OnInit{
  total: number = 0;
  Data = [];

  constructor(private _expensesDataService: ExpensesDataService, private _incomeDataService: IncomesDataService) {
    this.total = this.stateOfAccountEachDay()[this.stateOfAccountEachDay().length - 1].sum;
   }

  ngOnInit(): void {
  }

  getTotal(): number{
    this.stateOfAccountEachDay()
    return this.total;
  }

  stateOfAccountEachDay(): Array<{sum: number, date:Date}> {
    let income = this._incomeDataService.incomes;
    let arrayStateOfAccount = [];
    let tmpSum = 0;
    for(let item of this._expensesDataService.getSumExpensesForEachDay()){
      tmpSum -= item.sum;
      for(let inc of income){
        if(inc.date.getDate() === item.date.getDate() && inc.date.getMonth() === item.date.getMonth() && inc.date.getFullYear() === item.date.getFullYear()){
          tmpSum += inc.amount
        }
      }
      item.sum = tmpSum;
      arrayStateOfAccount.push(item)
    }
    return arrayStateOfAccount
  }
}
