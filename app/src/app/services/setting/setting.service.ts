import { Injectable } from '@angular/core';
import { Account } from 'src/app/interfaces/account';
import { BusinessInfo } from 'src/app/interfaces/businessInfo';
import { ConditionDocument } from 'src/app/interfaces/conditionDocument';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private account: Account = {
    pseudo:"jericmorel",
    password: "monpasswordprivate",
  }
  private businessInfo: BusinessInfo = {
    name: "Morel Josian éric",
    logo: "assets/logoMorel.png",
    businessName: "Morel Construction Réunion",
    legalStatus: "Entreprise individuel",
    address: "37 chemin isnard Piton Sainte-Rose",
    email: "jericmorel@gmail.com",
    codeApe: '4120A',
    siret: '816 636 003 00019',
    iban: "FR76 1744 8000 01PO MOW5 LH5F N15",
    tvaCode: "FR38818636003"
  }

  private condition: ConditionDocument = {
    deadLinePay: "30",
    estimate: "Veuillez nous retourner le devis signé et précédé de la mention: Bon pour accord",
    invoices: "Aucun escompte consenti pour règlement anticipé En cas de retard de paiement, une pénalité de 3 fois le taux d'intérêt légal sera appliquée, à laquelle s'ajoutera une indemnité forfaitaire pour frais de recouvrement de 40€.",
    noTvaJustify:"Tva non applicable, art 293 B du CGI"
  }

  constructor() { }

  // READ
  getAccount(): Account {
    return this.account;
  }
  getCondition(): ConditionDocument {
    return this.condition;
  }

  getBusinessInfo(): BusinessInfo {
    return this.businessInfo;
  }

  // UPDATE
  updateAccount(updatedAccount: Account): void {
    this.account = updatedAccount;
  }

  updateBusinessInfo(updatedBusinessInfo: BusinessInfo): void {
    this.businessInfo = updatedBusinessInfo;
  }

  updateCondition(updatedCondition: ConditionDocument): void {
    this.condition = updatedCondition;
  }
}
