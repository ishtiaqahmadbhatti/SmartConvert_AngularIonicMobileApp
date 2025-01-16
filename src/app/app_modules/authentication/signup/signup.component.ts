import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserModel } from '../../../app_models/user.model';
import { UserService } from '../../../app_controllers/services.controller';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [IonContent, CommonModule, RouterModule, FormsModule, ReactiveFormsModule]
})
export class SignupComponent implements OnInit {
  public userModel = new UserModel();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }
  Signup(formData: any) {
     debugger;
     this.router.navigate(['/verification/verifyemailaddress']);
    this.userService.SaveUserRecord(this.userModel).subscribe({
      next: (data: any) => {
        debugger;
        this.router.navigate(['/verification/verifyemailaddress']);
      },
      error: (err) => {
        debugger;
        console.log(err.error);
      },
      complete: () => {
        console.log("Signup process completed.");
      }
    });
  }
}
