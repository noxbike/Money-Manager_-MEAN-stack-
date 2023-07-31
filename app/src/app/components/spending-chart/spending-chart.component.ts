import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ExpensesDataService } from 'src/app/services/expensesData/expenses-data.service';

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
    this._expensesDataService.generateData()
    this._expensesDataService.spendingOfTheWeek();
    this.data = this._expensesDataService.getTotalofWeek();
    this.initAreaChart();
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
