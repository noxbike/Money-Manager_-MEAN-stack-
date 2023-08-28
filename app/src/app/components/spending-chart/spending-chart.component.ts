import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ExpensesDataService } from 'src/app/services/expensesData/expenses-data.service';
import { Expense } from 'src/app/interfaces/expense';

@Component({
  selector: 'app-spending-chart',
  templateUrl: './spending-chart.component.html',
  styleUrls: ['./spending-chart.component.scss']
})
export class SpendingChartComponent implements OnInit {
  areaChart: any;
  data: number[] = [];

  constructor(private _expensesDataService: ExpensesDataService){}
  
  ngOnInit(): void {
    this.data = this.getData()
    this.initAreaChart();
  }

  getData(): number[] {
    let expenseData = this._expensesDataService.getSumExpensesForEachDay();
    let day = new Date().getDay()
    let monday = new Date(new Date().setDate(new Date().getDate() - day+1))
    let endWeek = new Date(new Date().setDate(monday.getDate() + 7))

    let array = expenseData.filter((date) => date.date >= monday && date.date <= endWeek)
    let result = []
    for(let item of array){
      result.push(item.sum)
    }
    return result
  }

  initAreaChart() {
    const canvas: any = document.getElementById('lineChart2');
    const ctx = canvas.getContext('2d');

    this.areaChart = new Chart(ctx, {
      type: 'line', // Utilisez le type "line" pour créer un graphique de type "area chart"
      data: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        datasets: [
          {
            label: 'spending',
            data: this.data, // Remplacez ces valeurs par vos données
            tension: 0.5,
            backgroundColor: 'rgba(0, 128, 0, 0.2)', // Couleur de remplissage de l'aire
            borderColor: 'rgba(200, 0, 0, 1)', // Couleur de la bordure
            borderWidth: 1,
            pointRadius: 3, // Taille des points
            pointBackgroundColor: 'rgba(200, 0, 0, 1)', // Couleur des points
            pointBorderColor: 'rgba(200, 0, 0, 1)'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins:{
          legend:{
            display: false,
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            grid:{
              display: false,
            }
          },
          y: {
            beginAtZero: true,
            grid:{
              display: false,
            }
          }
        }
      }
    });
  }
}
