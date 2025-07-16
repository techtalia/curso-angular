import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';


@Component({
  selector: 'app-root',
  imports: [FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Talia Andrade'

  userData={
    email:'talia@email.com',
    role:'Admin'
  }

  title = 'curso-angular';

}
