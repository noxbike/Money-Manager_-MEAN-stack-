export interface Invoice {
    type: 'estimate'|'invoice'
    date: Date;
    services: service[];
    title: string;
    invoiceNumber: string;
    recipient: string;
  }

  export interface service {
    service: string;
    quantity: string;
    priceUnit: string;
    total: string 
  }
  