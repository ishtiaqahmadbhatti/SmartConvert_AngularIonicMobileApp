import { Component } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";
import { HeaderComponent } from "../../../app_layouts/header/header.component";
import { FooterComponent } from "../../../app_layouts/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent,IonContent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
