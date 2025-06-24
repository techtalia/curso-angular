import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = 'Talia';
  hobbies: Array<string> = ["correr", "jogar",'estudar']
  jogos = {
    rpg: 'Dragon Age',
    mobile: 'Postknight',
  }

}
