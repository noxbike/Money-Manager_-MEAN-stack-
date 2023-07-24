import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-health-chart',
  templateUrl: './health-chart.component.html',
  styleUrls: ['./health-chart.component.scss'],
  standalone: true
})
export class HealthChartComponent implements OnInit {
  areaChart: any;

  ngOnInit() {
    this.initAreaChart();
  }

  initAreaChart() {
    const canvas: any = document.getElementById('areaChart');
    const ctx = canvas.getContext('2d');

    this.areaChart = new Chart(ctx, {
      type: 'line', // Utilisez le type "line" pour créer un graphique de type "area chart"
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
        datasets: [
          {
            label: 'Données',
            data: [30, 40, 25, 35], // Remplacez ces valeurs par vos données
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
