import { Injectable } from '@angular/core';
import { Recipient } from 'src/app/interfaces/recipient';

@Injectable({
  providedIn: 'root'
})
export class RecipientService {

  private recipients: Recipient[] = [];

  constructor() {
    // Initialisez les destinataires avec des données fictives ou chargez-les depuis une source de données externe.
    this.recipients = [
      { id: 1, name: 'Destinataire 1', email: 'destinataire1@example.com', address: 'Adresse 1', codePostal: "97439", city: "Sainte-Rose", phoneNumber:"0123456789" },
      { id: 2, name: 'Destinataire 2', email: 'destinataire2@example.com', address: 'Adresse 2', codePostal: "97439", city: "Sainte-Rose", phoneNumber:"0123456789" },
      { id: 3, name: 'Destinataire 3', email: 'destinataire3@example.com', address: 'Adresse 3', codePostal: "97439", city: "Sainte-Rose", phoneNumber:"0123456789" }
    ];
  }

  getRecipients(): Recipient[] {
    // Return all recipients list.
    return this.recipients;
  }

  getRecipient(id: number): Recipient | undefined {
    // Return recipient with matching id.
    return this.recipients.find(recipient => recipient.id === id);
  }

  addRecipient(recipient: Recipient): void {
    // Add recipient to list.
    let lastRecipientId = this.recipients.slice(-1)[0].id;
    recipient.id = lastRecipientId + 1;
    this.recipients.push(recipient);
  }

  updateRecipient(recipient: Recipient): void {
    // Met à jour les informations d'un destinataire existant.
    const index = this.recipients.findIndex(r => r.id === recipient.id);
    if (index !== -1) {
      this.recipients[index] = recipient;
    }
  }

  deleteRecipient(id: number): void {
    // Supprime un destinataire de la liste en fonction de son ID.
    const index = this.recipients.findIndex(recipient => recipient.id === id);
    if (index !== -1) {
      this.recipients.splice(index, 1);
    }
  }
}