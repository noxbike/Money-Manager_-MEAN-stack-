import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ExpensesDataService } from 'src/app/services/expensesData/expenses-data.service';
import { AccountStatusDataService } from 'src/app/services/accountStatusData/account-status-data.service';

@Component({
  selector: 'app-health-chart',
  templateUrl: './health-chart.component.html',
  styleUrls: ['./health-chart.component.scss'],
  standalone: true
})
export class HealthChartComponent implements OnInit {
  areaChart: any;
  data:number[] = []

  constructor(public _accountStatusDataService: AccountStatusDataService){}

  ngOnInit() {
    this.getData()
    this.initAreaChart();
  }

  getData() : void{
    let today =  new Date();
    let day = today.getDay();
    today.setHours(23);
    today.setMinutes(59);
    let startWeek = new Date(today.setDate(today.getDate() - (day + 1)));
    let endWeek = new Date(today.setDate(startWeek.getDate() + 7))
    let item = this._accountStatusDataService.stateOfAccountEachDay()
    let data = [];
    for(let key of item){
      if(key.date >= startWeek && key.date <= endWeek)
      data.push(key.sum)
    }
    this.data = data
  }

  initAreaChart() {
    const canvas: any = document.getElementById('areaChart');
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
            label: 'Données',
            data: this.data, // Remplacez ces valeurs par vos données
            fill: true,
            tension: 0.5,
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Couleur de remplissage de l'aire
            borderColor: 'rgba(54, 162, 235, 1)', // Couleur de la bordure
            borderWidth: 1,
            pointRadius: 3, // Taille des points
            pointBackgroundColor: 'rgba(54, 162, 235, 1)' // Couleur des points
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
