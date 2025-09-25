import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-s',
  imports: [],
  templateUrl: './button-s.component.html',
  styleUrl: './button-s.component.scss'
})
export class ButtonSComponent {
  @Input() color: string = "blue";
}
