import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  data : {} = {
    processing : '',
    category : '',
    title : '',
    description : '',
    users : '',
    priority : ''
  }

}
