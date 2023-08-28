import { Injectable } from '@angular/core';
import { Income } from 'src/app/interfaces/income';

@Injectable({
  providedIn: 'root'
})
export class IncomesDataService {
  incomes: Income[] = [];

  constructor() { 
    this.generateData();
  }

  getIncomes(): number[]{
    let income = []
    for(let i = 0; i < this.incomes.length; i++){
      income.push(this.incomes[i].amount);
    }
    return income;
  }

  getMonthIncomes(): Income[]{
    const today = new Date();
    const month = today.getMonth()
    let result = this.incomes.filter((income:any) => new Date(income.date).getMonth() == month);
    return(result)
  }

  generateData(): void {
    // 10000 per month for 12month
    let today = new Date();
    let years = today.getFullYear()
    for(let i = 0; i < 12; i++){
      for(let j = 0; j < 2; j++){
        let day = j == 0 ? 10 : 25;
        let item = {
          id: 1,
          amount: 5000,
          from: "Btoi Btp",
          date: new Date(years, i, day),
        }
        this.incomes.push(item);
      }
    }
  }
}
