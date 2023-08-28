import { Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { AddIncomeComponent } from '../add-income/add-income.component';
import { AccountStatusDataService } from 'src/app/services/accountStatusData/account-status-data.service';

@Component({
  selector: 'app-total-balance',
  templateUrl: './total-balance.component.html',
  styleUrls: ['./total-balance.component.scss'],
  standalone:true,
  imports:[MatIconModule, AddExpenseComponent, AddIncomeComponent]
})
export class TotalBalanceComponent{
  balance: number = 0;

  constructor(private _accountStatusService: AccountStatusDataService) {
    this.balance = this._accountStatusService.getTotal();
  }
  
  
}
