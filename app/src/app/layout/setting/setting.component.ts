import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BusinessInfo } from 'src/app/interfaces/businessInfo';
import { ConditionDocument } from 'src/app/interfaces/conditionDocument';
import { SettingService } from 'src/app/services/setting/setting.service';
import { Account } from 'src/app/interfaces/account';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class SettingComponent {
 
  constructor(private _settingService: SettingService, public dialog: MatDialog){}


  getAccount(): Account {
    return this._settingService.getAccount();
  }

  getBusinessInfo(): BusinessInfo{
    return this._settingService.getBusinessInfo();
  }

  getCondition(): ConditionDocument{
    return this._settingService.getCondition();
  }
  
  editAccount(enterAnimationDuration: string, exitAnimationDuration: string):void{
    this.dialog.open(formAccountDialog, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  editBusinessInfo(enterAnimationDuration: string, exitAnimationDuration: string):void{
    this.dialog.open(formBusinessInfoDialog, {
      width: '',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  editConditionDocument(enterAnimationDuration: string, exitAnimationDuration: string):void{
    this.dialog.open(formConditionDocumentDialog, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'formAccountDialog',
  templateUrl: 'form-account/form-account.html',
  styleUrls: ['./setting.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    CommonModule
  ],
})
export class formAccountDialog {
  account!:Account
  oldPassword!:string;
  password: string = "";
  repeatPassword: string = "";
  message: string = "";

  constructor(public _settingSevice: SettingService, public dialog: MatDialog){
    this.account = _settingSevice.getAccount();
  }

  getMessage():string{
    return this.message
  }
  onSubmit(): void{
    if(this.oldPassword === this.account.password){
      if(this.repeatPassword === this.password){
        this._settingSevice.updateAccount(this.account);
        this.dialog.closeAll
      }
      else{
        this.message = "Your repeat password not match"
      }
    }
    else{
      this.message = "Your old password is incorrect try again"
    }
  }
}

@Component({
  selector: 'formBusinessInfoDialog',
  templateUrl: 'form-businessInfo/form-businessInfo.html',
  styleUrls: ['./setting.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
})
export class formBusinessInfoDialog{
  businessInfo: BusinessInfo

  constructor(private _settingSevice: SettingService) {
    this.businessInfo = {...this._settingSevice.getBusinessInfo()};
  }

  onSubmit(): void {
    this._settingSevice.updateBusinessInfo(this.businessInfo)
  }
}
@Component({
  selector: 'formConditionDocumentDialog',
  templateUrl: 'form-conditionDocument/form-conditionDocument.html',
  styleUrls: ['./setting.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
})
export class formConditionDocumentDialog {
  condition: ConditionDocument

  constructor(public _settingSevice: SettingService){
    this.condition = {...this._settingSevice.getCondition()};
  }

  onSubmit(): void {
    this._settingSevice.updateCondition(this.condition)
  }
}