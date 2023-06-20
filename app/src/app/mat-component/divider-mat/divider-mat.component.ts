import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-divider-mat',
  templateUrl: './divider-mat.component.html',
  styleUrls: ['./divider-mat.component.scss'],
  standalone: true,
  imports: [MatListModule, MatDividerModule],
})
export class DividerMatComponent {

}
