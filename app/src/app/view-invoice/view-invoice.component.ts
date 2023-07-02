import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.scss'],
  standalone: true,
  imports:[CommonModule]
})
export class ViewInvoiceComponent implements OnInit {
  date = new Date();
  clientInfo = {
    name: 'Sarana Piscines',
    address: '157 Chemin Berthaut,\n Saint-Paul 97435.',
    Tva: 'FR53903220978'
  }
  infoBusiness = {
    name: 'Morel Construction Réunion',
    ownerName: 'Morel Josian éric',
    email: 'jericmorel@gmail.com',
    phoneNumber: '0692 31 82 27',
    legalStatus: 'Entrepreneur individuel',
    capital: '0',
    codeApe: '4120A',
    siret: '818 636 003 00019',
    address: '31 chemin isnard Piton Sainte-Rose, Réunion'
  }
  object = 'Traveaux réalisés en sous-traitance'
  legalInfo = 'En cas de retard de paiment, Indemnité forfaitaire pour frais de recouvrement 40 euro (art.L441-3 et L.441-6 code du commerce)'
  services = [
    {services: 'Montage de pierre', Quantity: '40m²', priceUnit: '150', total:6000},
    {services: 'Montage de pierre', Quantity: '40m²', priceUnit: '150', total:6000},
    {services: 'Montage de pierre', Quantity: '40m²', priceUnit: '150', total:6000},
    {services: 'Montage de pierre', Quantity: '40m²', priceUnit: '150', total:6000},
    {services: 'Montage de pierre', Quantity: '40m²', priceUnit: '150', total:6000}
  ]

  total = 0
  isInvoice = true

  ngOnInit(): void {
      this.total = this.getTotal()
  }

  getTotal(): number{
    let count:number = 0
    for(let service of this.services){
      count += service.total
    }
    return count
  }
}
