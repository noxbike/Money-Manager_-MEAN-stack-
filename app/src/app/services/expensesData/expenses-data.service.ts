import { Injectable } from '@angular/core';
import { Expense } from 'src/app/interfaces/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpensesDataService {
  expenses: Array<Expense> = [];

  category: Array<"Expense" | "Income"> = ["Expense" , "Income"];
  amount: number = 0;
  tag: Array<"Matériel" | "Gazole" | "Employée" | "Prélèvement/Frais" | "Repas"| "Réparations/Maintenance" > = ["Matériel", "Gazole", "Employée", "Prélèvement/Frais" , "Repas", "Réparations/Maintenance" ]
  charge: Array<boolean> = [true, false]
  justificatif: string = "https://as2.ftcdn.net/v2/jpg/02/11/49/41/1000_F_211494142_xekWE4XQFoBrF4dex1DQKc7xBBon1HYo.jpg"
  today = new Date();

  constructor() {
    this.generateData();
    this.getSumExpensesForEachDay();
  }

  getExpenses(): Array<Expense> {
    return this.expenses
  }

  getSumExpensesForEachDay(): Array<{sum: number, date:Date}> {
    this.expenses.sort((a:any,b:any) => a.date - b.date)
    let date, month, year = 0;
    let sumExpensesForEachDay = []
    for(let i = 0; i < this.expenses.length; i++){

      if(date != this.expenses[i].date.getDate() || month != this.expenses[i].date.getMonth() || year != this.expenses[i].date.getFullYear()){
        date = this.expenses[i].date.getDate();
        month = this.expenses[i].date.getMonth();
        year = this.expenses[i].date.getFullYear();
        sumExpensesForEachDay.push({sum:this.expenses[i].amount, date:this.expenses[i].date})
      }
      else{
          sumExpensesForEachDay[sumExpensesForEachDay.length - 1].sum += this.expenses[i].amount 
      }
    }
    sumExpensesForEachDay = this.addMissingDate(sumExpensesForEachDay)
    return sumExpensesForEachDay
  }

   addMissingDate(array: Array<{sum: number, date: Date}>): Array<{sum: number, date: Date}>{
    for(let i = 0; i < array.length; i++){
      let firstDateOfArray = new Date(array[0].date)
      firstDateOfArray.setHours(0)
      firstDateOfArray.setMinutes(0)
      firstDateOfArray.setSeconds(0)
      let arrayDate = new Date(array[i].date)
      arrayDate.setHours(0)
      arrayDate.setMinutes(0)
      arrayDate.setSeconds(0)
      let dateToCheck = new Date(firstDateOfArray.setDate(firstDateOfArray.getDate() + i))
      if(dateToCheck.getTime() != arrayDate.getTime()){
          array.splice(i, 0,{sum: 0, date: dateToCheck})
          i = 0;
      }
      
    }
    return array
   }
  
  generateData():void {
    let name = [
      [
      "vidot piece auto-moto",
      "Mr.Bricolage",
      "Briconaute",
      "Jardicane",
      "Scale-Brico",
      "Leroy-Merlin",
      "Ravate",
      "Ferme et Jardin",
      "Weldom"
      ],
      [
      "Total St-Benoit",
      "Total St-Denis"
      ],
      [
        "employer1",
        "employer3"
      ],
      [
        "Urssaf-cotisation",
        "Impot.gouv",
        "Assurance-dec"
      ],
      [
        "Run-Traiteur",
        "Boulangerie",
        "Bar St-Suzanne",
      ],
    ]
    for(let i = 0; i < 100; i++){
      let random = Math.floor(Math.random() * name.length)
      let item : Expense = {
        name: name[random][Math.floor(Math.random() * name[random].length)],
        category: 'Expense',
        amount: Math.floor(Math.random() *(100 - 10) + 10),
        tag: this.tag[random],
        charge: true,
        date: new Date(this.today.getFullYear(), this.today.getMonth(),Math.floor(Math.random() * 30), Math.floor(Math.random() * 24)),
        justificatif: this.justificatif,
      }
      this.expenses.push(item);
    }
  }
}
