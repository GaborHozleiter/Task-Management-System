import { Component } from '@angular/core';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [AddNewContactComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
