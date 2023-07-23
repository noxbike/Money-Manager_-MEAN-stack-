import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-statistique-view',
  templateUrl: './statistique-view.component.html',
  styleUrls: ['./statistique-view.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule]
})
export class StatistiqueViewComponent {

}
