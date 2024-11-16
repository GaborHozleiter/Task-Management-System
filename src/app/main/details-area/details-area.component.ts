import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-details-area',
  standalone: true,
  imports: [ RouterOutlet],
  templateUrl: './details-area.component.html',
  styleUrl: './details-area.component.scss'
})
export class DetailsAreaComponent {

}
