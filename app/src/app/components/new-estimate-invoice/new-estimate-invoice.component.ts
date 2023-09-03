import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { NewDocumentComponent } from 'src/app/layout/new-document/new-document.component';

@Component({
  selector: 'app-new-estimate-invoice',
  templateUrl: './new-estimate-invoice.component.html',
  styleUrls: ['./new-estimate-invoice.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule]
})
export class NewEstimateInvoiceComponent {
  @Input() title = ""
  data = "";
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(NewDocumentComponent, {
      width: '',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.title == "New Estimate"? 'estimate' : 'invoice'
    });
  }
}