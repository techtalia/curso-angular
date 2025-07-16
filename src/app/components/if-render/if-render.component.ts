import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-if-render',
  imports: [NgIf],
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
})
export class IfRenderComponent {
  canShow: boolean = true;
  name = 'Talia'
  name2 = 'NotTalia'
  
}
