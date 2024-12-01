import { Component, OnInit } from '@angular/core';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [AddNewContactComponent, CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit{

  addContactWindowOpen: boolean = false;
  contactList: { name: string; email: string; phone: string, monogram: string }[] = [
    { name: 'anna', email: 'anna.mueller@join.de', phone: '0157896', monogram : ''},
    { name: 'Peter Schmidt', email: 'peter.schmidt@join.de', phone: '0151234', monogram : '' },
    { name: 'Sven Becker', email: 'sven.becker@join.de', phone: '0155678', monogram : ''  },
    { name: 'Laura Fischer', email: 'laura.fischer@join.de', phone: '0158765', monogram : ''  },
    { name: 'Mia Wagner', email: 'mia.wagner@join.de', phone: '0153456', monogram : ''  },
    { name: 'Jonas Weber', email: 'jonas.weber@join.de', phone: '0152345', monogram : ''  },
    { name: 'Tom Hoffmann', email: 'tom.hoffmann@join.de', phone: '0156543', monogram : ''  },
    { name: 'Emma Krause', email: 'emma.krause@join.de', phone: '0154321', monogram : ''  },
    { name: 'Lena Schulz', email: 'lena.schulz@join.de', phone: '0157890', monogram : ''  },
    { name: 'Max Wolf', email: 'max.wolf@join.de', phone: '0150987', monogram : ''  }
  ];
  clickedContact: { name: string; email: string; phone: string, monogram: string } | null = null;
  firstName : string[] = [];
  constructor() {

  }

  ngOnInit(): void {
    this.createMonogram();
  }

  createMonogram() {
    this.contactList.forEach(contact => {
      this.firstName = contact.name.split('');
      if(this.firstName.indexOf(" ") + 1 > 1){
        let indexOfSpace = this.firstName.indexOf(" ") + 1;
      contact.monogram = this.firstName[0].toUpperCase() + this.firstName[indexOfSpace].toUpperCase();
      } else {
        contact.monogram = this.firstName[0].toUpperCase();
      }
    });
  }

  addContact() {
    this.addContactWindowOpen = true;
  }

  openContact(i: number): void{
    this.clickedContact = this.contactList[i];
  }

}
