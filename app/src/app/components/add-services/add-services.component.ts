import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';


@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
})
export class AddServicesComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(formAddServicesDialog, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'app-form-add-service',
  templateUrl: './form-add-service/form-add-service.html',
  styleUrls: ['./add-services.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatDialogModule, FormsModule, CommonModule]
})


export class formAddServicesDialog {

  service = {
    service: "",
    quantity: "",
    priceUnit:"",
    total:"",
  }
  constructor(public dialogRef: MatDialogRef<formAddServicesDialog>, public _invoiceService:InvoiceService) {}

  onSubmit(): void{
    this._invoiceService.addServiceInExampleInvoice(this.service)
    this.service = {
      service: "",
      quantity: "",
      priceUnit:"",
      total:"",
    }
  }
}
