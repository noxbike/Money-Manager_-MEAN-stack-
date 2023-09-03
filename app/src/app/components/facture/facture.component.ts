import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { NewEstimateInvoiceComponent } from '../new-estimate-invoice/new-estimate-invoice.component';
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule, NewEstimateInvoiceComponent]
})
export class FactureComponent {

}
