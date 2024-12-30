import { Routes } from '@angular/router';

export const AuthenticatioRoutes: Routes = [
  {
    path: 'signin',
    loadComponent: () => import('./signin/signin.component').then(c => c.SigninComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.component').then(c => c.SignupComponent)
  },
  {
    path: 'forgotpassword',
    loadComponent: () => import('./forgotpassword/forgotpassword.component').then(c => c.ForgotpasswordComponent)
  },
  {
    path: 'changepassword',
    loadComponent: () => import('./changepassword/changepassword.component').then(c => c.ChangepasswordComponent)
  },
];
