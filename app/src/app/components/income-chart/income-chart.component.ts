import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-income-chart',
  templateUrl: './income-chart.component.html',
  styleUrls: ['./income-chart.component.scss'],
  standalone: true
})
export class IncomeChartComponent {
  areaChart: any;

  ngOnInit() {
    this.initAreaChart();
  }

  initAreaChart() {
    const canvas: any = document.getElementById('lineChart');
    const ctx = canvas.getContext('2d');

    this.areaChart = new Chart(ctx, {
      type: 'line', // Utilisez le type "line" pour créer un graphique de type "area chart"
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
        datasets: [
          {
            label: 'Données',
            data: [30, 40, 25, 35], // Remplacez ces valeurs par vos données
            tension: 0.5,
            backgroundColor: 'rgba(0, 128, 0, 0.2)', // Couleur de remplissage de l'aire
            borderColor: 'rgba(0, 128, 0, 1)', // Couleur de la bordure
            borderWidth: 1,
            pointRadius: 3, // Taille des points
            pointBackgroundColor: 'rgba(0, 128, 0, 1)', // Couleur des points
            pointBorderColor: 'rgba(0, 128, 0, 1)'
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
