import { Injectable, OnInit } from '@angular/core';
import { Expense } from 'src/app/interfaces/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpensesDataService implements OnInit {
  expenses: Array<Expense> = [];

  category: Array<"Expense" | "Income"> = ["Expense" , "Income"];
  amount: number = 0;
  tag: Array<"Matériel" | "Gazole" | "Employée" | "Prélèvement/Frais" | "Repas"| "Réparations/Maintenance" > = ["Matériel", "Gazole", "Employée", "Prélèvement/Frais" , "Repas", "Réparations/Maintenance" ]
  charge: Array<boolean> = [true, false]
  justificatif: string = "https://as2.ftcdn.net/v2/jpg/02/11/49/41/1000_F_211494142_xekWE4XQFoBrF4dex1DQKc7xBBon1HYo.jpg"
  today = new Date();
  totalSpendingWeek: number[] = [];

  constructor() { 
  }

  ngOnInit(): void {
    this.generateData();
  }
  
  getExpenses(): Array<Expense> {
    return this.expenses
  }

  spendingOfTheWeek(): void {
    let day = new Date().getDay()
    let monday = new Date(new Date().setDate(new Date().getDate() - day+1))
    let endWeek = new Date(new Date().setDate(monday.getDate() + 6))
    
    let arry = this.expenses.filter((date: Expense) => date.date >= monday && date.date <= endWeek)
    
    let grandTableau = [];
    for(let i = 0; i < 7; i++){
        let data = new Date(new Date().setDate(monday.getDate() + i))
        let result = arry.filter(item => item.date.getDate() === data.getDate());
        let count = 0;
        result.filter(item => count += item.amount)
        grandTableau.push(count)
    }
   this.totalSpendingWeek.push(...grandTableau)
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
        "Mickael",
        "Payet"
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
