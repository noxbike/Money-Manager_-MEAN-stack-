import { Injectable } from '@angular/core';
import { Invoice } from 'src/app/interfaces/invoice';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoices: Invoice[] = [];

  constructor() {
    // Initialisation avec des données factices
    this.invoices = [
    
        {
          date: new Date(2023, 6, 1),
          url: 'assets/facture2.pdf',
          invoiceNumber: "INV001",
          recipient: "John Doe"
        },
        {
          date: new Date(2023, 6, 2),
          url: 'assets/facture2.pdf',
          invoiceNumber: "INV002",
          recipient: "Jane Smith"
        },
        // ... Les 48 autres invoices pour le mois de juin
        {
          date: new Date(2023, 6, 30),
          url: 'assets/facture2.pdf',
          invoiceNumber: "INV050",
          recipient: "Alice Johnson"
        },    
      { date: new Date(), url: 'assets/facture2.pdf', invoiceNumber: 'INV001', recipient: 'John Doe' },
      { date: new Date(), url: 'assets/facture2.pdf', invoiceNumber: 'INV002', recipient: 'Jane Smith' }
    ];
  }

  getInvoice(invoiceNumber: string): Invoice | undefined {
    return this.invoices.find(invoice => invoice.invoiceNumber === invoiceNumber);
  }

  getInvoices(): Invoice[] {
    return this.invoices;
  }

  deleteInvoice(invoiceNumber: string): void {
    this.invoices = this.invoices.filter(invoice => invoice.invoiceNumber !== invoiceNumber);
  }

  updateInvoice(updatedInvoice: Invoice): void {
    const index = this.invoices.findIndex(invoice => invoice.invoiceNumber === updatedInvoice.invoiceNumber);
    if (index !== -1) {
      this.invoices[index] = updatedInvoice;
    }
  }

  newInvoice(invoice: Invoice): void {
    this.invoices.push(invoice);
  }
}
