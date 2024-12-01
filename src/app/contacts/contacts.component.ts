import { Component } from '@angular/core';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [AddNewContactComponent, CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  addContactWindowOpen: boolean = false;
  contactList: { name: string; email: string; phone: string }[] = [
    { name: 'Anna Müller', email: 'anna.mueller@join.de', phone: '0157896' },
    { name: 'Peter Schmidt', email: 'peter.schmidt@join.de', phone: '0151234' },
    { name: 'Sven Becker', email: 'sven.becker@join.de', phone: '0155678' },
    { name: 'Laura Fischer', email: 'laura.fischer@join.de', phone: '0158765' },
    { name: 'Mia Wagner', email: 'mia.wagner@join.de', phone: '0153456' },
    { name: 'Jonas Weber', email: 'jonas.weber@join.de', phone: '0152345' },
    { name: 'Tom Hoffmann', email: 'tom.hoffmann@join.de', phone: '0156543' },
    { name: 'Emma Krause', email: 'emma.krause@join.de', phone: '0154321' },
    { name: 'Lena Schulz', email: 'lena.schulz@join.de', phone: '0157890' },
    { name: 'Max Wolf', email: 'max.wolf@join.de', phone: '0150987' }
  ];
  clickedContact: { name: string; email: string; phone: string } | null = null;


  addContact() {
    this.addContactWindowOpen = true;
  }

  openContact(i: number): void{
    this.clickedContact = this.contactList[i];
    alert(this.clickedContact.name);
  }

}
