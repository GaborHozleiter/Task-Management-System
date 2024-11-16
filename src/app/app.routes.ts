import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DetailsAreaComponent } from './main/details-area/details-area.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    {
        path: '',
        component: DetailsAreaComponent,
        children: [
          { path: 'privacy-policy', component: PrivacyPolicyComponent },
          { path: 'imprint', component: ImprintComponent },
          { path: 'contacts', component: ContactsComponent }
        ]
      },
];
