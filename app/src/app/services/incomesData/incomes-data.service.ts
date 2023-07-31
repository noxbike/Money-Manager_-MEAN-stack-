import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncomesDataService {
  incomes: any = [];

  constructor() { }

  getIncomes(): any{
    let income = []
    for(let i = 0; i < this.incomes.length; i++){
      income.push(this.incomes[i].amount);
    }
    return income;
  }

  generateData(): void {
    // 5000 per month for 12month
    let today = new Date();
    let years = today.getFullYear()
    for(let i = 0; i < 12; i++){
      let item = {
        id: 1,
        amount: 5000,
        from: "Btoi Btp",
        date: new Date(today.getFullYear(), i, 25),
      }
      this.incomes.push(item);
    }
  }
}
