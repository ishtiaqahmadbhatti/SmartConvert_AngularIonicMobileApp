import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './app_layouts/header/header.component';
import { IonApp, IonSplitPane, IonRouterOutlet } from "@ionic/angular/standalone";
import { Platform } from '@ionic/angular';
import { AdMob } from '@capacitor-community/admob';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
})
export class AppComponent {
  title = 'SmartConvert_AngularMobileApp';

  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Initialize AdMob
      AdMob.initialize();
    });
  }
  
}