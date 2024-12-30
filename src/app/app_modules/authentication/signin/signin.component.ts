import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserModel } from '../../../app_controllers/models.controller';
import { UserService } from '../../../app_controllers/services.controller';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule]
})
export class SigninComponent {
  public userModel = new UserModel();

  constructor() {
  }

  ngOnInit() {
    debugger;
  }

  Signin(formData: any) {
    debugger;
  }
}
