import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ButtonSComponent } from '../../components/personalizate/buttons/button-s/button-s.component';
import { ButtonPComponent } from '../../components/personalizate/buttons/button-p/button-p.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, ButtonSComponent, ButtonPComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
