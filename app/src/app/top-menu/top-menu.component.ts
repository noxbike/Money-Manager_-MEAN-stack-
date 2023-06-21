import { Component, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class TopMenuComponent {

}
