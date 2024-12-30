import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserModel } from '../../../app_models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule]
})
export class SignupComponent implements OnInit {
  public userModel = new UserModel();
  constructor(private router: Router) { }

  ngOnInit() { }

  public NavigateToSignin() {
    debugger;
    this.router.navigate(['/auth/login']);
  }

  public NavigateToSignup() {
    debugger;
    this.router.navigate(['/auth/signup']);
  }
  Signup(formData: any) {
    debugger;
  }
}
