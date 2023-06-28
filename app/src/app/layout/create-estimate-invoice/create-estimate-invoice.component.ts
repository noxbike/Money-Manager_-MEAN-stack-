import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { Invoice } from 'src/app/interfaces/invoice';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-estimate-invoice',
  templateUrl: './create-estimate-invoice.component.html',
  styleUrls: ['./create-estimate-invoice.component.scss'],
  standalone: true,
  imports:[CommonModule, FormsModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatDividerModule]
})
export class CreateEstimateInvoiceComponent implements OnInit {
  searchTerm: string = "";
  date: Date = new Date();
  invoices!: Invoice[];
  filteredInvoices!: Invoice[];

  constructor(private _invoiceService: InvoiceService){}

  ngOnInit(): void {
      this.invoices = this._invoiceService.getInvoices();
      this.filteredInvoices = this.invoices;
  }

  searchInvoices():void{
    if (this.searchTerm) {
      const findByInvoiceNumber = this.invoices.filter(invoice =>
        invoice.invoiceNumber.toLowerCase().includes(this.searchTerm.toLowerCase()));
      const findByRecipient = this.invoices.filter(invoice =>
          invoice.recipient.toLowerCase().includes(this.searchTerm.toLowerCase()));
      this.filteredInvoices = [...findByRecipient, ...findByInvoiceNumber]
    } else {
      this.filteredInvoices = this.invoices;
    }
  }

  searchInvoicesByDate(){
    if(this.date){
      this.filteredInvoices = this.invoices.filter(invoice =>
      invoice.date.getTime() == new Date(this.date).getTime());
    } 
    else {
      this.filteredInvoices = this.invoices;
    }
  }
}
