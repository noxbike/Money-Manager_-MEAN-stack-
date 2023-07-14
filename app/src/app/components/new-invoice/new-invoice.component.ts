import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { NewDocumentComponent } from 'src/app/layout/new-document/new-document.component';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss'],
  standalone:true,
  imports: [MatButtonModule, MatDialogModule]
})
export class NewInvoiceComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(NewDocumentComponent, {
      width: '',
      enterAnimationDuration,
      exitAnimationDuration,
      data:"invoice"
    });
  }
}