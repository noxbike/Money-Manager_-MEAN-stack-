import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { NewInvoiceComponent} from '../new-invoice/new-invoice.component';
import { NewEstimateComponent } from '../new-estimate/new-estimate.component';
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule, NewInvoiceComponent, NewEstimateComponent]
})
export class FactureComponent {

}
