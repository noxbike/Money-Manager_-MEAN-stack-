import { Component, OnInit } from '@angular/core';
import { Chart }from 'chart.js';

@Component({
  selector: 'app-category-spending',
  templateUrl: './category-spending.component.html',
  styleUrls: ['./category-spending.component.scss'],
  standalone: true
})
export class CategorySpendingComponent implements OnInit {
  pieChart: any;

  ngOnInit() {
    this.initPieChart();
  }

  initPieChart() {
    const canvas: any = document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');

    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Material', 'Gasoil', 'Salary', 'Taxes', 'Repas', 'Réparations/Maintenance'],
        datasets: [
          {
            data: [30, 20, 25, 15, 50, 10], // Remplacez ces valeurs par vos données
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
