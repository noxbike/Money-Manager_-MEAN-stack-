import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule]
})
export class AddExpenseComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(formAddExpenseDialog, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'formAddExpense',
  templateUrl: 'formAddExpense/formAddExpense.html',
  styleUrls: ['./add-expense.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule,
    CommonModule
  ],
})
export class formAddExpenseDialog {
  selectedFileName!: string;
  tag: string[] = ["Matériel", "Gazole", "Employée", "Prélèvement/Frais" , "Repas", "Réparations/Maintenance" ]

  handleFileInputChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const selectedFile: File = fileList[0];
      this.selectedFileName = selectedFile.name;
    } else {
      this.selectedFileName = '';
    }
  }
}