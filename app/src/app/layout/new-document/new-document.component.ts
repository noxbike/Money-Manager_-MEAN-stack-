import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRecipientComponent } from 'src/app/components/new-recipient/new-recipient.component';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
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
    MatDialogModule,
    FormsModule
  ]
})
export class NewDocumentComponent implements OnInit {
  AllRecipients: Recipient[] = []
  newInvoice!: Invoice;

  constructor(public _recipientService: RecipientService, public _invoiceService: InvoiceService, @Inject(MAT_DIALOG_DATA) public data:"estimate"|"invoice"){}

    ngOnInit(): void {
      this.AllRecipients = this._recipientService.getRecipients()
      this.newInvoice = this._invoiceService.getExampleInvoice()
      this.newInvoice.invoiceNumber = this.generateExampleInvoiceNumber()
      this.newInvoice.type = this.data
  
  }
  getTotal():number{
    let total = 0;
    this.newInvoice.services.forEach(service => total += parseInt(service.total))
    return total;
  }

  generateExampleInvoiceNumber():string{
    let found = this._invoiceService.getInvoices().filter((value:any) => value.invoiceNumber.includes(`${new Date().getMonth()+1}${new Date().getFullYear()}`))
    found.sort((a: Invoice,b: Invoice) => parseInt(a.invoiceNumber) - parseInt(b.invoiceNumber))
    let data = found.slice(-1)[0]
    let result = data.invoiceNumber.slice(0,1)
    return `${parseInt(result) + 1}${new Date().getMonth()+1}${new Date().getFullYear()}`
    }

  onSubmit(): void {
    this._invoiceService.newInvoice(this.newInvoice);
  }
}
