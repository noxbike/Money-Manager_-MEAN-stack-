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
import { AddServicesComponent } from 'src/app/components/add-services/add-services.component';
import { Recipient } from 'src/app/interfaces/recipient';
import { RecipientService } from 'src/app/services/recipient/recipient.service';

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
    AddServicesComponent
  ]
})
export class NewDocumentComponent implements OnInit {
  AllRecipients: Recipient[] = []
  newInvoice = {
    date:new Date().toISOString(),
    invoiceNumber:`1${new Date().getMonth()+1}${new Date().getFullYear()}` ,
    title:"",
    recipient: "",
    services: [],
  }

  constructor(public _recipientService: RecipientService){}
  ngOnInit(): void {
      this.AllRecipients = this._recipientService.getRecipients()
  }

  onAddService(service: any) : void{
    console.log(service)
  }

}
