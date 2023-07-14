import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRecipientComponent } from 'src/app/components/new-recipient/new-recipient.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddServicesComponent, formAddServicesDialog } from 'src/app/components/add-services/add-services.component';
import { Recipient } from 'src/app/interfaces/recipient';
import { RecipientService } from 'src/app/services/recipient/recipient.service';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { Invoice } from 'src/app/interfaces/invoice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule,
    CommonModule,
    NewRecipientComponent,
    AddServicesComponent,
    formAddServicesDialog,
    FormsModule
  ]
})
export class NewDocumentComponent implements OnInit {
  AllRecipients: Recipient[] = []
  newInvoice!: Invoice;

  constructor(public _recipientService: RecipientService, public _invoiceService: InvoiceService){}

    ngOnInit(): void {
      this.AllRecipients = this._recipientService.getRecipients()
      this.newInvoice = this._invoiceService.getExampleInvoice()
  
  }
  getTotal():number{
    let total = 0;
    this.newInvoice.services.forEach(service => total += parseInt(service.total))
    return total;
  }

  onSubmit(): void {
    this._invoiceService.newInvoice(this.newInvoice);
    console.log(this._invoiceService.getInvoices())
  }
}
