import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp, IonSplitPane, IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'SmartConvert_AngularMobileApp';
}