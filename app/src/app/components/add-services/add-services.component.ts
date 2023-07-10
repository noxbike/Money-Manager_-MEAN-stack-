import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


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
  imports: [MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatDialogModule, FormsModule]
})


export class formAddServicesDialog {
  @Output() addService: EventEmitter<any> = new EventEmitter<any>();

  service = {
    service: "",
    quantity: "",
    priceUnit:"",
    total:"",
  }
  constructor(public dialogRef: MatDialogRef<formAddServicesDialog>) {}

  onSubmit(): void{
    this.addService.emit('yo');
  }
}
