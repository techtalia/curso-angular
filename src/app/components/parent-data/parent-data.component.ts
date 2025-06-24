import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css',
})
export class ParentDataComponent {
  @Input()
  name: string = '';

  @Input()
  userData: {
    email: string;
    role: string;
  } = {
    email: '',
    role: '',
  };
}
