import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { newEstimateFormDialog } from '../new-estimate/new-estimate.component';
import { Recipient } from 'src/app/interfaces/recipient';
import { RecipientService } from 'src/app/services/recipient/recipient.service';
@Component({
  selector: 'app-new-recipient',
  templateUrl: './new-recipient.component.html',
  styleUrls: ['./new-recipient.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule]
})
export class NewRecipientComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(NewRecipientFormDialog, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'app-form-recipient',
  templateUrl: './form-recipient/form-recipient.html',
  styleUrls: ['./new-recipient.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, FormsModule]
})
export class NewRecipientFormDialog {
  recipient: Recipient = {
    id: 0,
    name: '',
    email: '',
    codePostal: '',
    address: '',
    city:'',
    phoneNumber:''
  }
  constructor(public dialogRef: MatDialogRef<newEstimateFormDialog>, public _recipientService: RecipientService) {}

  onSubmit(): void{
   this._recipientService.addRecipient(this.recipient);
  }
}
