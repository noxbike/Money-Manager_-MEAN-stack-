import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-create-estimate-invoice',
  templateUrl: './create-estimate-invoice.component.html',
  styleUrls: ['./create-estimate-invoice.component.scss'],
  standalone: true,
  imports:[MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatDividerModule]
})
export class CreateEstimateInvoiceComponent {
  searchTerm: string = "";

  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
  }
}
