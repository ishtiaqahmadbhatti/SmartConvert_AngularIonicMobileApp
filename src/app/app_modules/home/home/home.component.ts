import { Component } from '@angular/core';
import { FooterComponent } from "../../../app_layouts/footer/footer.component";
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  imports: [FooterComponent,IonContent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ngOnInit() {}
  constructor(private route: Router) { }

  convertPDFToWord() {
    this.route.navigate(['/convert/pdf-to-word']);
  }

  convertWordToPDF() {
    this.route.navigate(['/convert/word-to-pdf']);
  }

  convertPDFToImage(){
    this.route.navigate(['/convert/pdf-to-image']);
  }

  convertImageToPDF() {
    this.route.navigate(['/convert/image-to-pdf']);
  }

  mergePDFs() {
    this.route.navigate(['/convert/merge-pdfs']);
  }

  convertVideoToAudio(): void {
    this.route.navigate(['/convert/video-to-audio']);
  }
}
