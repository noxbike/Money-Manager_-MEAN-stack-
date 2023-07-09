import { Injectable } from '@angular/core';
import { Invoice } from 'src/app/interfaces/invoice';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoices: Invoice[] = [];
  private BusinessInfo: {} = {
    logo: "assets/logo.png",
    BusinessName: "Morel Construction Réunion",
    legalStatus: "Entreprise individuel",
    name: "Morel Josian éric",
    address: "37 chemin isnard Piton Sainte-Rose",
    email: "jericmorel@gmail.com",
    codeApe: '4120A',
    siret: '816 636 003 00019'
  }

  constructor() {
    // Initialisation avec des données factices
    this.invoices = [
      { date: new Date(2023, 6, 1), url: 'assets/facture2.pdf', invoiceNumber: "INV001", recipient: "John Doe" },
      { date: new Date(2023, 6, 2), url: 'assets/facture2.pdf', invoiceNumber: "INV002", recipient: "Jane Smith" },
      { date: new Date(2023, 6, 30), url: 'assets/facture2.pdf', invoiceNumber: "INV050", recipient: "Alice Johnson" },    
      { date: new Date(2023, 7, 24), url: 'assets/facture2.pdf', invoiceNumber: 'INV001', recipient: 'John Doe' },
      { date: new Date(2023,6,1), url: 'assets/facture2.pdf', invoiceNumber: 'INV002', recipient: 'Jane Smith' }
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
