import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-p',
  imports: [],
  templateUrl: './button-p.component.html',
  styleUrl: './button-p.component.scss'
})
export class ButtonPComponent {
  @Input() color: string = "blue";
}
