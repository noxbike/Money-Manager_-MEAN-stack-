import { Component, OnInit } from '@angular/core';
import { Chart }from 'chart.js';
import { Expense } from 'src/app/interfaces/expense';
import { ExpensesDataService } from 'src/app/services/expensesData/expenses-data.service';

@Component({
  selector: 'app-category-spending',
  templateUrl: './category-spending.component.html',
  styleUrls: ['./category-spending.component.scss'],
  standalone: true
})
export class CategorySpendingComponent implements OnInit {
  pieChart: any;
  label = ['Matériel', 'Gazole', 'Employée', 'Prélèvement/Frais', 'Repas', 'Réparations/Maintenance'];
  spendingData: Expense[] = [];
  chartData: number[] = [];

  constructor(public _expenseService: ExpensesDataService){}
  ngOnInit() {
    this.spendingData = this._expenseService.getExpenses();
    this.chartData = this.counterSpendingCategory();
    this.initPieChart();
  }

  counterSpendingCategory():number[] {
    let category = []
    for(let item of this.label){
      let countCategory = this.spendingData.filter(expense => expense.tag === item)
      category.push(countCategory.length);
    }
    return category;
  }

  initPieChart() {
    const canvas: any = document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');

    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.label,
        datasets: [
          {
            data: this.chartData, // Remplacez ces valeurs par vos données
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#ff0000', '#808080' ], // Couleurs des secteurs
            
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        
        plugins:{
          legend:{
            position: 'left', // Place les légendes à gauche
            align: 'center', // Aligne le texte des légendes à gauche
            labels: {
              color: 'white'
            }
          }
        }
      }
    });
  }
}
