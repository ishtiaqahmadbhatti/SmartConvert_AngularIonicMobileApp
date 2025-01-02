import { Component } from '@angular/core';
import { FooterComponent } from "../../../app_layouts/footer/footer.component";
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  imports: [FooterComponent, IonContent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ngOnInit() { }
  constructor(private route: Router) { }

  convertPDFToWord() {
    this.route.navigate(['/convert/pdf-to-word']);
  }

  convertWordToPDF() {
    this.route.navigate(['/convert/word-to-pdf']);
  }
}
