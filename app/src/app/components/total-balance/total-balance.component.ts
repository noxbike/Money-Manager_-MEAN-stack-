import { Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { AddIncomeComponent } from '../add-income/add-income.component';

@Component({
  selector: 'app-total-balance',
  templateUrl: './total-balance.component.html',
  styleUrls: ['./total-balance.component.scss'],
  standalone:true,
  imports:[MatIconModule, AddExpenseComponent, AddIncomeComponent]
})
export class TotalBalanceComponent{
  balance: number = 2.438;

  constructor() {

  }
  
  
}
