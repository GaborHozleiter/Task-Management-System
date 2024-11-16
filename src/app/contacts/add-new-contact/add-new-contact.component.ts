import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-new-contact.component.html',
  styleUrl: './add-new-contact.component.scss'
})
export class AddNewContactComponent {

  createForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.createForm.valid) {
      const { username, email, phone } = this.createForm.value;
      console.log('Login data:', { username, email, phone });
    }
  }

}
