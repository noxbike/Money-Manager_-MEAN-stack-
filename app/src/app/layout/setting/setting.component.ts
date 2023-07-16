import { Component, OnInit } from '@angular/core';
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
export class SettingComponent implements OnInit {
  account= {
    pseudo:"",
    password:"",
  }
  businessInfo: BusinessInfo = {
    name: "",
    logo: "",
    businessName: "",
    legalStatus: "",
    address: "",
    email: "",
    codeApe: '',
    siret: '',
    iban: "",
    tvaCode: ""
  }
  
  condition: ConditionDocument = {
    deadLinePay: "",
    estimate: "",
    invoices: "",
    noTvaJustify:""
  }

  constructor(private _settingService: SettingService, public dialog: MatDialog){
    this.businessInfo = this._settingService.getBusinessInfo();
    this.condition = this._settingService.getCondition();
    this.account = this._settingService.getAccount();
  }

  ngOnInit(): void {
      
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
    FormsModule
  ],
})
export class formAccountDialog implements OnInit {
  account= {
    pseudo:"",
    password:"",
  }

  constructor(public _settingSevice: SettingService){}

  ngOnInit(): void {
      this.account =this._settingSevice.getAccount();
  }

  onSubmit(): void{
    this._settingSevice.updateAccount(this.account);
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
export class formBusinessInfoDialog implements OnInit {
  businessInfo!: BusinessInfo

  constructor(private _settingSevice: SettingService){
    this.businessInfo ={...this._settingSevice.getBusinessInfo()};
  }
  
  ngOnInit(): void {
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
export class formConditionDocumentDialog implements OnInit {
  condition: ConditionDocument = {
    deadLinePay: "",
    estimate: "",
    invoices: "",
    noTvaJustify:""
  }

  constructor(public _settingSevice: SettingService){}

  ngOnInit(): void {
      this.condition = this._settingSevice.getCondition();
  }

  onSubmit(): void {
    this._settingSevice.updateCondition(this.condition)
  }
}