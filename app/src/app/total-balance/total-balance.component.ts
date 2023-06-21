import { Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-total-balance',
  templateUrl: './total-balance.component.html',
  styleUrls: ['./total-balance.component.scss'],
  standalone:true,
  imports:[MatIconModule]
})
export class TotalBalanceComponent{
  balance: number = 2.438;

  constructor() {

  }
  
  
}
