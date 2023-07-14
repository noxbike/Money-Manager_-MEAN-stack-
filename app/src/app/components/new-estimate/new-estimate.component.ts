import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { NewDocumentComponent } from 'src/app/layout/new-document/new-document.component';

@Component({
  selector: 'app-new-estimate',
  templateUrl: './new-estimate.component.html',
  styleUrls: ['./new-estimate.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule]
})
export class NewEstimateComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(NewDocumentComponent, {
      width: '',
      enterAnimationDuration,
      exitAnimationDuration,
      data: "estimate"
    });
  }
}