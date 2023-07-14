import { Injectable, OnInit } from '@angular/core';
import { Invoice, service } from 'src/app/interfaces/invoice';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService implements OnInit{
  private exampleInvoice: Invoice = {
    type:"invoice",
    date:new Date(),
    invoiceNumber:"" ,
    title:"",
    recipient: "",
    services: [],
  }
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
      { type:"invoice", date: new Date(2023, 6, 4),title:"traveaux en sous traitance", services:[{service: 'montage de pierre', quantity: "100", priceUnit:"2", total: "200"}], invoiceNumber: "362023", recipient: "John Doe" },
      { type:"invoice", date: new Date(2023, 6, 2),title:"traveaux en sous traitance", services:[{service: 'montage de pierre', quantity: "100", priceUnit:"2", total: "200"}], invoiceNumber: "262023", recipient: "Jane Smith" },
      { type:"invoice", date: new Date(2023, 6, 30),title:"traveaux en sous traitance", services:[{service: 'montage de pierre', quantity: "100", priceUnit:"2", total: "200"}], invoiceNumber: "462023", recipient: "Alice Johnson" },    
      { type:"invoice", date: new Date(2023, 7, 10),title:"traveaux en sous traitance", services:[{service: 'montage de pierre', quantity: "100", priceUnit:"2", total: "200"}], invoiceNumber: "172023", recipient: 'John Doe' },
      { type:"invoice", date: new Date(2023,6,1),title:"traveaux en sous traitance", services:[{service: 'montage de pierre', quantity: "100", priceUnit:"2", total: "200"}], invoiceNumber: "162023", recipient: 'Jane Smith' }
    ];
  }

  ngOnInit(): void {
  }

  getExampleInvoice(): any{
    return this.exampleInvoice
  }

  addServiceInExampleInvoice(service: service): void{
    this.exampleInvoice.services.push(service);
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
	this.exampleInvoice = {
		type:"invoice",
		date:new Date(),
		invoiceNumber:"" ,
		title:"",
		recipient: "",
		services: [],
	  }
  }
}
