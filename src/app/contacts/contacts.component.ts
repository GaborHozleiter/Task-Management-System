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

  addContact(){
    this.addContactWindowOpen = true;
  }

}
